'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { trackServicePageView } from '@/lib/analytics'
import { useJobLocations, JobLocation } from '@/hooks/useJobLocations'

// Sample job locations (privacy-protected coordinates - general areas only)
// This will be replaced by real-time data from useJobLocations hook

// Service type colors for map markers
const serviceColors = {
  'ac-repair': '#3B82F6', // Blue
  'heating-repair': '#EF4444', // Red
  'installation': '#10B981', // Green
  'maintenance': '#F59E0B', // Amber
  'commercial': '#8B5CF6', // Purple
  'emergency': '#DC2626' // Dark Red
}

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

interface JobLocationMapProps {
  showJobLocations?: boolean
  height?: string
}

export default function JobLocationMap({ 
  showJobLocations = true, 
  height = '400px' 
}: JobLocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedJob, setSelectedJob] = useState<JobLocation | null>(null)
  const [filterService, setFilterService] = useState<string>('all')
  const [showStats, setShowStats] = useState(true)

  // Use real-time job locations from hook
  const { 
    jobLocations, 
    loading: locationsLoading, 
    error: locationsError,
    lastUpdated,
    refresh,
    totalJobs,
    averageSatisfaction 
  } = useJobLocations({ 
    serviceType: filterService,
    days: 30,
    refreshInterval: 300000 // 5 minutes
  })

  // Initialize Google Maps
  useEffect(() => {
    const initializeMap = () => {
      if (!window.google || !mapRef.current) return

      // Cole Air location (Moss Bluff)
      const coleAirLocation = { lat: 30.2925, lng: -93.1879 }

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        zoom: 10, // Limited zoom to protect privacy
        minZoom: 9, // Prevent zooming in too close
        maxZoom: 12, // Maximum zoom level for privacy
        center: coleAirLocation,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }] // Hide points of interest to reduce clutter
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        gestureHandling: 'cooperative'
      })

      // Add Cole Air headquarters marker
      const headquartersMarker = new window.google.maps.Marker({
        position: coleAirLocation,
        map: mapInstance,
        title: 'Cole Air, Inc. - Headquarters',
        icon: {
          url: '/logos/25%_ColeAir_Inverted_Logo_BGRemoved_Transparent_HighRes.PNG', // Custom Cole Air logo marker
          scaledSize: new window.google.maps.Size(32, 32),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(16, 32)
        }
      })

      // Info window for headquarters
      const headquartersInfo = new window.google.maps.InfoWindow({
        content: `
          <div class="p-4 max-w-sm">
            <h3 class="font-bold text-blue-800 mb-2">Cole Air, Inc. Headquarters</h3>
            <p class="text-gray-600 mb-2">Serving Southwest Louisiana since 1985</p>
            <p class="text-sm text-gray-500">📞 (337) 855-6278</p>
            <p class="text-sm text-gray-500">🕒 24/7 Emergency Service</p>
          </div>
        `
      })

      headquartersMarker.addListener('click', () => {
        headquartersInfo.open(mapInstance, headquartersMarker)
      })

      // Add job completion markers if enabled
      if (showJobLocations) {
        addJobMarkers(mapInstance)
      }

      setMap(mapInstance)
      setIsLoaded(true)
    }

    // Load Google Maps API if not already loaded
    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`
      script.async = true
      script.defer = true
      window.initMap = initializeMap
      document.head.appendChild(script)
    } else {
      initializeMap()
    }
  }, [showJobLocations])

  // Add job completion markers
  const addJobMarkers = useCallback((mapInstance: any) => {
    const filteredJobs = filterService === 'all' 
      ? jobLocations 
      : jobLocations.filter((job: JobLocation) => job.serviceType === filterService)

    filteredJobs.forEach((job: JobLocation) => {
      // Create custom Cole Air logo marker
      const marker = new window.google.maps.Marker({
        position: { lat: job.lat, lng: job.lng },
        map: mapInstance,
        title: `${job.service} - ${job.neighborhood}`,
        icon: {
          url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(createJobMarkerSVG(serviceColors[job.serviceType]))}`,
          scaledSize: new window.google.maps.Size(24, 24),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(12, 12)
        }
      })

      // Info window for job completion
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-3 max-w-xs">
            <div class="flex items-center mb-2">
              <div class="w-3 h-3 rounded-full mr-2" style="background-color: ${serviceColors[job.serviceType]}"></div>
              <h4 class="font-semibold text-gray-800">${job.service}</h4>
            </div>
            <p class="text-sm text-gray-600 mb-1">📍 ${job.neighborhood}</p>
            <p class="text-sm text-gray-600 mb-1">📅 ${new Date(job.date).toLocaleDateString()}</p>
            ${job.satisfaction ? `<p class="text-sm text-yellow-600">${'⭐'.repeat(job.satisfaction)} Customer Rating</p>` : ''}
            ${job.technician ? `<p class="text-sm text-blue-600">👨‍🔧 ${job.technician}</p>` : ''}
            <div class="mt-2 pt-2 border-t border-gray-200">
              <p class="text-xs text-blue-600 font-medium">✓ Job Completed Successfully</p>
            </div>
          </div>
        `
      })

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker)
        setSelectedJob(job)
        trackServicePageView('job_location_clicked')
      })
    })
  }, [jobLocations, filterService])

  // Create SVG marker for job locations
  const createJobMarkerSVG = (color: string) => {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" fill="${color}" stroke="white" stroke-width="2"/>
        <text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-family="Arial, sans-serif" font-weight="bold">CA</text>
      </svg>
    `
  }

  // Calculate service statistics from hook data
  const serviceStats = jobLocations.reduce((acc: Record<string, number>, job: JobLocation) => {
    acc[job.serviceType] = (acc[job.serviceType] || 0) + 1
    return acc
  }, {})

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Map Controls */}
      <div className="p-4 bg-gray-50 border-b">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Service Coverage Map</h3>
            <p className="text-sm text-gray-600">Recent job completions across Southwest Louisiana</p>
          </div>
          
          {showJobLocations && (
            <div className="flex items-center gap-4">
              <select
                value={filterService}
                onChange={(e) => setFilterService(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
                aria-label="Filter by service type"
              >
                <option value="all">All Services</option>
                <option value="ac-repair">AC Repair</option>
                <option value="heating-repair">Heating Repair</option>
                <option value="installation">Installation</option>
                <option value="maintenance">Maintenance</option>
                <option value="commercial">Commercial</option>
                <option value="emergency">Emergency</option>
              </select>
              
              <button
                onClick={() => setShowStats(!showStats)}
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
              >
                {showStats ? 'Hide Stats' : 'Show Stats'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Service Statistics */}
      {showStats && showJobLocations && (
        <div className="p-4 bg-blue-50 border-b">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{totalJobs}</div>
              <div className="text-xs text-gray-600">Jobs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{averageSatisfaction.toFixed(1)}⭐</div>
              <div className="text-xs text-gray-600">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{Object.keys(serviceStats).length}</div>
              <div className="text-xs text-gray-600">Service Types</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">9</div>
              <div className="text-xs text-gray-600">Service Areas</div>
            </div>
          </div>
        </div>
      )}

      {/* Map Container */}
      <div 
        ref={mapRef} 
        className="w-full"
        style={{ height, minHeight: '400px' }}
      />

      {/* Legend */}
      {showJobLocations && (
        <div className="p-4 bg-gray-50 border-t">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Service Legend:</h4>
          <div className="flex flex-wrap gap-4 text-xs">
            {Object.entries(serviceColors).map(([service, color]) => (
              <div key={service} className="flex items-center">
                <div 
                  className={`w-3 h-3 rounded-full mr-1 service-color-${service}`}
                />
                <span className="text-gray-600 capitalize">
                  {service.replace('-', ' ')}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            🔒 Customer privacy protected - locations are generalized to neighborhood areas
          </p>
        </div>
      )}

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-600">Loading service coverage map...</p>
          </div>
        </div>
      )}
    </div>
  )
}
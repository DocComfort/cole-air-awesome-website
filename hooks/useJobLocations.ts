'use client'

import { useState, useEffect } from 'react'

export interface JobLocation {
  id: string
  lat: number
  lng: number
  service: string
  date: string
  serviceType: 'ac-repair' | 'heating-repair' | 'installation' | 'maintenance' | 'commercial' | 'emergency'
  neighborhood: string
  satisfaction?: number
  technician?: string
  invoiceAmount?: number
}

interface UseJobLocationsOptions {
  serviceType?: string
  days?: number
  refreshInterval?: number // milliseconds
}

export function useJobLocations(options: UseJobLocationsOptions = {}) {
  const [jobLocations, setJobLocations] = useState<JobLocation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const {
    serviceType,
    days = 30,
    refreshInterval = 300000 // 5 minutes default
  } = options

  const fetchJobLocations = async () => {
    try {
      setError(null)
      
      const params = new URLSearchParams()
      if (serviceType && serviceType !== 'all') {
        params.append('service_type', serviceType)
      }
      params.append('days', days.toString())
      
      const response = await fetch(`/api/webhook/job-locations?${params}`)
      
      if (!response.ok) {
        throw new Error(`Failed to fetch job locations: ${response.statusText}`)
      }
      
      const data = await response.json()
      
      if (data.success) {
        setJobLocations(data.data)
        setLastUpdated(new Date())
      } else {
        throw new Error('API returned unsuccessful response')
      }
      
    } catch (err) {
      console.error('Error fetching job locations:', err)
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
      
      // Fallback to sample data if API fails
      setJobLocations(getSampleJobLocations())
      
    } finally {
      setLoading(false)
    }
  }

  // Initial fetch and periodic refresh
  useEffect(() => {
    fetchJobLocations()
    
    if (refreshInterval > 0) {
      const interval = setInterval(fetchJobLocations, refreshInterval)
      return () => clearInterval(interval)
    }
  }, [serviceType, days, refreshInterval])

  // Manual refresh function
  const refresh = () => {
    setLoading(true)
    fetchJobLocations()
  }

  return {
    jobLocations,
    loading,
    error,
    lastUpdated,
    refresh,
    totalJobs: jobLocations.length,
    averageSatisfaction: calculateAverageSatisfaction(jobLocations)
  }
}

// Calculate average satisfaction rating
function calculateAverageSatisfaction(jobs: JobLocation[]): number {
  const jobsWithRatings = jobs.filter(job => job.satisfaction)
  if (jobsWithRatings.length === 0) return 0
  
  const total = jobsWithRatings.reduce((sum, job) => sum + (job.satisfaction || 0), 0)
  return Math.round((total / jobsWithRatings.length) * 10) / 10
}

// Sample job locations for fallback/development
function getSampleJobLocations(): JobLocation[] {
  return [
    // Lake Charles Downtown Area
    { 
      id: '1', 
      lat: 30.2266, 
      lng: -93.2174, 
      service: 'AC Repair', 
      date: '2025-10-20', 
      serviceType: 'ac-repair', 
      neighborhood: 'Downtown Lake Charles', 
      satisfaction: 5,
      technician: 'Mike Johnson',
      invoiceAmount: 285
    },
    { 
      id: '2', 
      lat: 30.2285, 
      lng: -93.2165, 
      service: 'Heat Pump Installation', 
      date: '2025-10-18', 
      serviceType: 'installation', 
      neighborhood: 'Downtown Lake Charles', 
      satisfaction: 5,
      technician: 'Sarah Davis',
      invoiceAmount: 4200
    },
    
    // Prien Lake Area
    { 
      id: '3', 
      lat: 30.2158, 
      lng: -93.2889, 
      service: 'Commercial HVAC Maintenance', 
      date: '2025-10-19', 
      serviceType: 'commercial', 
      neighborhood: 'Prien Lake', 
      satisfaction: 5,
      technician: 'Robert Wilson',
      invoiceAmount: 650
    },
    { 
      id: '4', 
      lat: 30.2178, 
      lng: -93.2912, 
      service: 'AC Maintenance', 
      date: '2025-10-17', 
      serviceType: 'maintenance', 
      neighborhood: 'Prien Lake', 
      satisfaction: 4,
      technician: 'Mike Johnson',
      invoiceAmount: 165
    },
    
    // Moss Bluff Area
    { 
      id: '5', 
      lat: 30.2925, 
      lng: -93.1879, 
      service: 'Emergency AC Repair', 
      date: '2025-10-21', 
      serviceType: 'emergency', 
      neighborhood: 'Moss Bluff', 
      satisfaction: 5,
      technician: 'David Cole',
      invoiceAmount: 425
    },
    { 
      id: '6', 
      lat: 30.2935, 
      lng: -93.1889, 
      service: 'Heat Pump Installation', 
      date: '2025-10-16', 
      serviceType: 'installation', 
      neighborhood: 'Moss Bluff', 
      satisfaction: 5,
      technician: 'Sarah Davis',
      invoiceAmount: 3850
    },
    
    // Sulphur Area
    { 
      id: '7', 
      lat: 30.2366, 
      lng: -93.3774, 
      service: 'AC Repair', 
      date: '2025-10-15', 
      serviceType: 'ac-repair', 
      neighborhood: 'Sulphur', 
      satisfaction: 5,
      technician: 'Robert Wilson',
      invoiceAmount: 320
    },
    { 
      id: '8', 
      lat: 30.2385, 
      lng: -93.3765, 
      service: 'Heating System Repair', 
      date: '2025-10-14', 
      serviceType: 'heating-repair', 
      neighborhood: 'Sulphur', 
      satisfaction: 4,
      technician: 'Mike Johnson',
      invoiceAmount: 275
    },
    
    // Westlake Area
    { 
      id: '9', 
      lat: 30.2444, 
      lng: -93.2544, 
      service: 'Commercial HVAC Installation', 
      date: '2025-10-13', 
      serviceType: 'commercial', 
      neighborhood: 'Westlake', 
      satisfaction: 5,
      technician: 'David Cole',
      invoiceAmount: 8500
    },
    { 
      id: '10', 
      lat: 30.2455, 
      lng: -93.2535, 
      service: 'AC Maintenance', 
      date: '2025-10-12', 
      serviceType: 'maintenance', 
      neighborhood: 'Westlake', 
      satisfaction: 5,
      technician: 'Sarah Davis',
      invoiceAmount: 185
    },
    
    // Additional service areas
    { 
      id: '11', 
      lat: 30.4477, 
      lng: -93.4358, 
      service: 'Heating Repair', 
      date: '2025-10-11', 
      serviceType: 'heating-repair', 
      neighborhood: 'DeQuincy', 
      satisfaction: 5,
      technician: 'Robert Wilson',
      invoiceAmount: 295
    },
    { 
      id: '12', 
      lat: 30.1897, 
      lng: -93.5819, 
      service: 'AC Installation', 
      date: '2025-10-10', 
      serviceType: 'installation', 
      neighborhood: 'Vinton', 
      satisfaction: 4,
      technician: 'Mike Johnson',
      invoiceAmount: 3200
    },
    { 
      id: '13', 
      lat: 29.7967, 
      lng: -93.3266, 
      service: 'Emergency AC Repair', 
      date: '2025-10-09', 
      serviceType: 'emergency', 
      neighborhood: 'Cameron', 
      satisfaction: 5,
      technician: 'David Cole',
      invoiceAmount: 385
    },
    { 
      id: '14', 
      lat: 30.1897, 
      lng: -93.3102, 
      service: 'AC Repair', 
      date: '2025-10-08', 
      serviceType: 'ac-repair', 
      neighborhood: 'Carlyss', 
      satisfaction: 5,
      technician: 'Sarah Davis',
      invoiceAmount: 240
    },
    { 
      id: '15', 
      lat: 30.2377, 
      lng: -93.0127, 
      service: 'HVAC Maintenance', 
      date: '2025-10-07', 
      serviceType: 'maintenance', 
      neighborhood: 'Iowa', 
      satisfaction: 5,
      technician: 'Robert Wilson',
      invoiceAmount: 195
    }
  ]
}
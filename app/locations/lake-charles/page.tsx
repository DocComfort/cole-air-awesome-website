import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceMetadata } from '@/lib/metadata'
import { serviceJsonLd } from '@/lib/seo'
import GoogleMap from '@/components/GoogleMap'
import BookingWidget from '@/components/BookingWidget'
import { TrackablePhoneLink } from '@/lib/analytics'

export const metadata: Metadata = generateServiceMetadata(
  'HVAC Lake Charles LA | Heating & AC Repair | Cole Air Inc',
  'Expert HVAC services in Lake Charles, Louisiana. AC repair, heating service, installation. Serving downtown Lake Charles, Prien Lake, & surrounding areas. Call (337) 855-6278!',
  '/locations/lake-charles'
)

const lakeCharlesAreas = [
  'Downtown Lake Charles',
  'Prien Lake Area',
  'South Lake Charles',
  'Contraband Bayou',
  'University District',
  'Historic District',
  'Imperial Calcasieu',
  'McNeese State University Area'
]

const localLandmarks = [
  { name: 'McNeese State University', service: 'Student housing & campus HVAC' },
  { name: 'Prien Lake Mall', service: 'Commercial retail HVAC' },
  { name: 'Lake Charles Civic Center', service: 'Large venue climate control' },
  { name: 'Imperial Calcasieu Museum', service: 'Museum climate control' },
  { name: 'Chennault Aviation Museum', service: 'Specialized museum HVAC' },
  { name: 'Central School Arts Center', service: 'Educational facility HVAC' }
]

const neighborhoodInfo = [
  {
    area: 'Downtown Lake Charles',
    description: 'Historic buildings and modern offices require specialized HVAC solutions',
    commonIssues: 'Older building retrofits, commercial space climate control',
    zipCodes: '70601, 70602'
  },
  {
    area: 'Prien Lake Area',
    description: 'Upscale residential homes with high-end HVAC systems',
    commonIssues: 'Luxury home installations, lakefront humidity control',
    zipCodes: '70605, 70607'
  },
  {
    area: 'University District',
    description: 'Student housing and educational facilities',
    commonIssues: 'Multi-unit buildings, educational facility HVAC',
    zipCodes: '70609'
  }
]

export default function LakeCharlesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd(
            'HVAC Services Lake Charles LA',
            'Professional HVAC services in Lake Charles, Louisiana including AC repair, heating service, and installation.',
            '/locations/lake-charles'
          ))
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                HVAC Services in
                <span className="block text-blue-300">Lake Charles, Louisiana</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Serving Lake Charles since 1985. From downtown historic buildings to Prien Lake luxury homes - we keep Lake Charles comfortable year-round.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <TrackablePhoneLink 
                  source="lake_charles_hero"
                  className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
                >
                  📞 Call Now: (337) 855-6278
                </TrackablePhoneLink>
                <Link
                  href="/contact"
                  className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
                >
                  Schedule Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Lake Charles Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Lake Charles HVAC Service Areas
              </h2>
              <p className="text-xl text-gray-600">
                Professional heating and cooling service throughout Lake Charles
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lakeCharlesAreas.map((area, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-blue-600 text-2xl mb-3">🏠</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{area}</h3>
                  <p className="text-gray-600">Same-day HVAC service</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhood Expertise */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Local Lake Charles Expertise
              </h2>
              <p className="text-xl text-gray-600">
                We know Lake Charles neighborhoods and their unique HVAC needs
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {neighborhoodInfo.map((neighborhood, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{neighborhood.area}</h3>
                  <p className="text-gray-600 mb-4">{neighborhood.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-blue-600">Common Services:</p>
                    <p className="text-sm text-gray-600">{neighborhood.commonIssues}</p>
                    <p className="text-sm font-medium text-green-600">Zip Codes: {neighborhood.zipCodes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Landmarks */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Serving Lake Charles Landmarks
              </h2>
              <p className="text-xl text-gray-600">
                We've provided HVAC services throughout Lake Charles for decades
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localLandmarks.map((landmark, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-blue-600 text-2xl mb-3">🏛️</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{landmark.name}</h3>
                  <p className="text-gray-600">{landmark.service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lake Charles Climate */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Lake Charles Climate Challenges
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                      🌊
                    </div>
                    <div>
                      <h3 className="font-semibold">High Humidity from Calcasieu Lake</h3>
                      <p className="text-gray-600">Lake proximity creates extra humidity challenges for HVAC systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                      🌀
                    </div>
                    <div>
                      <h3 className="font-semibold">Hurricane Season Preparation</h3>
                      <p className="text-gray-600">Annual storm season requires robust, reliable HVAC systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                      ☀️
                    </div>
                    <div>
                      <h3 className="font-semibold">Extreme Summer Heat</h3>
                      <p className="text-gray-600">Louisiana summers demand efficient, powerful cooling systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                      ❄️
                    </div>
                    <div>
                      <h3 className="font-semibold">Occasional Winter Freezes</h3>
                      <p className="text-gray-600">Surprise cold snaps require reliable backup heating</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">40+ Years in Lake Charles</h3>
                  <p className="text-gray-600">We've weathered every storm and heat wave with our customers</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Emergency Storm Response</h3>
                  <p className="text-gray-600">Post-hurricane HVAC restoration and emergency repairs</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Energy Efficiency Focus</h3>
                  <p className="text-gray-600">Helping Lake Charles families save on Entergy bills</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Complete HVAC Services for Lake Charles
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/ac-repair" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-blue-600 text-2xl mb-3">❄️</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">AC Repair & Installation</h3>
                <p className="text-gray-600">Emergency air conditioning service throughout Lake Charles</p>
              </Link>
              
              <Link href="/services/heating-repair" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-orange-600 text-2xl mb-3">🔥</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600">Heating Repair & Service</h3>
                <p className="text-gray-600">Furnace and heat pump service for Lake Charles winters</p>
              </Link>
              
              <Link href="/services/commercial-hvac" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-purple-600 text-2xl mb-3">🏢</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600">Commercial HVAC</h3>
                <p className="text-gray-600">Business climate control for downtown Lake Charles</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Schedule Lake Charles HVAC Service?
              </h2>
              <p className="text-xl mb-8">
                Same-day service available throughout Lake Charles and surrounding areas
              </p>
            </div>
            
            <BookingWidget />
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Located in Moss Bluff, Serving Lake Charles
              </h2>
              <p className="text-gray-600">Just minutes from downtown Lake Charles and Prien Lake</p>
            </div>
            <GoogleMap />
          </div>
        </section>
      </main>
    </>
  )
}
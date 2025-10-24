import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceMetadata } from '@/lib/metadata'
import { serviceJsonLd } from '@/lib/seo'
import GoogleMap from '@/components/GoogleMap'
import BookingWidget from '@/components/BookingWidget'

export const metadata: Metadata = generateServiceMetadata(
  'Commercial HVAC Lake Charles LA | Business Refrigeration Service',
  'Commercial HVAC & refrigeration service in Lake Charles. Restaurants, offices, retail - we keep your business running. Call (337) 855-6278 for commercial service!',
  '/services/commercial-hvac'
)

const commercialServices = [
  'Restaurant Kitchen Ventilation',
  'Commercial Refrigeration',
  'Office Building HVAC',
  'Retail Store Climate Control',
  'Warehouse Ventilation',
  'Medical Facility HVAC',
  'Industrial Cooling Systems',
  'Emergency Commercial Repair',
  'Preventive Maintenance Plans',
  'Energy Efficiency Audits'
]

const commercialBenefits = [
  'Minimize business downtime',
  'Energy cost reduction',
  'Compliance with health codes',
  'Employee comfort & productivity',
  'Equipment longevity',
  'Emergency 24/7 service'
]

const businessTypes = [
  { name: 'Restaurants', icon: '🍽️', description: 'Kitchen ventilation, walk-in coolers, ice machines' },
  { name: 'Offices', icon: '🏢', description: 'Climate control, air quality, energy efficiency' },
  { name: 'Retail Stores', icon: '🛍️', description: 'Customer comfort, display case refrigeration' },
  { name: 'Medical Facilities', icon: '🏥', description: 'Critical temperature control, air quality standards' },
  { name: 'Warehouses', icon: '📦', description: 'Industrial ventilation, product storage climate' },
  { name: 'Manufacturing', icon: '🏭', description: 'Process cooling, equipment temperature control' }
]

export default function CommercialHVACPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd(
            'Commercial HVAC Services',
            'Professional commercial HVAC and refrigeration services for businesses in Lake Charles, Louisiana and surrounding areas.',
            '/services/commercial-hvac'
          ))
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Commercial HVAC Services
                <span className="block text-blue-300">Lake Charles, Louisiana</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Keep your business running with reliable commercial HVAC and refrigeration service. 40+ years serving Southwest Louisiana businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3378556278"
                  className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
                >
                  📞 Emergency Service: (337) 855-6278
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
                >
                  Get Commercial Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Business Emergency */}
        <section className="py-12 bg-red-50 border-l-4 border-red-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-red-800 mb-4">
                🚨 Business HVAC Emergency? We're Available 24/7!
              </h2>
              <p className="text-lg text-red-700 mb-6">
                Don't let equipment failure shut down your business. Emergency commercial service available now.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                <p className="text-2xl font-bold text-red-800 mb-2">Emergency Response Time</p>
                <p className="text-4xl font-bold text-orange-600">Under 2 Hours</p>
                <p className="text-gray-600">For critical business systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Types We Serve */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Businesses We Serve
              </h2>
              <p className="text-xl text-gray-600">
                Specialized HVAC solutions for every type of business
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessTypes.map((business, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4 text-center">{business.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{business.name}</h3>
                  <p className="text-gray-600 text-center">{business.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Complete Commercial HVAC Services
              </h2>
              <p className="text-xl text-gray-600">
                From installation to emergency repair - we keep your business comfortable
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercialServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-blue-600 text-2xl mb-3">🏢</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service}</h3>
                  <p className="text-gray-600">Professional commercial HVAC solutions</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Why Lake Charles Businesses Choose ColeAir
                </h2>
                <div className="space-y-4">
                  {commercialBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                        ✓
                      </div>
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Maintenance Contracts Available</h3>
                  <p className="text-blue-700">
                    Prevent costly breakdowns with our comprehensive maintenance programs. 
                    Regular service keeps your equipment running efficiently and extends its lifespan.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">40+ Years Experience</h3>
                  <p className="text-gray-600">Serving Southwest Louisiana businesses since 1985</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600">Full commercial HVAC and refrigeration licensing</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Emergency Service</h3>
                  <p className="text-gray-600">Never let equipment failure shut down your business</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Energy Efficiency Focus</h3>
                  <p className="text-gray-600">Reduce operating costs with efficient systems</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Commercial Service Areas
              </h2>
              <p className="text-xl text-gray-600">
                Serving businesses throughout Southwest Louisiana
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Lake Charles', 'Moss Bluff', 'Sulphur', 'Westlake', 
                'DeQuincy', 'Vinton', 'Cameron', 'Carlyss', 'Iowa'
              ].map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{area}</h3>
                  <p className="text-blue-600">🏢 Commercial service available</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Improve Your Business Comfort?
              </h2>
              <p className="text-xl mb-8">
                Get a custom commercial HVAC solution for your business today!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-white text-blue-600 text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  📞
                </div>
                <h3 className="text-xl font-semibold mb-2">Call for Emergency</h3>
                <p>24/7 emergency commercial service</p>
                <a href="tel:3378556278" className="text-yellow-300 font-semibold">(337) 855-6278</a>
              </div>
              
              <div className="text-center">
                <div className="bg-white text-blue-600 text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  💼
                </div>
                <h3 className="text-xl font-semibold mb-2">Schedule Consultation</h3>
                <p>Free commercial system evaluation</p>
                <Link href="/contact" className="text-yellow-300 font-semibold">Get Quote</Link>
              </div>
              
              <div className="text-center">
                <div className="bg-white text-blue-600 text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  🔧
                </div>
                <h3 className="text-xl font-semibold mb-2">Maintenance Contract</h3>
                <p>Prevent costly equipment failures</p>
                <Link href="/contact" className="text-yellow-300 font-semibold">Learn More</Link>
              </div>
            </div>
            
            <BookingWidget />
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Find Us in Moss Bluff
              </h2>
              <p className="text-gray-600">Serving commercial clients throughout Southwest Louisiana</p>
            </div>
            <GoogleMap />
          </div>
        </section>
      </main>
    </>
  )
}
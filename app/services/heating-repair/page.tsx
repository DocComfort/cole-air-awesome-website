import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceMetadata } from '@/lib/metadata'
import { serviceJsonLd } from '@/lib/seo'
import GoogleMap from '@/components/GoogleMap'
import BookingWidget from '@/components/BookingWidget'

export const metadata: Metadata = generateServiceMetadata(
  'Heating Repair Lake Charles LA | Emergency Furnace Service',
  'Emergency heating repair in Lake Charles & Southwest Louisiana. Fast furnace & heat pump service with 40+ years experience. Call (337) 855-6278 for same-day repair!',
  '/services/heating-repair'
)

const heatingServices = [
  'Emergency Heating Repair (24/7)',
  'Furnace Repair & Replacement',
  'Heat Pump Service',
  'Thermostat Replacement',
  'Gas Line Inspection',
  'Pilot Light Repair',
  'Blower Motor Replacement',
  'Heat Exchanger Service',
  'Ductwork Inspection',
  'Energy Efficiency Upgrades'
]

const heatingEmergencies = [
  'No heat during cold snaps',
  'Strange furnace noises',
  'Gas smell near unit',
  'Pilot light won\'t stay lit',
  'High energy bills',
  'Uneven heating'
]

export default function HeatingRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd(
            'Heating Repair Services',
            'Professional heating repair and emergency furnace service in Lake Charles, Louisiana and surrounding areas.',
            '/services/heating-repair'
          ))
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-600 to-red-700 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Emergency Heating Repair
                <span className="block text-yellow-300">Lake Charles, LA</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Don't let Louisiana cold snaps leave you freezing! Same-day furnace and heat pump repair service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3378556278"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
                >
                  🔥 Call Now: (337) 855-6278
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-orange-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
                >
                  Schedule Online
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Response */}
        <section className="py-12 bg-orange-50 border-l-4 border-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-orange-800 mb-4">
                🔥 Heating Emergency? We're Here 24/7!
              </h2>
              <p className="text-lg text-orange-700 mb-6">
                Louisiana winters can be unpredictable - when your heat goes out, we respond fast!
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {heatingEmergencies.map((issue, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <p className="font-semibold text-gray-800">🔧 {issue}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Complete Heating Services
              </h2>
              <p className="text-xl text-gray-600">
                From emergency repairs to new installations - we keep you warm!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heatingServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-orange-600 text-2xl mb-3">🔥</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service}</h3>
                  <p className="text-gray-600">Expert heating solutions for Louisiana homes</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Louisiana-Specific Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Louisiana Heating Experts
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We understand Southwest Louisiana's unique heating needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Louisiana Advantage</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Experience with Louisiana's humid climate effects on heating systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Familiar with local building codes and requirements
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Hurricane-resistant installation techniques
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Energy-efficient solutions for year-round comfort
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Quick response during winter cold fronts
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Louisiana Issues</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">⚠️</span>
                    Humidity causing corrosion in heating components
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">⚠️</span>
                    Salt air damage in coastal areas
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">⚠️</span>
                    Sudden temperature drops overwhelming systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">⚠️</span>
                    Hurricane damage to outdoor heating equipment
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">⚠️</span>
                    High humidity affecting indoor air quality
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Heating Service Areas
              </h2>
              <p className="text-xl text-gray-600">
                Emergency heating repair throughout Southwest Louisiana
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Lake Charles', 'Moss Bluff', 'Sulphur', 'Westlake', 
                'DeQuincy', 'Vinton', 'Cameron', 'Carlyss', 'Iowa'
              ].map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{area}</h3>
                  <p className="text-orange-600">🔥 24/7 heating service</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Heating Repair Now?
              </h2>
              <p className="text-xl mb-8">
                Don't spend another cold night without heat - call us today!
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
                Find Us in Moss Bluff
              </h2>
              <p className="text-gray-600">Serving all of Southwest Louisiana with reliable heating service</p>
            </div>
            <GoogleMap />
          </div>
        </section>
      </main>
    </>
  )
}
import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceMetadata } from '@/lib/metadata'
import { serviceJsonLd } from '@/lib/seo'
import GoogleMap from '@/components/GoogleMap'
import BookingWidget from '@/components/BookingWidget'

export const metadata: Metadata = generateServiceMetadata(
  'AC Repair Lake Charles LA | Same-Day Air Conditioning Service',
  'Emergency AC repair in Lake Charles & Southwest Louisiana. Fast, reliable air conditioning service with 40+ years experience. Call (337) 855-6278 for same-day repair!',
  '/services/ac-repair'
)

const acRepairServices = [
  'Emergency AC Repair (24/7)',
  'AC Unit Not Cooling',
  'Refrigerant Leak Repair',
  'Compressor Replacement',
  'Thermostat Issues',
  'Electrical Component Repair',
  'Ductwork Inspection & Repair',
  'Filter Replacement',
  'System Tune-ups',
  'Energy Efficiency Upgrades'
]

const emergencySignatures = [
  'AC won\'t turn on',
  'Blowing warm air',
  'Strange noises or smells',
  'High humidity indoors',
  'Ice buildup on unit',
  'Electrical issues'
]

export default function ACRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd(
            'AC Repair Services',
            'Professional air conditioning repair and emergency AC service in Lake Charles, Louisiana and surrounding areas.',
            '/services/ac-repair'
          ))
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Emergency AC Repair
                <span className="block text-orange-400">Lake Charles, LA</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Same-day air conditioning repair service. 40+ years of expertise keeping Southwest Louisiana cool.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3378556278"
                  className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
                >
                  📞 Call Now: (337) 855-6278
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
                >
                  Schedule Online
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Response */}
        <section className="py-12 bg-red-50 border-l-4 border-red-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-red-800 mb-4">
                🚨 AC Emergency? We're Available 24/7!
              </h2>
              <p className="text-lg text-red-700 mb-6">
                Don't suffer in Louisiana heat! Our emergency technicians are standing by.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {emergencySignatures.map((issue, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <p className="font-semibold text-gray-800">✓ {issue}</p>
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
                Complete AC Repair Services
              </h2>
              <p className="text-xl text-gray-600">
                From emergency repairs to preventive maintenance - we do it all!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {acRepairServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-blue-600 text-2xl mb-3">❄️</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service}</h3>
                  <p className="text-gray-600">Professional service with guaranteed results</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Lake Charles Trusts ColeAir
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  🏆
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">40+ Years Experience</h3>
                <p className="text-gray-600">Serving Southwest Louisiana since 1985</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-600 text-white text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Emergency repairs completed quickly</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  ✅
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully certified HVAC professionals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 text-white text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  💯
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Satisfaction</h3>
                <p className="text-gray-600">Guaranteed workmanship and service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                AC Repair Service Areas
              </h2>
              <p className="text-xl text-gray-600">
                Emergency AC repair throughout Southwest Louisiana
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Lake Charles', 'Moss Bluff', 'Sulphur', 'Westlake', 
                'DeQuincy', 'Vinton', 'Cameron', 'Carlyss', 'Iowa'
              ].map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{area}</h3>
                  <p className="text-blue-600">✓ Same-day service available</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Fix Your AC?
              </h2>
              <p className="text-xl mb-8">
                Don't wait in the heat - schedule your AC repair today!
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
              <p className="text-gray-600">Serving all of Southwest Louisiana from our Moss Bluff location</p>
            </div>
            <GoogleMap />
          </div>
        </section>
      </main>
    </>
  )
}
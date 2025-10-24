import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceMetadata } from '@/lib/metadata'
import { serviceJsonLd } from '@/lib/seo'
import { NewsletterSignup, SeasonalMaintenanceAlert } from '@/components/LeadCapture'

export const metadata: Metadata = generateServiceMetadata(
  'Hurricane HVAC Prep Lake Charles | Storm-Ready AC Systems',
  'Prepare your HVAC for hurricane season in Southwest Louisiana. Emergency storm prep, backup power, post-storm repairs. Call (337) 855-6278 for hurricane readiness!',
  '/seasonal/hurricane-prep'
)

const hurricaneSteps = [
  {
    step: 1,
    title: 'Secure Outdoor Units',
    description: 'Anchor or protect AC condensers and heat pumps from flying debris',
    urgency: 'Critical'
  },
  {
    step: 2,
    title: 'Clear Drainage Systems',
    description: 'Ensure condensate drains are clear to prevent flooding damage',
    urgency: 'Important'
  },
  {
    step: 3,
    title: 'Document Your System',
    description: 'Take photos and record model numbers for insurance claims',
    urgency: 'Helpful'
  },
  {
    step: 4,
    title: 'Backup Power Planning',
    description: 'Consider generator sizing for HVAC operation during outages',
    urgency: 'Critical'
  },
  {
    step: 5,
    title: 'Emergency Shut-off',
    description: 'Know how to safely shut off electrical and gas connections',
    urgency: 'Critical'
  },
  {
    step: 6,
    title: 'Post-Storm Inspection',
    description: 'Never attempt repairs yourself - call professionals',
    urgency: 'Critical'
  }
]

const commonStormDamage = [
  {
    damage: 'Refrigerant Line Damage',
    description: 'Flying debris can puncture refrigerant lines',
    prevention: 'Install protective barriers or move units if possible'
  },
  {
    damage: 'Electrical Component Failure',
    description: 'Power surges and water damage to electrical systems',
    prevention: 'Use surge protectors and ensure proper grounding'
  },
  {
    damage: 'Condenser Fan Damage',
    description: 'Wind and debris can damage outdoor unit fans',
    prevention: 'Secure or cover outdoor units before storm arrival'
  },
  {
    damage: 'Ductwork Flooding',
    description: 'Storm surge and rain can flood ductwork systems',
    prevention: 'Ensure proper sealing and elevation of duct systems'
  }
]

export default function HurricanePrepPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd(
            'Hurricane HVAC Preparation',
            'Professional hurricane preparation and storm damage repair for HVAC systems in Southwest Louisiana.',
            '/seasonal/hurricane-prep'
          ))
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-700 to-orange-800 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hurricane HVAC Preparation
                <span className="block text-yellow-300">Southwest Louisiana</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Protect your HVAC system from storm damage. 40+ years of hurricane experience keeping Lake Charles families prepared.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3378556278"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
                >
                  🌀 Emergency Storm Service
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-red-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
                >
                  Schedule Prep Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SeasonalMaintenanceAlert />

        {/* Hurricane Season Alert */}
        <section className="py-12 bg-red-100 border-l-4 border-red-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-red-800 mb-4">
                🌀 Hurricane Season: June 1 - November 30
              </h2>
              <p className="text-lg text-red-700 mb-6">
                Southwest Louisiana is in Hurricane Alley. Don't wait until a storm is approaching - prepare your HVAC system now!
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                <p className="text-xl font-bold text-red-800 mb-2">Storm Season Statistics</p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-orange-600">15+</p>
                    <p className="text-sm text-gray-600">Major storms since 1985</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-600">100%</p>
                    <p className="text-sm text-gray-600">Customers restored</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-600">24/7</p>
                    <p className="text-sm text-gray-600">Emergency response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hurricane Prep Steps */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                6-Step Hurricane HVAC Preparation
              </h2>
              <p className="text-xl text-gray-600">
                Protect your investment and ensure quick post-storm recovery
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {hurricaneSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          step.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                          step.urgency === 'Important' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {step.urgency}
                        </span>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Storm Damage */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Common Hurricane HVAC Damage
              </h2>
              <p className="text-xl text-gray-600">
                Learn what to look for and how to prevent storm damage
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {commonStormDamage.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-red-700 mb-3">⚠️ {item.damage}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Prevention:</h4>
                    <p className="text-blue-700">{item.prevention}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Louisiana Hurricane History */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Hurricane Experience
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-gray-800">Hurricane Rita (2005)</h3>
                    <p className="text-gray-600">Category 3 storm - Restored hundreds of HVAC systems</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-gray-800">Hurricane Ike (2008)</h3>
                    <p className="text-gray-600">Widespread power outages - Emergency generator installations</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-gray-800">Hurricane Laura (2020)</h3>
                    <p className="text-gray-600">Category 4 landfall - Round-the-clock recovery operations</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-gray-800">Hurricane Delta (2020)</h3>
                    <p className="text-gray-600">Back-to-back storms - Coordinated regional response</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">40+ Years of Storm Response</h3>
                  <p className="text-orange-700">
                    We've weathered every major storm to hit Southwest Louisiana. 
                    Our experience means faster recovery for your family.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Pre-Storm Services</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Outdoor unit securing</li>
                    <li>• Emergency shut-off training</li>
                    <li>• System documentation</li>
                    <li>• Generator sizing consultation</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Post-Storm Recovery</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 24/7 emergency response</li>
                    <li>• Insurance claim documentation</li>
                    <li>• Complete system restoration</li>
                    <li>• Temporary cooling solutions</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Generator Services</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Whole-house backup power</li>
                    <li>• HVAC-specific generators</li>
                    <li>• Installation & maintenance</li>
                    <li>• Emergency fuel delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Storm Approaching? We're Ready!
              </h2>
              <p className="text-xl mb-8">
                24/7 emergency storm preparation and post-hurricane HVAC restoration
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-white text-red-600 text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  🌀
                </div>
                <h3 className="text-xl font-semibold mb-2">Storm Watch</h3>
                <p>Last-minute system securing and protection</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white text-red-600 text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold mb-2">Post-Storm</h3>
                <p>Emergency repairs and system restoration</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white text-red-600 text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  🔧
                </div>
                <h3 className="text-xl font-semibold mb-2">Insurance</h3>
                <p>Complete documentation for claims</p>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="tel:3378556278"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-12 py-4 rounded-lg text-2xl font-bold transition-colors inline-block"
              >
                🚨 Emergency Hurricane Line: (337) 855-6278
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup />
          </div>
        </section>
      </main>
    </>
  )
}
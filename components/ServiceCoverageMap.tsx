import JobLocationMap from './JobLocationMap'
import { ExitIntentPopup, QuickQuoteWidget, ServiceReminderPopup } from './LeadCapture'

interface ServiceCoverageMapProps {
  className?: string
}

export default function ServiceCoverageMap({ className = "" }: ServiceCoverageMapProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Service Coverage Headline */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Recent Service Completions
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See where we've recently completed HVAC services across Southwest Louisiana. 
          Real job locations from our field service management system - addresses privacy protected.
        </p>
      </div>

      {/* Interactive Job Location Map */}
      <JobLocationMap 
        showJobLocations={true}
        height="500px"
      />

      {/* Service Area Coverage Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
            <div className="text-sm text-gray-600">Jobs This Month</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-1">9</div>
            <div className="text-sm text-gray-600">Service Areas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-1">4.9⭐</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Emergency Response</div>
          </div>
        </div>
      </div>

      {/* Real-time Integration Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <span className="text-blue-600 text-2xl">🔄</span>
          </div>
          <div className="ml-3">
            <h4 className="text-lg font-semibold text-blue-800 mb-1">
              Live Service Tracking
            </h4>
            <p className="text-blue-700 text-sm mb-2">
              Job locations are automatically updated from our field service management system. 
              Customer addresses are privacy-protected to general neighborhood areas only.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">✓ Real-time updates</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">✓ Privacy protected</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">✓ FSM integration</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">✓ HouseCall Pro compatible</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Capture Components */}
      <ExitIntentPopup />
      <QuickQuoteWidget />
      <ServiceReminderPopup />
    </div>
  )
}
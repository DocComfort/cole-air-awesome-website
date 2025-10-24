'use client'

import { useState, useEffect } from 'react'
import { trackFormSubmission, trackQuoteRequest } from '@/lib/analytics'

// Exit Intent Popup Component
export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackFormSubmission('exit_intent_popup')
    setIsVisible(false)
    // Add form submission logic here
    alert('Thanks! We\'ll contact you soon about your HVAC needs.')
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Wait! Don't Miss Out!</h3>
          <p className="text-gray-600">Get a FREE HVAC estimate before you go!</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <select
            aria-label="Service needed"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">What do you need?</option>
            <option value="ac-repair">AC Repair</option>
            <option value="heating-repair">Heating Repair</option>
            <option value="installation">New Installation</option>
            <option value="maintenance">Maintenance</option>
            <option value="emergency">Emergency Service</option>
          </select>
          
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Get My FREE Estimate
          </button>
        </form>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          No spam, just helpful HVAC information and your free estimate!
        </p>
      </div>
    </div>
  )
}

// Newsletter Signup Component
export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackFormSubmission('newsletter_signup')
    setIsSubmitted(true)
    // Add newsletter signup logic here
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 text-3xl mb-2">✅</div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thanks for Subscribing!</h3>
        <p className="text-green-700">You'll receive seasonal HVAC tips and special offers.</p>
      </div>
    )
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          📧 Louisiana HVAC Tips & Savings
        </h3>
        <p className="text-gray-600">
          Get seasonal maintenance reminders and exclusive offers for Southwest Louisiana
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Subscribe
        </button>
      </form>
      
      <p className="text-xs text-gray-500 mt-2">
        Hurricane prep tips • Energy saving advice • Special offers • Unsubscribe anytime
      </p>
    </div>
  )
}

// Service Reminder Popup
export function ServiceReminderPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Show after 30 seconds on page
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }, 30000)

    return () => clearTimeout(timer)
  }, [hasShown])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackFormSubmission('service_reminder')
    setIsVisible(false)
    alert('Great! We\'ll send you helpful HVAC maintenance reminders.')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border max-w-sm p-4 z-40">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>
      
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-1">
          🔔 Never Miss Maintenance!
        </h4>
        <p className="text-sm text-gray-600">
          Get reminders for filter changes, tune-ups, and hurricane prep
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="tel"
          placeholder="Phone number"
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 px-4 rounded text-sm font-semibold hover:bg-orange-700 transition-colors"
        >
          Send Me Reminders
        </button>
      </form>
    </div>
  )
}

// Quick Quote Widget
export function QuickQuoteWidget({ service }: { service?: string }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: service || '',
    urgency: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackQuoteRequest(formData.service)
    alert('Quote request submitted! We\'ll contact you within 2 hours.')
    setIsExpanded(false)
  }

  if (!isExpanded) {
    return (
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-lg"
        >
          💬 Quick Quote
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg border max-w-sm w-full p-4 z-40">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-gray-800">Quick Quote</h4>
        <button
          onClick={() => setIsExpanded(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
          required
        />
        
        <input
          type="tel"
          placeholder="Phone number"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
          required
        />
        
        <select
          value={formData.service}
          onChange={(e) => setFormData({...formData, service: e.target.value})}
          aria-label="Select service type"
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select service</option>
          <option value="ac-repair">AC Repair</option>
          <option value="heating-repair">Heating Repair</option>
          <option value="installation">New Installation</option>
          <option value="maintenance">Maintenance</option>
          <option value="commercial">Commercial Service</option>
          <option value="emergency">Emergency Repair</option>
        </select>
        
        <select
          value={formData.urgency}
          onChange={(e) => setFormData({...formData, urgency: e.target.value})}
          aria-label="Select urgency level"
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">How urgent?</option>
          <option value="emergency">Emergency (24 hours)</option>
          <option value="urgent">Urgent (2-3 days)</option>
          <option value="normal">Normal (1 week)</option>
          <option value="planning">Planning ahead</option>
        </select>
        
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 px-4 rounded text-sm font-semibold hover:bg-orange-700 transition-colors"
        >
          Get My Quote
        </button>
      </form>
    </div>
  )
}

// Seasonal Maintenance Reminder
export function SeasonalMaintenanceAlert() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if it's maintenance season (spring/fall)
    const month = new Date().getMonth()
    const isMaintenanceSeason = month === 2 || month === 3 || month === 8 || month === 9 // March, April, September, October
    
    if (isMaintenanceSeason) {
      setIsVisible(true)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <span className="text-yellow-400 text-2xl">🔔</span>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-yellow-800">
            Seasonal Maintenance Time!
          </h3>
          <p className="text-yellow-700 mt-1">
            It's the perfect time to schedule your HVAC tune-up before peak season. 
            Don't wait until your system breaks down!
          </p>
          <div className="mt-4">
            <button
              onClick={() => trackFormSubmission('seasonal_maintenance_cta')}
              className="bg-yellow-600 text-white px-4 py-2 rounded font-semibold hover:bg-yellow-700 transition-colors"
            >
              Schedule Maintenance
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="ml-2 text-yellow-800 hover:text-yellow-900"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
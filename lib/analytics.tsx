// Google Analytics and conversion tracking components
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with your actual GA4 measurement ID

// Initialize Google Analytics
export function GoogleAnalytics() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

// Page view tracking hook
export function useGoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])
}

// Conversion tracking functions
export const trackConversion = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Specific tracking functions for ColeAir
export const trackPhoneCall = (source: string) => {
  trackConversion('phone_call', 'contact', `phone_call_${source}`, 1)
}

export const trackFormSubmission = (formType: string) => {
  trackConversion('form_submission', 'contact', `form_${formType}`, 1)
}

export const trackBookingClick = (serviceType: string) => {
  trackConversion('booking_click', 'engagement', `booking_${serviceType}`, 1)
}

export const trackServicePageView = (service: string) => {
  trackConversion('service_page_view', 'engagement', `service_${service}`, 1)
}

export const trackEmergencyCall = () => {
  trackConversion('emergency_call', 'contact', 'emergency_service', 5)
}

export const trackQuoteRequest = (serviceType: string) => {
  trackConversion('quote_request', 'lead', `quote_${serviceType}`, 3)
}

// Call tracking component for phone numbers
export function TrackablePhoneLink({ 
  children, 
  source, 
  className = '',
  emergency = false 
}: { 
  children: React.ReactNode
  source: string
  className?: string
  emergency?: boolean
}) {
  const handleClick = () => {
    if (emergency) {
      trackEmergencyCall()
    } else {
      trackPhoneCall(source)
    }
  }

  return (
    <a
      href="tel:3378556278"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

// Enhanced contact form with tracking
export function TrackedContactForm({ serviceType }: { serviceType?: string }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackFormSubmission(serviceType || 'general')
    // Add your form submission logic here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service Needed *
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue={serviceType || ''}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a service</option>
          <option value="ac-repair">AC Repair</option>
          <option value="heating-repair">Heating Repair</option>
          <option value="installation">New Installation</option>
          <option value="maintenance">Maintenance</option>
          <option value="commercial">Commercial Service</option>
          <option value="emergency">Emergency Repair</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Describe Your HVAC Issue
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tell us about your heating or cooling problem..."
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
      >
        Request Service Call
      </button>
    </form>
  )
}

// Heat map integration (Hotjar)
export function Hotjar() {
  useEffect(() => {
    // Replace 'YOUR_HOTJAR_ID' with your actual Hotjar site ID
    const script = document.createElement('script')
    script.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `
    document.head.appendChild(script)
  }, [])

  return null
}

// Facebook Pixel for retargeting
export function FacebookPixel() {
  useEffect(() => {
    const script = document.createElement('script')
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `
    document.head.appendChild(script)
  }, [])

  return null
}
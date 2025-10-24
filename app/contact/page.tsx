import { BRAND } from "@/lib/brand";
import { generateMetadata } from "@/lib/metadata";
import GoogleMap from "@/components/GoogleMap";
import BookingWidget from "@/components/BookingWidget";

export const metadata = generateMetadata({
  title: "Contact Cole Air | HVAC Services Lake Charles, LA",
  description: "Contact Cole Air for expert HVAC services in Lake Charles, LA. 24/7 emergency service, free estimates. Call (337) 855-6628 or schedule online today.",
  keywords: [
    "contact HVAC Lake Charles",
    "emergency HVAC service",
    "schedule HVAC appointment",
    "HVAC estimate Lake Charles",
    "Cole Air contact"
  ],
  canonical: `${BRAND.url}/contact`
});

export default function ContactPage() {
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4 text-brand-blue">Contact Cole Air, Inc.</h1>
        <p className="text-lg text-slate-700">
          Ready to schedule service? We're here to help with all your heating, cooling, and refrigeration needs.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Booking Widget - Prominent placement */}
        <div className="lg:order-3">
          <BookingWidget />
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 lg:order-1">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Request Service or Free Estimate</h2>
            <p className="text-slate-700 mb-6">
              Get a free estimate for installations or schedule service. We respond quickly with competitive pricing and honest recommendations.
            </p>
            <form name="contact" method="POST" data-netlify="true" className="grid gap-4">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Name *</span>
                  <input 
                    className="border rounded-xl px-3 py-2 focus:border-brand-blue focus:outline-none" 
                    name="name" 
                    required 
                    placeholder="Your full name"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Phone *</span>
                  <input 
                    className="border rounded-xl px-3 py-2 focus:border-brand-blue focus:outline-none" 
                    name="phone" 
                    type="tel"
                    required 
                    placeholder="(337) 123-4567"
                  />
                </label>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Email</span>
                  <input 
                    className="border rounded-xl px-3 py-2 focus:border-brand-blue focus:outline-none" 
                    name="email" 
                    type="email" 
                    placeholder="your@email.com"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Service Needed</span>
                  <select 
                    className="border rounded-xl px-3 py-2 focus:border-brand-blue focus:outline-none"
                    name="service-type"
                  >
                    <option value="">Select a service</option>
                    <option value="ac-repair">AC Repair</option>
                    <option value="heating-repair">Heating Repair</option>
                    <option value="installation">New Installation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="commercial">Commercial Service</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="estimate">Free Estimate</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              
              <label className="grid gap-1">
                <span className="text-sm font-medium">Location</span>
                <input 
                  className="border rounded-xl px-3 py-2 focus:border-brand-blue focus:outline-none" 
                  name="location" 
                  placeholder="City (e.g., Lake Charles, Sulphur, etc.)"
                />
              </label>
              
              <label className="grid gap-1">
                <span className="text-sm font-medium">Message</span>
                <textarea 
                  className="border rounded-xl px-3 py-2 focus:border-brand-blue focus:outline-none" 
                  name="message" 
                  rows={4}
                  placeholder="Describe your HVAC needs, system issues, or questions..."
                />
              </label>
              
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" id="urgent" name="urgent" className="text-brand-blue" />
                <label htmlFor="urgent">This is an urgent/emergency request</label>
              </div>
              
              <button className="btn btn-primary text-lg py-3" type="submit">
                Submit Request
              </button>
              
              <p className="text-xs text-slate-500 text-center">
                By submitting this form, you agree to be contacted by Cole Air regarding your service request.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Emergency CTA Strip */}
      <div className="card gradient-bg text-white text-center my-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-xl font-bold mb-1">HVAC Emergency?</h3>
            <p className="text-white/90">Don't wait - we're available 24/7 for urgent repairs</p>
          </div>
          <a href={`tel:${BRAND.phoneHref}`} className="btn bg-white text-brand-blue hover:bg-slate-100 text-lg font-semibold px-8">
            Call Now: {BRAND.phone}
          </a>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Map and Address */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Our Lake Charles Location</h2>
          <GoogleMap className="mb-6" height="300px" />
          
          <div className="card">
            <h3 className="font-semibold mb-4 text-brand-blue">Visit Our Office</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-medium">Address</div>
                <div className="text-slate-600">
                  {BRAND.address.street}<br />
                  {BRAND.address.city}, {BRAND.address.region} {BRAND.address.postal}
                </div>
              </div>
              <div>
                <div className="font-medium">Parking</div>
                <div className="text-slate-600">Free parking available on-site</div>
              </div>
              <div className="pt-3 border-t">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    `${BRAND.address.street}, ${BRAND.address.city}, ${BRAND.address.region} ${BRAND.address.postal}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
          
          <div className="card">
            <h3 className="font-semibold mb-4 text-brand-blue">Phone & Email</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <span className="text-brand-blue text-xl">📞</span>
                <div>
                  <div className="font-medium">Primary Phone</div>
                  <a 
                    href={`tel:${BRAND.phoneHref}`} 
                    className="text-brand-blue hover:underline text-lg font-semibold"
                  >
                    {BRAND.phone}
                  </a>
                  <div className="text-xs text-slate-500">Available 24/7 for emergencies</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <span className="text-brand-blue text-xl">�</span>
                <div>
                  <div className="font-medium">Alternative Phone</div>
                  <a 
                    href={`tel:${BRAND.phoneAltHref}`} 
                    className="text-brand-blue hover:underline"
                  >
                    {BRAND.phoneAlt}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <span className="text-brand-blue text-xl">✉️</span>
                <div>
                  <div className="font-medium">Email</div>
                  <a 
                    href={`mailto:${BRAND.email}`} 
                    className="text-brand-blue hover:underline"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-4 text-brand-blue">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                <span className="font-medium">Emergency Service:</span>
                <span className="text-green-600 font-semibold">24/7 Available</span>
              </div>
              <div className="flex justify-between p-2">
                <span>Regular Service:</span>
                <span className="text-slate-600">Mon-Fri 8AM-5PM</span>
              </div>
              <div className="flex justify-between p-2">
                <span>Weekend Service:</span>
                <span className="text-slate-600">By appointment</span>
              </div>
              <div className="flex justify-between p-2">
                <span>Response Time:</span>
                <span className="text-slate-600">Same day service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="card bg-slate-50 text-center mt-10">
        <h3 className="text-xl font-semibold mb-3">Ready to Get Started?</h3>
        <p className="text-slate-700 mb-6">
          Don't wait for your HVAC problem to get worse. Contact Cole Air today for fast, 
          reliable service you can trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={`tel:${BRAND.phoneHref}`} className="btn btn-primary">
            Call {BRAND.phone}
          </a>
          <a href={`mailto:${BRAND.email}`} className="btn btn-outline">
            Send Email
          </a>
        </div>
      </div>
    </>
  );
}

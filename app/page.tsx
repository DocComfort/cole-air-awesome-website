import ServiceCard from "@/components/ServiceCard";
import Section from "@/components/Section";
import GoogleMap from "@/components/GoogleMap";
import GoogleReviews from "@/components/GoogleReviews";
import CheckServiceAvailabilityButton from "@/components/CheckServiceAvailabilityButton";
import BookingWidget from "@/components/BookingWidget";
import Script from "next/script";
import Image from "next/image";
import { localBusinessJsonLd, faqJsonLd } from "@/lib/seo";
import { generateMetadata } from "@/lib/metadata";
import { BRAND } from "@/lib/brand";
import React, { useEffect } from "react";

declare global {
  interface Window {
    HCPWidget?: { openModal: () => void };
  }
}

export const metadata = generateMetadata({
  title: "Premier HVAC Services Lake Charles, LA",
  description: "Professional HVAC services in Lake Charles, LA since 1985. 24/7 emergency AC repair, heating installation, maintenance plans. Call (337) 855-6628 for fast, reliable service.",
  keywords: [
    "HVAC Lake Charles LA",
    "air conditioning repair Lake Charles",
    "heating repair Lake Charles", 
    "emergency HVAC service",
    "AC installation Lake Charles",
    "commercial refrigeration",
    "Cole Air Inc"
  ],
  ogTitle: "Cole Air, Inc. | #1 HVAC Services Lake Charles, LA | Since 1985",
  ogDescription: "Trusted HVAC experts serving Lake Charles & Southwest Louisiana for 40+ years. Emergency service available 24/7. Free estimates on installations!"
});


export default function Home() {
  function handleBooking(serviceType: string): void {
    const url = `https://book.housecallpro.com/book/Cole-Air/c89fdc638e684fee8d0f0910abd4c96c?v2=true&service=${encodeURIComponent(serviceType)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <Script
        id="ld-local"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      
      {/* Hero Section - Optimized for Local SEO */}
      <div className="relative overflow-hidden mb-16">
        <div className="hero-pattern absolute inset-0"></div>
        <div className="relative">
          <div className="card gradient-bg-light border-0 animate-fade-in-up">
            <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <span className="animate-pulse-slow">🔥</span>
                  Lake Charles' #1 HVAC Experts Since {BRAND.founded}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-brand-blue">Expert HVAC Services</span> in 
                  <span className="text-gradient block">Lake Charles, LA</span>
                </h1>
                <p className="text-xl text-slate-700 mb-4">
                  Professional heating, cooling & refrigeration services serving Southwest Louisiana for over 40 years. 
                  Emergency service available 24/7.
                </p>
                <p className="text-lg text-slate-600 mb-8">
                  ⚡ Same-day service • 🛡️ Licensed & insured • 💰 Upfront pricing • ⭐ 4.9/5 Google rating
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${BRAND.phoneHref}`} className="btn btn-modern text-white group text-lg">
                    <span className="flex items-center gap-2">
                      🚨 Emergency: {BRAND.phone}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </a>
                  <a href="/contact" className="btn btn-outline group text-lg">
                    Free Estimate
                    <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
                  </a>
                </div>
                
                {/* Local Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                    <span className="font-medium">4.9/5 on Google</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <span className="font-medium">24/7</span> Emergency Service
                  </div>
                  <div className="text-sm text-slate-600">
                    <span className="font-medium">40+</span> Years Experience
                  </div>
                  <div className="text-sm text-slate-600">
                    <span className="font-medium">Licensed</span> & Insured
                  </div>
                </div>
              </div>
              
              {/* Logo & Booking Widget */}
              <div className="animate-slide-in-right space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center">
                  <Image 
                    src="/logos/ColeAir_Logo_BGRemoved_Transparent_HighRes.png" 
                    alt="Cole Air, Inc. - Professional HVAC Services"
                    width={200}
                    height={150}
                    className="mx-auto h-24 w-auto mb-4"
                    priority
                  />
                  <p className="text-sm text-slate-600">
                    <strong className="text-brand-blue">Serving Lake Charles since 1985</strong><br />
                    Your trusted HVAC professionals
                  </p>
                </div>
                <BookingWidget />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Section 
        id="services" 
        title="Explore Our Comprehensive Heating & Cooling Solutions!" 
        subtitle="Cole Air, Inc. offers a full suite of heating and cooling services, working with all makes and models. We provide high-efficiency systems from top brands, covering everything from installation to maintenance."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card card-hover group gradient-bg-light border-brand-blue/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center text-xl">
                ❄️
              </div>
              <h3 className="text-lg font-semibold group-hover:text-brand-blue transition-colors">AC Repair</h3>
            </div>
            <p className="text-slate-700 text-sm mb-4">
              Swift and effective air conditioning repair services to keep your system running at its best during peak seasons.
            </p>
            <a href="/services/ac-repair" className="text-brand-blue text-sm font-medium hover:underline group">
              Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
          
          <div className="card card-hover group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center text-xl">
                🔍
              </div>
              <h3 className="text-lg font-semibold group-hover:text-brand-blue transition-colors">AC Diagnostics</h3>
            </div>
            <p className="text-slate-700 text-sm mb-4">
              Advanced diagnostic tools to detect issues before they become costly repairs.
            </p>
            <a href="/services/ac-diagnostics" className="text-brand-blue text-sm font-medium hover:underline group">
              Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
          
          <div className="card card-hover group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center text-xl">
                🔥
              </div>
              <h3 className="text-lg font-semibold group-hover:text-brand-blue transition-colors">Heat Pump Installation</h3>
            </div>
            <p className="text-slate-700 text-sm mb-4">
              Energy-efficient heat pump installations provide optimal heating and cooling solutions for your home or business.
            </p>
            <a href="/services/heat-pump" className="text-brand-blue text-sm font-medium hover:underline group">
              Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
          
          <div className="card card-hover group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center text-xl">
                📊
              </div>
              <h3 className="text-lg font-semibold group-hover:text-brand-blue transition-colors">Building Performance Testing</h3>
            </div>
            <p className="text-slate-700 text-sm mb-4">
              Testing and evaluating your entire home to ensure efficiency and compliance with energy standards.
            </p>
            <a href="/services/building-performance" className="text-brand-blue text-sm font-medium hover:underline group">
              Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
          
          <div className="card card-hover group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center text-xl">
                🌬️
              </div>
              <h3 className="text-lg font-semibold group-hover:text-brand-blue transition-colors">Indoor Air Quality</h3>
            </div>
            <p className="text-slate-700 text-sm mb-4">
              Solutions designed to enhance the air quality in your home or business, improving health and comfort.
            </p>
            <a href="/services/air-quality" className="text-brand-blue text-sm font-medium hover:underline group">
              Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
          
          <div className="card card-hover group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center text-xl">
                🛠️
              </div>
              <h3 className="text-lg font-semibold group-hover:text-brand-blue transition-colors">AC Maintenance Plans</h3>
            </div>
            <p className="text-slate-700 text-sm mb-4">
              Tailored maintenance plans to keep your air conditioning system functioning at peak efficiency year-round.
            </p>
            <a href="/services/maintenance" className="text-brand-blue text-sm font-medium hover:underline group">
              Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </div>
        
        {/* Additional Services Row */}
        <div className="grid gap-6 md:grid-cols-3 mt-6">
          <div className="card card-hover group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center text-xl">
                🔧
              </div>
              <h3 className="text-lg font-semibold group-hover:text-brand-blue transition-colors">Heating Services</h3>
            </div>
            <p className="text-slate-700 text-sm mb-4">
              Complete heating solutions including diagnosis, repair, and installation of all heating systems.
            </p>
            <a href="/services/heating" className="text-brand-blue text-sm font-medium hover:underline group">
              Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
          
          <div className="card card-hover group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center text-xl">
                🏭
              </div>
              <h3 className="text-lg font-semibold group-hover:text-brand-blue transition-colors">Commercial Refrigeration</h3>
            </div>
            <p className="text-slate-700 text-sm mb-4">
              Reliable repair and installation services for large-scale refrigeration systems critical to businesses.
            </p>
            <a href="/services/commercial-refrigeration" className="text-brand-blue text-sm font-medium hover:underline group">
              Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
          
          <div className="card card-hover group gradient-bg text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center text-xl">
                📋
              </div>
              <h3 className="text-lg font-semibold">View All Services</h3>
            </div>
            <p className="text-white/90 text-sm mb-4">
              Explore our complete range of HVAC services and recent project portfolio.
            </p>
            <a href="/projects" className="text-white text-sm font-medium hover:underline group">
              See Our Projects <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section title="Learn the Story Behind Cole Air Inc.">
        <div className="card">
          <div className="prose max-w-none">
            <p className="text-slate-700 text-lg leading-relaxed">
              Since {BRAND.founded}, Cole Air Inc. has built a reputation for excellence by providing 
              honest, ethical service. Our technicians are fully certified, undergo ongoing 
              training, and are dedicated to offering only the best solutions for your heating, 
              cooling, and refrigeration needs.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section title="Why Choose Cole Air Inc.?" subtitle="Since 1985, Cole Air Inc. has provided superior HVAC service based on trust, expertise, and customer care.">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left side - Features */}
          <div className="space-y-6">
            <div className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xl group-hover:bg-brand-blue group-hover:text-white transition-all">
                🛠️
              </div>
              <div>
                <h3 className="font-semibold mb-2 group-hover:text-brand-blue transition-colors">Proven Experience</h3>
                <p className="text-slate-700 text-sm">With decades of experience, our certified technicians offer knowledgeable, reliable service for both residential and commercial systems.</p>
              </div>
            </div>
            
            <div className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center text-xl group-hover:bg-brand-orange group-hover:text-white transition-all">
                🚨
              </div>
              <div>
                <h3 className="font-semibold mb-2 group-hover:text-brand-blue transition-colors">24/7 Emergency Service</h3>
                <p className="text-slate-700 text-sm">We understand the urgency of HVAC repairs. Our emergency services are designed to minimize disruptions to your home or business.</p>
              </div>
            </div>
            
            <div className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xl group-hover:bg-brand-blue group-hover:text-white transition-all">
                🛠️
              </div>
              <div>
                <h3 className="font-semibold mb-2 group-hover:text-brand-blue transition-colors">Tailored Maintenance Plans</h3>
                <p className="text-slate-700 text-sm">Custom maintenance plans help extend system life and prevent costly breakdowns before they happen.</p>
              </div>
            </div>
            
            <div className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center text-xl group-hover:bg-brand-orange group-hover:text-white transition-all">
                💡
              </div>
              <div>
                <h3 className="font-semibold mb-2 group-hover:text-brand-blue transition-colors">Innovative Solutions</h3>
                <p className="text-slate-700 text-sm">From energy-efficient systems to whole-home performance evaluations, we use cutting-edge technology to save you money.</p>
              </div>
            </div>
            
            <div className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xl group-hover:bg-brand-blue group-hover:text-white transition-all">
                ✅
              </div>
              <div>
                <h3 className="font-semibold mb-2 group-hover:text-brand-blue transition-colors">Honest & Transparent Service</h3>
                <p className="text-slate-700 text-sm">We prioritize honesty and never push unnecessary repairs. We focus on what's truly best for you and your system.</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Stats and CTA */}
          <div className="space-y-6">
            <div className="card gradient-bg text-white">
              <h3 className="text-xl font-semibold mb-6">Our Track Record</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{BRAND.founded}</div>
                  <div className="text-white/80 text-sm">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">1000+</div>
                  <div className="text-white/80 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-white/80 text-sm">Service Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">9</div>
                  <div className="text-white/80 text-sm">Service Areas</div>
                </div>
              </div>
            </div>
            
            <div className="card border-brand-blue/20 bg-brand-blue/5">
              <h3 className="font-semibold mb-3 text-brand-blue">Ready to Experience the Difference?</h3>
              <p className="text-slate-700 text-sm mb-4">
                Join thousands of satisfied customers who trust Cole Air for their HVAC needs. 
                Get your free estimate today!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/contact" className="btn btn-primary flex-1">
                  Get Free Estimate
                </a>
                <a href="/projects" className="btn btn-outline flex-1">
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials & Reviews Section */}
      <Section title="What Our Lake Charles Customers Say" subtitle="Don't just take our word for it - see why locals trust Cole Air for their HVAC needs">
        <GoogleReviews />
      </Section>

      {/* FAQ Section for SEO */}
      <Section title="Frequently Asked Questions" subtitle="Get answers to common HVAC questions from our Lake Charles experts">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-semibold mb-2 text-brand-blue">Do you provide 24/7 emergency HVAC service in Lake Charles?</h3>
              <p className="text-slate-700 text-sm">Yes, Cole Air provides 24/7 emergency HVAC service throughout Lake Charles, LA and surrounding areas. Call (337) 855-6628 for immediate assistance with heating or cooling emergencies.</p>
            </div>
            
            <div className="card">
              <h3 className="font-semibold mb-2 text-brand-blue">What areas do you serve for HVAC services?</h3>
              <p className="text-slate-700 text-sm">We serve Lake Charles, Sulphur, Moss Bluff, Westlake, DeQuincy, Hackberry, Iowa, Ragley, and DeRidder in Louisiana.</p>
            </div>
            
            <div className="card">
              <h3 className="font-semibold mb-2 text-brand-blue">How long has Cole Air been in business?</h3>
              <p className="text-slate-700 text-sm">Cole Air has been providing professional HVAC services since 1985, with over 40 years of experience serving Southwest Louisiana.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-semibold mb-2 text-brand-blue">Do you offer HVAC maintenance plans?</h3>
              <p className="text-slate-700 text-sm">Yes, we offer custom HVAC maintenance plans designed to extend system life, improve efficiency, and prevent costly breakdowns. Contact us for a personalized maintenance plan.</p>
            </div>
            
            <div className="card">
              <h3 className="font-semibold mb-2 text-brand-blue">What types of HVAC systems do you install and repair?</h3>
              <p className="text-slate-700 text-sm">We work on all makes and models of heating and cooling systems including central air conditioning, heat pumps, gas furnaces, boilers, and commercial refrigeration systems.</p>
            </div>
            
            <div className="card">
              <h3 className="font-semibold mb-2 text-brand-blue">Do you provide free estimates?</h3>
              <p className="text-slate-700 text-sm">Yes, we provide free estimates for new installations and system replacements. We also offer upfront pricing for all repairs with no hidden fees.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Areas Section for Local SEO */}
      <Section title="HVAC Services Across Southwest Louisiana" subtitle="Professional heating and cooling services in your area">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {BRAND.serviceAreas.map((area, index) => (
            <div key={index} className="card card-hover text-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-medium text-sm">{area}</h3>
              <p className="text-xs text-slate-600 mt-1">
                Emergency & scheduled HVAC service
              </p>
            </div>
          ))}
        </div>
        <div className="card bg-slate-50 text-center mt-6">
          <p className="text-slate-700 mb-4">
            Don't see your area listed? We may still serve you! 
            Click Or Call us below to check if we service your location.
          </p>
            <div className="flex flex-row gap-4 items-stretch mt-4">
              <div className="flex-1">
                <CheckServiceAvailabilityButton />
              </div>
              <a
                href={`tel:${BRAND.phoneHref}`}
                className="btn btn-outline text-left justify-start p-3 w-full flex-1"
              >
                <span className="text-xl mr-3">📞</span>
                <div>
                  <div className="font-medium">Call to Check Service Area</div>
                </div>
              </a>
            </div>
        </div>
      </Section>

      {/* Location & Contact Section */}
      <Section title="Visit Our Lake Charles Location" subtitle="Serving Southwest Louisiana from our central location">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <GoogleMap className="mb-6" height="400px" />
            <div className="card">
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-brand-blue">📍</span>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-slate-600">
                      {BRAND.address.street}, {BRAND.address.city}, {BRAND.address.region} {BRAND.address.postal}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-blue">📞</span>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-slate-600">
                      <a href={`tel:${BRAND.phoneHref}`} className="text-brand-blue hover:underline">
                        {BRAND.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-blue">✉️</span>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-slate-600">
                      <a href={`mailto:${BRAND.email}`} className="text-brand-blue hover:underline">
                        {BRAND.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card gradient-bg text-white">
              <h3 className="text-xl font-semibold mb-4">Why Choose Local?</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span>✓</span> Faster response times in Lake Charles area
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Deep knowledge of Louisiana climate challenges
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Support your local community
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Personal service from familiar faces
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Quick parts availability and service
                </li>
              </ul>
            </div>
            
            <div className="card border-brand-blue/20 bg-brand-blue/5">
              <h3 className="font-semibold mb-3 text-brand-blue">Ready to Get Started?</h3>
              <p className="text-slate-700 text-sm mb-4">
                Experience the Cole Air difference. Join thousands of satisfied customers 
                across Southwest Louisiana who trust us for reliable HVAC service.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/contact" className="btn btn-primary flex-1">
                  Schedule Service
                </a>
                <a href="/projects" className="btn btn-outline flex-1">
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <div className="card bg-brand-blue text-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Don't wait until a small issue becomes a big problem!
        </h2>
        <p className="mb-6">
          Whether you're looking for expert repairs, system upgrades, or just want to improve efficiency, 
          Cole Air Inc. is here to help!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={`tel:${BRAND.phoneHref}`} className="btn bg-white text-brand-blue hover:bg-slate-100">
            Call {BRAND.phone}
          </a>
          <a href="/contact" className="btn border-white text-white hover:bg-white/10">
            Schedule Service
          </a>
        </div>
      </div>
    </>
  );
}

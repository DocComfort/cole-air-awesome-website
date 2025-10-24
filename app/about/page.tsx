import Image from "next/image";
import Section from "@/components/Section";
import TeamMember, { TeamMemberPlaceholder } from "@/components/TeamMember";
import PhotoGallery from "@/components/PhotoGallery";
import { generateMetadata } from "@/lib/metadata";
import { BRAND } from "@/lib/brand";
import { ASSET_PATHS, SAMPLE_TEAM_DATA, getTeamMemberPath } from "@/lib/assets";

export const metadata = generateMetadata({
  title: "About Cole Air, Inc. | Family-Owned HVAC Company Since 1985",
  description: "Learn about Cole Air's 40+ year history serving Lake Charles, LA. Founded by our family, continuing the tradition of excellence in HVAC services with professional expertise and personal care.",
  keywords: [
    "Cole Air history",
    "family owned HVAC Lake Charles",
    "HVAC company since 1985",
    "Lake Charles air conditioning family business",
    "Cole Air founders",
    "trusted HVAC professionals"
  ],
  ogTitle: "About Cole Air, Inc. | 40+ Years of Family Excellence in HVAC",
  ogDescription: "Discover the Cole Air story - from family founding in 1985 to today's professional HVAC excellence serving Lake Charles and Southwest Louisiana."
});

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="relative">
          <div className="card gradient-bg-light border-0 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-brand-blue">About Cole Air, Inc.</span>
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Four decades of family tradition, professional excellence, and community dedication serving Lake Charles and Southwest Louisiana.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <Section title="Our Story" subtitle="From humble beginnings to Lake Charles' most trusted HVAC company">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium">
                <span>🏗️</span>
                Founded in {BRAND.founded}
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Building Trust, One System at a Time
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Cole Air, Inc. was founded in {BRAND.founded} with a simple mission: provide reliable, 
                professional HVAC services with the personal touch that only a family business can offer. 
                What started as a vision to serve the Lake Charles community has grown into Southwest Louisiana's 
                most trusted heating and cooling company.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our commitment to excellence, combined with decades of experience and continuous training 
                on the latest HVAC technologies, has made us the go-to choice for both residential and 
                commercial customers throughout the region.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">40+</div>
                <div className="text-sm text-slate-600">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">24/7</div>
                <div className="text-sm text-slate-600">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">4.9★</div>
                <div className="text-sm text-slate-600">Google Rating</div>
              </div>
            </div>
          </div>
          
          {/* Company Photo Placeholder */}
          <div className="bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 rounded-2xl p-8 text-center border border-slate-200">
            <div className="bg-white rounded-xl p-6 mb-4">
              <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
                <div className="text-center text-slate-500">
                  <div className="text-4xl mb-2">🏢</div>
                  <p className="text-sm">Company Photo</p>
                  <p className="text-xs">Place in /assets/facilities/</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              Cole Air, Inc. headquarters serving Lake Charles since {BRAND.founded}
            </p>
          </div>
        </div>
      </Section>

      {/* Family Legacy */}
      <Section title="Family Legacy" subtitle="Meet the Cole family who built this company with dedication and expertise">
        <div className="space-y-12">
          {/* Founder Section */}
          <div className="card p-8 gradient-bg-light border-brand-blue/20">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="w-full h-80 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                  <div className="text-center text-slate-500">
                    <div className="text-5xl mb-4">👨‍🔧</div>
                    <p className="font-medium">Founder Photo</p>
                    <p className="text-sm">Place in /assets/team/founder.jpg</p>
                    <p className="text-xs mt-2">Your father who started the company</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    The Founding Vision
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <span>🎖️</span>
                    Company Founder
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Our founder established Cole Air, Inc. in {BRAND.founded} with a vision to provide 
                    Lake Charles with honest, reliable HVAC services. With years of hands-on experience 
                    and a commitment to treating every customer like family, he built the foundation 
                    for what would become Southwest Louisiana's most trusted HVAC company.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    His dedication to quality workmanship, fair pricing, and exceptional customer service 
                    established the core values that continue to guide Cole Air today. The legacy of 
                    integrity and excellence he created remains at the heart of everything we do.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <blockquote className="italic text-slate-600">
                    "Treat every customer's home like it's your own, and always do the job right the first time."
                  </blockquote>
                  <div className="text-sm text-slate-500 mt-2">— Founding Philosophy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Leadership */}
          <div className="card p-8 gradient-bg-light border-brand-blue/20">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6 lg:order-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Continuing the Tradition
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <span>👨‍💼</span>
                    Current Leadership
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Today, Cole Air continues under family leadership, combining the time-tested values 
                    established by our founder with modern HVAC technology and best practices. Our 
                    commitment to excellence has only grown stronger over the decades.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    With extensive industry experience and ongoing professional development, we ensure 
                    that Cole Air remains at the forefront of HVAC innovation while maintaining the 
                    personal service and integrity that built our reputation.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <div className="font-semibold text-slate-900">Professional Excellence</div>
                      <div className="text-sm text-slate-600">Licensed, Certified, and Continuously Trained</div>
                    </div>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• EPA Certified Technicians</li>
                    <li>• NATE Certified Professionals</li>
                    <li>• Ongoing Factory Training</li>
                    <li>• Licensed & Insured</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 lg:order-1">
                <div className="w-full h-80 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                  <div className="text-center text-slate-500">
                    <div className="text-5xl mb-4">👨‍💼</div>
                    <p className="font-medium">Your Photo</p>
                    <p className="text-sm">Place in /assets/team/current-owner.jpg</p>
                    <p className="text-xs mt-2">Current company leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section title="Our Professional Team" subtitle="Meet the certified technicians and staff who deliver exceptional HVAC service">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Key Leadership - Founder & Owner */}
          <div className="md:col-span-2 lg:col-span-3 mb-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">Leadership Team</h3>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <TeamMemberPlaceholder 
                name="Your Father's Name"
                title="Founder & Master Technician"
                photoPath="/assets/team/founder.jpg"
              />
              <TeamMemberPlaceholder 
                name="Your Name"
                title="Owner & Operations Manager"
                photoPath="/assets/team/current-owner.jpg"
              />
            </div>
          </div>

          {/* Team Members */}
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">Certified Technicians & Staff</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <TeamMemberPlaceholder 
                  key={num}
                  name={`Team Member ${num}`}
                  title="HVAC Technician"
                  photoPath={getTeamMemberPath(num)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-slate-600 mb-4">
            Our team of certified professionals brings decades of combined experience to every job.
          </p>
          <a href="/contact" className="btn btn-primary">
            Meet Our Team in Person - Schedule Service
          </a>
        </div>
      </Section>

      {/* Values & Commitment */}
      <Section title="Our Values" subtitle="The principles that guide everything we do">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="card p-6 text-center gradient-bg-light border-brand-blue/20">
            <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              🛡️
            </div>
            <h4 className="font-semibold text-slate-900 mb-3">Integrity First</h4>
            <p className="text-sm text-slate-700">
              Honest assessments, upfront pricing, and transparent communication in every interaction.
            </p>
          </div>
          
          <div className="card p-6 text-center gradient-bg-light border-brand-blue/20">
            <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              ⚡
            </div>
            <h4 className="font-semibold text-slate-900 mb-3">Rapid Response</h4>
            <p className="text-sm text-slate-700">
              24/7 emergency service because we understand that HVAC problems don't wait for business hours.
            </p>
          </div>
          
          <div className="card p-6 text-center gradient-bg-light border-brand-blue/20">
            <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              🎯
            </div>
            <h4 className="font-semibold text-slate-900 mb-3">Excellence Driven</h4>
            <p className="text-sm text-slate-700">
              Continuous training, quality equipment, and attention to detail in every service call.
            </p>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <div className="card gradient-bg-light border-0 text-center p-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Experience the Cole Air Difference
        </h2>
        <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Cole Air for all their heating and cooling needs. 
          Experience the family tradition of excellence that has served Lake Charles for over 40 years.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${BRAND.phoneHref}`} className="btn btn-modern text-white">
            Call Now: {BRAND.phone}
          </a>
          <a href="/contact" className="btn btn-outline">
            Request Free Estimate
          </a>
        </div>
      </div>
    </div>
  );
}
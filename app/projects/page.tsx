import { BRAND } from "@/lib/brand";
import Section from "@/components/Section";
import PhotoGallery from "@/components/PhotoGallery";
import { SAMPLE_JOB_PHOTOS, getJobPhotoPath, JOB_TYPES } from "@/lib/assets";

export const metadata = {
  title: "Recent Projects | Cole Air, Inc. - HVAC Installations & Repairs",
  description: "View our recent HVAC projects in Lake Charles, LA. See commercial and residential installations, repairs, and system upgrades by Cole Air, Inc."
};

// Sample project data - you can replace with real project information
const projects = [
  {
    id: 1,
    title: "Commercial Office HVAC Upgrade",
    category: "Commercial",
    location: "Lake Charles, LA",
    description: "Complete HVAC system replacement for a 15,000 sq ft office building. Installed energy-efficient units with smart controls, reducing energy costs by 30%.",
    services: ["System Installation", "Ductwork", "Smart Controls"],
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300",
    date: "September 2024"
  },
  {
    id: 2,
    title: "Restaurant Refrigeration System",
    category: "Commercial Refrigeration",
    location: "Sulphur, LA",
    description: "Emergency refrigeration system repair and upgrade for a busy restaurant. Completed overnight to minimize business disruption.",
    services: ["Emergency Repair", "System Upgrade", "Maintenance Plan"],
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300",
    date: "August 2024"
  },
  {
    id: 3,
    title: "Residential Heat Pump Installation",
    category: "Residential",
    location: "Moss Bluff, LA",
    description: "High-efficiency heat pump installation with smart thermostat integration. Improved home comfort while reducing energy bills.",
    services: ["Heat Pump Installation", "Smart Thermostat", "Ductwork Sealing"],
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300",
    date: "July 2024"
  },
  {
    id: 4,
    title: "Industrial HVAC Maintenance",
    category: "Industrial",
    location: "Westlake, LA",
    description: "Comprehensive maintenance and performance testing for a manufacturing facility's HVAC system. Ensured compliance with safety standards.",
    services: ["Performance Testing", "Preventive Maintenance", "Code Compliance"],
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300",
    date: "June 2024"
  },
  {
    id: 5,
    title: "Multi-Unit AC Installation",
    category: "Commercial",
    location: "Lake Charles, LA",
    description: "Installation of multiple AC units for a new apartment complex. Coordinated with construction team for seamless integration.",
    services: ["New Construction", "Multi-Unit Installation", "System Design"],
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300",
    date: "May 2024"
  },
  {
    id: 6,
    title: "Emergency Heating Repair",
    category: "Emergency Service",
    location: "DeQuincy, LA",
    description: "24-hour emergency heating system repair during winter storm. Restored heat to family home within 4 hours of initial call.",
    services: ["Emergency Repair", "System Diagnosis", "Parts Replacement"],
    before: "/api/placeholder/400/300",
    after: "/api/placeholder/400/300",
    date: "February 2024"
  }
];

const categories = ["All", "Commercial", "Residential", "Emergency Service", "Commercial Refrigeration", "Industrial"];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="hero-pattern absolute inset-0"></div>
        <div className="relative card gradient-bg-light border-0 mb-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Recent Projects</span>
            </h1>
            <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
              Discover our latest HVAC installations, repairs, and system upgrades across 
              Lake Charles and surrounding areas. See the quality craftsmanship that has 
              made us Southwest Louisiana's trusted HVAC partner since 1985.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-modern text-white">
                Start Your Project
              </a>
              <a href={`tel:${BRAND.phoneHref}`} className="btn btn-outline">
                Call {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <Section title="Our Impact" subtitle="Delivering excellence across Southwest Louisiana">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="card card-hover text-center">
            <div className="text-3xl font-bold text-brand-blue mb-2">40+</div>
            <div className="text-slate-600">Years of Experience</div>
          </div>
          <div className="card card-hover text-center">
            <div className="text-3xl font-bold text-brand-orange mb-2">1000+</div>
            <div className="text-slate-600">Projects Completed</div>
          </div>
          <div className="card card-hover text-center">
            <div className="text-3xl font-bold text-brand-blue mb-2">24/7</div>
            <div className="text-slate-600">Emergency Service</div>
          </div>
          <div className="card card-hover text-center">
            <div className="text-3xl font-bold text-brand-orange mb-2">9</div>
            <div className="text-slate-600">Service Areas</div>
          </div>
        </div>
      </Section>

      {/* Project Categories Filter */}
      <Section title="Browse Projects by Category">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((category) => (
            <button 
              key={category}
              className="px-4 py-2 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Projects Grid */}
      <Section title="Featured Projects" subtitle="See our recent work across Southwest Louisiana">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="card card-hover group">
              {/* Project Image Placeholder */}
              <div className="relative mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 aspect-video">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏗️</div>
                    <div className="text-sm">Project Photo</div>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-brand-blue text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-slate-500">{project.date}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-brand-orange">📍</span>
                  <span className="text-sm text-slate-600">{project.location}</span>
                </div>

                <p className="text-slate-700 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.map((service, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <button className="text-brand-blue text-sm font-medium hover:underline">
                  View Project Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <div className="card gradient-bg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg mb-6 opacity-90">
          Join hundreds of satisfied customers who trust Cole Air for their HVAC needs. 
          From emergency repairs to complete system installations, we deliver quality results on time and on budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="btn bg-white text-brand-blue hover:bg-slate-100">
            Get Free Estimate
          </a>
          <a href={`tel:${BRAND.phoneHref}`} className="btn border-white text-white hover:bg-white/10">
            Call for Emergency Service
          </a>
        </div>
      </div>

      {/* Job Photos Gallery */}
      <Section 
        title="Quality Workmanship Gallery" 
        subtitle="See our professional installations, repairs, and completed projects"
      >
        <div className="space-y-8">
          {/* Instructions for adding photos */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">📸 Add Your Job Photos</h3>
            <p className="text-blue-700 mb-4">
              Showcase your quality work by adding photos to the <code className="bg-blue-100 px-2 py-1 rounded">/assets/jobs/</code> folder.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm">
              <div className="bg-white p-3 rounded border">
                <strong>AC Installations:</strong><br />
                <code>ac-installation-1.jpg</code>
              </div>
              <div className="bg-white p-3 rounded border">
                <strong>Heating Repairs:</strong><br />
                <code>heating-repair-1.jpg</code>
              </div>
              <div className="bg-white p-3 rounded border">
                <strong>Commercial HVAC:</strong><br />
                <code>commercial-hvac-1.jpg</code>
              </div>
              <div className="bg-white p-3 rounded border">
                <strong>Before & After:</strong><br />
                <code>before-after-1.jpg</code>
              </div>
              <div className="bg-white p-3 rounded border">
                <strong>Equipment Rooms:</strong><br />
                <code>equipment-room-1.jpg</code>
              </div>
              <div className="bg-white p-3 rounded border">
                <strong>Emergency Repairs:</strong><br />
                <code>emergency-repair-1.jpg</code>
              </div>
            </div>
          </div>

          {/* Placeholder Gallery */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_JOB_PHOTOS.map((photo, index) => (
              <div key={index} className="bg-slate-100 rounded-lg p-6 text-center border-2 border-dashed border-slate-300">
                <div className="w-full h-48 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-slate-500">
                    <div className="text-4xl mb-2">🏠</div>
                    <p className="text-sm font-medium">{photo.title}</p>
                    <p className="text-xs">{photo.description}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600">
                  <code className="bg-slate-200 px-1 rounded">{photo.src}</code>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us for Your Project */}
      <Section title="Why Choose Cole Air for Your Next Project?">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card card-hover text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-semibold mb-2">Fast Response</h3>
            <p className="text-slate-700 text-sm">Emergency service available 24/7. We respond quickly to minimize downtime and discomfort.</p>
          </div>
          <div className="card card-hover text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-semibold mb-2">Precision Work</h3>
            <p className="text-slate-700 text-sm">Building-science approach ensures your system is properly sized and installed for optimal performance.</p>
          </div>
          <div className="card card-hover text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-slate-700 text-sm">Upfront pricing with no hidden fees. You'll know the cost before we start work.</p>
          </div>
          <div className="card card-hover text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="font-semibold mb-2">40+ Years Experience</h3>
            <p className="text-slate-700 text-sm">Decades of experience serving Southwest Louisiana with honest, reliable HVAC services.</p>
          </div>
          <div className="card card-hover text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="font-semibold mb-2">Expert Technicians</h3>
            <p className="text-slate-700 text-sm">Fully certified technicians with ongoing training on the latest HVAC technology and techniques.</p>
          </div>
          <div className="card card-hover text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-semibold mb-2">Quality Guarantee</h3>
            <p className="text-slate-700 text-sm">We stand behind our work with comprehensive warranties and follow-up service.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
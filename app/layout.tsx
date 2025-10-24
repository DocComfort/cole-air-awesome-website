import type { Metadata } from "next";
import "./globals.css";
import { BRAND } from "@/lib/brand";
import Link from "next/link";
import { GoogleAnalytics, Hotjar, FacebookPixel } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Cole Air, Inc. | Premier HVAC Services in Lake Charles, LA",
  description: "Since 1985, Cole Air Inc. provides expert heating, cooling, and refrigeration services in Lake Charles, LA. Emergency service available 24/7. Call (337) 855-6628.",
  metadataBase: new URL(BRAND.url)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ ["--brand-blue" as any]: BRAND.colors.blue, ["--brand-orange" as any]: BRAND.colors.orange }}>
        <header className="border-b bg-white sticky top-0 z-50">
          <nav className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-orange" />
              <div className="flex flex-col">
                <span className="font-bold text-brand-blue">Cole Air</span>
                <span className="text-xs text-slate-500">Since 1985</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/#services" className="nav-link">Services</Link>
              <Link href="/projects" className="nav-link">Projects</Link>
              <Link href="/#about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
              <a href={`tel:${BRAND.phoneHref}`} className="btn btn-primary">
                {BRAND.phone}
              </a>
            </div>
            <div className="md:hidden">
              <a href={`tel:${BRAND.phoneHref}`} className="btn btn-primary text-sm">
                Call Now
              </a>
            </div>
          </nav>
        </header>
        
        <main className="container py-10">{children}</main>
        
        <footer className="bg-slate-50 border-t">
          <div className="container py-10">
            <div className="grid gap-8 md:grid-cols-4">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-orange" />
                  <span className="font-bold text-brand-blue text-lg">Cole Air, Inc.</span>
                </div>
                <p className="text-slate-700 mb-4">
                  Since {BRAND.founded}, providing superior HVAC service based on trust, expertise, and customer care.
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Phone:</strong> <a href={`tel:${BRAND.phoneHref}`} className="text-brand-blue hover:underline">{BRAND.phone}</a>
                  </div>
                  <div>
                    <strong>Alternative:</strong> <a href={`tel:${BRAND.phoneAltHref}`} className="text-brand-blue hover:underline">{BRAND.phoneAlt}</a>
                  </div>
                  <div>
                    <strong>Email:</strong> <a href={`mailto:${BRAND.email}`} className="text-brand-blue hover:underline">{BRAND.email}</a>
                  </div>
                  <div>
                    <strong>Address:</strong> {BRAND.address.street}, {BRAND.address.city}, {BRAND.address.region} {BRAND.address.postal}
                  </div>
                  <div>
                    <strong>Hours:</strong> Open 24 hours, 7 days a week
                  </div>
                </div>
              </div>
              
              {/* Services */}
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/#services" className="text-slate-600 hover:text-brand-blue">AC Repair</Link></li>
                  <li><Link href="/#services" className="text-slate-600 hover:text-brand-blue">Heating Services</Link></li>
                  <li><Link href="/#services" className="text-slate-600 hover:text-brand-blue">Commercial Refrigeration</Link></li>
                  <li><Link href="/#services" className="text-slate-600 hover:text-brand-blue">Maintenance Plans</Link></li>
                  <li><Link href="/projects" className="text-slate-600 hover:text-brand-blue">Recent Projects</Link></li>
                </ul>
              </div>
              
              {/* Service Areas */}
              <div>
                <h4 className="font-semibold mb-4">Service Areas</h4>
                <ul className="space-y-1 text-sm">
                  {BRAND.serviceAreas.slice(0, 6).map((area, index) => (
                    <li key={index} className="text-slate-600">{area}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <p className="text-slate-600">© {new Date().getFullYear()} Cole Air, Inc. All rights reserved.</p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <Link href="/privacy" className="text-slate-600 hover:text-brand-blue">Privacy Policy</Link>
                <a href="/sitemap.xml" className="text-slate-600 hover:text-brand-blue">Sitemap</a>
              </div>
            </div>
          </div>
        </footer>
        
        {/* Analytics and Tracking */}
        <GoogleAnalytics />
        <Hotjar />
        <FacebookPixel />
      </body>
    </html>
  );
}

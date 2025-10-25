# Cole Air, Inc. Website

A modern, responsive website for Cole Air, Inc. - a premier HVAC service company serving Lake Charles, LA and surrounding areas since 1985.

## 🏢 About Cole Air, Inc.

- **Founded:** 1985
- **Services:** Heating, Cooling, and Refrigeration
- **Service Areas:** Lake Charles, Sulphur, Moss Bluff, Westlake, DeQuincy, Hackberry, Iowa, Ragley, DeRidder
- **Contact:** (337) 855-6628 | coleairinclakecharles@gmail.com
- **Hours:** 24/7 Emergency Service Available

## 🛠 Technology Stack

- **Framework:** Next.js 14.2.4 with App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Netlify-ready (configured with `_redirects` and `netlify.toml`)

## 🎨 Features

- ✅ Responsive design optimized for all devices
- ✅ SEO optimized with structured data (Schema.org)
- ✅ Contact form with Netlify Forms integration
- ✅ 24/7 emergency service emphasis
- ✅ Service area coverage display
- ✅ Customer testimonials section
- ✅ Brand-consistent color scheme (Carolina blue & Safety orange)
- ✅ Fast loading and optimized performance

## 📄 Pages

- **Homepage (`/`):** Hero section, services overview, about, testimonials, service areas
- **Contact (`/contact`):** Contact form, business information, service areas, emergency service
- **Privacy (`/privacy`):** Privacy policy page
- **Sitemap (`/sitemap.xml`):** Auto-generated XML sitemap

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment variables

Set these in your hosting provider (or `.env.local`) to enable analytics:

- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 Measurement ID (e.g., G-XXXXXXXXXX)
- `NEXT_PUBLIC_HOTJAR_ID` — Hotjar Site ID (numeric)
- `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` — Facebook Pixel ID

Analytics are gated by a built-in cookie consent banner. Tracking scripts only load after the user accepts.

## 📱 Contact Information

**Cole Air, Inc.**
- **Phone:** (337) 855-6628
- **Alternative:** (337) 427-8291
- **Email:** coleairinclakecharles@gmail.com
- **Address:** 620 Marilyn Rd, Lake Charles, LA 70611
- **Website:** https://www.coleair.net

## 🎯 Services Offered

- AC Repair & Diagnostics
- Heat Pump Installation
- Building Performance Testing
- Indoor Air Quality Solutions
- AC Maintenance Plans
- Heating Diagnosis & Repair
- Heating Installations
- Commercial Refrigeration
- Air Conditioning Code Compliance
- Emergency HVAC Services

## 🚀 Deploy to Netlify

1. Push your code to GitHub
2. Create a new site from Git in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Enable Netlify Forms for the contact form

---

**"If It Heats or Cools, We Fix It!"** - Serving Southwest Louisiana since 1985.

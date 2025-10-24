import { BRAND } from "./brand";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: any;
}

export function generateServiceMetadata(
  title: string,
  description: string,
  path: string = ''
) {
  return {
    title,
    description,
    keywords: [`${title}`, 'HVAC Lake Charles', 'emergency service', 'licensed contractor'],
    openGraph: {
      title,
      description,
      url: `${BRAND.url}${path}`,
      siteName: BRAND.company,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogTitle,
  ogDescription,
  ogImage
}: SEOProps) {
  const defaultKeywords = [
    "HVAC Lake Charles LA",
    "air conditioning repair",
    "heating repair",
    "emergency HVAC service",
    "HVAC installation",
    "Cole Air",
    "Louisiana HVAC",
    "commercial refrigeration",
    "AC repair Lake Charles",
    "heating contractor"
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(", ");
  
  const siteTitle = title ? `${title} | Cole Air, Inc.` : "Cole Air, Inc. | Premier HVAC Services Lake Charles, LA";
  const siteDescription = description || "Professional HVAC services in Lake Charles, LA since 1985. 24/7 emergency repairs, installations, maintenance. Call (337) 855-6628 for fast, reliable service.";

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: allKeywords,
    authors: [{ name: "Cole Air, Inc." }],
    creator: "Cole Air, Inc.",
    publisher: "Cole Air, Inc.",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(BRAND.url),
    alternates: {
      canonical: canonical || BRAND.url,
    },
    openGraph: {
      title: ogTitle || siteTitle,
      description: ogDescription || siteDescription,
      url: canonical || BRAND.url,
      siteName: "Cole Air, Inc.",
      images: [
        {
          url: ogImage || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Cole Air HVAC Services Lake Charles LA",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle || siteTitle,
      description: ogDescription || siteDescription,
      images: [ogImage || "/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code", // Add your Google Search Console verification
      // bing: "your-bing-verification-code", // Add your Bing verification if needed
    },
  };
}

export const localKeywords = {
  primary: [
    "HVAC Lake Charles LA",
    "air conditioning repair Lake Charles",
    "heating repair Lake Charles",
    "emergency HVAC Lake Charles"
  ],
  secondary: [
    "AC repair Sulphur LA",
    "heating contractor Moss Bluff",
    "HVAC installation Westlake LA",
    "commercial refrigeration Lake Charles"
  ],
  serviceAreas: BRAND.serviceAreas.map(area => 
    `HVAC services ${area}`
  ),
  emergency: [
    "24 hour HVAC repair",
    "emergency air conditioning service",
    "same day heating repair",
    "weekend HVAC service"
  ]
};

export function getLocalBusinessHours() {
  return {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "24:00",
    "description": "24/7 Emergency Service Available"
  };
}
import { BRAND } from "./brand";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness"],
    "name": BRAND.company,
    "image": [
      `${BRAND.url}/og.jpg`,
      `${BRAND.url}/logos/ColeAir_Logo_BGRemoved_Transparent_HighRes.png`,
      `${BRAND.url}/logos/Cole Air Logo.jpg`
    ],
    "url": BRAND.url,
    "telephone": BRAND.phoneHref,
    "email": BRAND.email,
    "foundingDate": BRAND.founded,
    "slogan": BRAND.tagline,
    "description": "Professional HVAC services in Lake Charles, LA. Emergency repairs, installations, maintenance plans, and commercial refrigeration since 1985.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.address.street,
      "addressLocality": BRAND.address.city,
      "addressRegion": BRAND.address.region,
      "postalCode": BRAND.address.postal,
      "addressCountry": BRAND.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.3115",
      "longitude": "-93.2723"
    },
    "areaServed": BRAND.serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Check", "Credit Card", "Financing Available"],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "24:00"
    }],
    "serviceType": [
      "HVAC Repair",
      "Air Conditioning Repair", 
      "Heating Repair",
      "HVAC Installation",
      "Commercial Refrigeration",
      "Indoor Air Quality",
      "HVAC Maintenance",
      "Emergency HVAC Service",
      "Duct Cleaning",
      "Heat Pump Installation"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HVAC Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency HVAC Repair",
            "description": "24/7 emergency heating and cooling repair services"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "HVAC Installation",
            "description": "Professional installation of heating and cooling systems"
          }
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Marianne W."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Cole Air is always so prompt and efficient. We have been using them for 25+ years, and they have never let us down. The technicians are very, very skilled, honest, and polite. I highly recommend Cole Air."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.facebook.com/AirConditioningLakeCharles",
      "https://www.instagram.com/cole_air_inc",
      `https://www.google.com/maps/place/${encodeURIComponent(BRAND.address.street + ', ' + BRAND.address.city + ', ' + BRAND.address.region + ' ' + BRAND.address.postal)}`
    ]
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide 24/7 emergency HVAC service in Lake Charles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Cole Air provides 24/7 emergency HVAC service throughout Lake Charles, LA and surrounding areas. Call (337) 855-6628 for immediate assistance with heating or cooling emergencies."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve for HVAC services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Lake Charles, Sulphur, Moss Bluff, Westlake, DeQuincy, Hackberry, Iowa, Ragley, and DeRidder in Louisiana."
        }
      },
      {
        "@type": "Question",
        "name": "How long has Cole Air been in business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cole Air has been providing professional HVAC services since 1985, with over 40 years of experience serving Southwest Louisiana."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer HVAC maintenance plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer custom HVAC maintenance plans designed to extend system life, improve efficiency, and prevent costly breakdowns. Contact us for a personalized maintenance plan."
        }
      },
      {
        "@type": "Question",
        "name": "What types of HVAC systems do you install and repair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work on all makes and models of heating and cooling systems including central air conditioning, heat pumps, gas furnaces, boilers, and commercial refrigeration systems."
        }
      }
    ]
  };
}

export function serviceJsonLd(serviceName: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "HVACBusiness",
      "name": BRAND.company,
      "telephone": BRAND.phoneHref,
      "url": BRAND.url
    },
    "url": url,
    "areaServed": BRAND.serviceAreas,
    "serviceType": "HVAC Service"
  };
}

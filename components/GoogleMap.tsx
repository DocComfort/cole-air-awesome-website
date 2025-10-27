"use client";

import { BRAND } from "@/lib/brand";

interface GoogleMapProps {
  className?: string;
  height?: string;
}

export default function GoogleMap({ className = "", height = "300px" }: GoogleMapProps) {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.8!2d-93.2723525!3d30.3115376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863b901a35230a89%3A0x9761ff7e933e2fe4!2s620%20Marilyn%20Rd%2C%20Lake%20Charles%2C%20LA%2070611!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus`;

  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      <iframe
        src={mapSrc}
        width="100%"
        height={height}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Cole Air Location - Lake Charles, LA"
        className="google-map-iframe"
      />
      
      {/* Overlay with business info */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="text-sm font-semibold text-brand-blue">{BRAND.company}</div>
        <div className="text-xs text-slate-600">{BRAND.address.street}</div>
        <div className="text-xs text-slate-600">
          {BRAND.address.city}, {BRAND.address.region} {BRAND.address.postal}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-green-600 text-xs">●</span>
          <span className="text-xs text-slate-600">Open 24/7</span>
        </div>
      </div>
      
      {/* Directions button */}
      <div className="absolute bottom-4 right-4">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            `${BRAND.address.street}, ${BRAND.address.city}, ${BRAND.address.region} ${BRAND.address.postal}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-blue text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-brand-blue/90 transition-colors shadow-lg"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
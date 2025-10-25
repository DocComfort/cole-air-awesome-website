import Section from "@/components/Section";
import { BRAND } from "@/lib/brand";
import { generateServiceMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = generateServiceMetadata(
  "Commercial Refrigeration | Lake Charles, LA",
  "Reliable commercial refrigeration repair and installation for restaurants, stores, and facilities.",
  "/services/commercial-refrigeration"
);

export default function Page() {
  const jsonLd = serviceJsonLd(
    "Commercial Refrigeration",
    "Repair, installation, and maintenance for commercial coolers, freezers, and more.",
    `${BRAND.url}/services/commercial-refrigeration`
  );

  return (
    <>
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section title="Commercial Refrigeration" subtitle="Keep critical equipment running">
        <div className="card">
          <p className="text-slate-700 mb-4">
            We support restaurants, grocery, and facilities with prompt service and expert installation for
            commercial refrigeration systems.
          </p>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>Emergency repair and scheduled maintenance</li>
            <li>Walk-in coolers, freezers, reach-ins, and more</li>
            <li>Energy-efficient upgrades and controls</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href={`tel:${BRAND.phoneHref}`} className="btn btn-primary">Request Service</a>
            <a href="/contact" className="btn btn-outline">Get a Quote</a>
          </div>
        </div>
      </Section>
    </>
  );
}

import Section from "@/components/Section";
import { BRAND } from "@/lib/brand";
import { generateServiceMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = generateServiceMetadata(
  "Indoor Air Quality | Lake Charles, LA",
  "Filters, UV, and ventilation solutions to improve indoor air quality and health.",
  "/services/air-quality"
);

export default function Page() {
  const jsonLd = serviceJsonLd(
    "Indoor Air Quality",
    "Air cleaners, UV purification, and ventilation upgrades for healthier air.",
    `${BRAND.url}/services/air-quality`
  );

  return (
    <>
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section title="Indoor Air Quality" subtitle="Breathe cleaner, healthier air at home">
        <div className="card">
          <p className="text-slate-700 mb-4">
            From high-MERV filters to UV lights and fresh air systems, we tailor IAQ solutions to your home and needs.
          </p>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>Whole-home filtration and purification</li>
            <li>Humidity control and ventilation upgrades</li>
            <li>Solutions for allergies and odors</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href="/contact" className="btn btn-primary">Get Recommendations</a>
            <a href={`tel:${BRAND.phoneHref}`} className="btn btn-outline">Speak to a Specialist</a>
          </div>
        </div>
      </Section>
    </>
  );
}

import Section from "@/components/Section";
import { BRAND } from "@/lib/brand";
import { generateServiceMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = generateServiceMetadata(
  "Heat Pump Installation | Lake Charles, LA",
  "Energy-efficient heat pump installation and replacement by licensed experts. Free estimates in Lake Charles & surrounding areas.",
  "/services/heat-pump"
);

export default function Page() {
  const jsonLd = serviceJsonLd(
    "Heat Pump Installation",
    "High-efficiency heat pump systems sized and installed for Louisiana climates.",
    `${BRAND.url}/services/heat-pump`
  );

  return (
    <>
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section title="Heat Pump Installation" subtitle="Efficient comfort, year-round">
        <div className="card">
          <p className="text-slate-700 mb-4">
            We size, design, and install heat pump systems for optimal performance and energy savings.
            Our team provides upfront quotes, financing options, and manufacturer warranties.
          </p>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>Professional load calculation & equipment sizing</li>
            <li>High-efficiency options and smart thermostats</li>
            <li>Manufacturer warranty support</li>
            <li>Free estimates and financing options available</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href="/contact" className="btn btn-primary">Get Free Estimate</a>
            <a href={`tel:${BRAND.phoneHref}`} className="btn btn-outline">Speak with a Specialist</a>
          </div>
        </div>
      </Section>
    </>
  );
}

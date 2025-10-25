import Section from "@/components/Section";
import { BRAND } from "@/lib/brand";
import { generateServiceMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = generateServiceMetadata(
  "Heating Services | Lake Charles, LA",
  "Complete heating services including diagnosis, repair, and installation.",
  "/services/heating"
);

export default function Page() {
  const jsonLd = serviceJsonLd(
    "Heating Services",
    "Heating diagnosis, repair, and new system installation by licensed professionals.",
    `${BRAND.url}/services/heating`
  );

  return (
    <>
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section title="Heating Services" subtitle="Stay warm and reliable all season long">
        <div className="card">
          <p className="text-slate-700 mb-4">
            Whether you need heat pump service or a furnace replacement, our team provides fast, dependable service with
            upfront pricing and financing options.
          </p>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>Heating diagnostics & emergency repair</li>
            <li>Energy-efficient replacements</li>
            <li>Maintenance to prevent breakdowns</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href="/services/heating-repair" className="btn btn-primary">Heating Repair</a>
            <a href="/contact" className="btn btn-outline">Request Estimate</a>
          </div>
        </div>
      </Section>
    </>
  );
}

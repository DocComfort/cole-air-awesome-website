import Section from "@/components/Section";
import { BRAND } from "@/lib/brand";
import { generateServiceMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = generateServiceMetadata(
  "Building Performance Testing | Lake Charles, LA",
  "Whole-home performance testing to improve comfort, efficiency, and code compliance.",
  "/services/building-performance"
);

export default function Page() {
  const jsonLd = serviceJsonLd(
    "Building Performance Testing",
    "Testing and evaluation for airflow, duct leakage, and insulation performance.",
    `${BRAND.url}/services/building-performance`
  );

  return (
    <>
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section title="Building Performance Testing" subtitle="Comfort, efficiency, and compliance">
        <div className="card">
          <p className="text-slate-700 mb-4">
            We evaluate your home's envelope and HVAC performance to uncover efficiency losses and comfort issues.
            Our report includes prioritized recommendations and estimated savings.
          </p>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>Duct leakage testing and airflow verification</li>
            <li>Blower door testing & insulation evaluation</li>
            <li>Balanced comfort and lower utility bills</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href="/contact" className="btn btn-primary">Schedule Testing</a>
            <a href={`tel:${BRAND.phoneHref}`} className="btn btn-outline">Talk with Our Team</a>
          </div>
        </div>
      </Section>
    </>
  );
}

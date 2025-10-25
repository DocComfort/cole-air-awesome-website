import Section from "@/components/Section";
import { BRAND } from "@/lib/brand";
import { generateServiceMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = generateServiceMetadata(
  "AC Maintenance Plans | Lake Charles, LA",
  "Seasonal tune-ups and maintenance plans to extend system life and lower bills.",
  "/services/maintenance"
);

export default function Page() {
  const jsonLd = serviceJsonLd(
    "AC Maintenance Plans",
    "Preventive maintenance plans to keep your HVAC running efficiently.",
    `${BRAND.url}/services/maintenance`
  );

  return (
    <>
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section title="AC Maintenance Plans" subtitle="Protect your investment and avoid breakdowns">
        <div className="card">
          <p className="text-slate-700 mb-4">
            Regular tune-ups reduce repairs, improve efficiency, and help your system last longer. We offer custom plans
            for homes and businesses across Southwest Louisiana.
          </p>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>Seasonal inspections and cleaning</li>
            <li>Priority service and member discounts</li>
            <li>Detailed report after each visit</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href="/contact" className="btn btn-primary">Join a Maintenance Plan</a>
            <a href={`tel:${BRAND.phoneHref}`} className="btn btn-outline">Ask About Memberships</a>
          </div>
        </div>
      </Section>
    </>
  );
}

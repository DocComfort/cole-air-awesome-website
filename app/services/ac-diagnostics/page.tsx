import Section from "@/components/Section";
import { BRAND } from "@/lib/brand";
import { generateServiceMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/seo";
import Script from "next/script";

export const metadata = generateServiceMetadata(
  "AC Diagnostics | Lake Charles, LA",
  "Advanced AC diagnostics to quickly identify cooling issues and prevent costly repairs. Serving Lake Charles & Southwest Louisiana since 1985.",
  "/services/ac-diagnostics"
);

export default function Page() {
  const jsonLd = serviceJsonLd(
    "AC Diagnostics",
    "Advanced diagnostic testing to pinpoint AC issues efficiently.",
    `${BRAND.url}/services/ac-diagnostics`
  );

  return (
    <>
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section title="AC Diagnostics" subtitle="Pinpoint issues fast and avoid larger repairs">
        <div className="card">
          <p className="text-slate-700 mb-4">
            Our technicians use professional tools to diagnose airflow problems, refrigerant issues, electrical faults,
            and thermostat or control failures. We provide clear findings and upfront options before any work begins.
          </p>
          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>Full-system health check and performance testing</li>
            <li>Refrigerant pressure, leak detection, and electrical testing</li>
            <li>Thermostat calibration and sensor verification</li>
            <li>Transparent, actionable recommendations</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href={`tel:${BRAND.phoneHref}`} className="btn btn-primary">Call {BRAND.phone}</a>
            <a href="/contact" className="btn btn-outline">Request Diagnostic Visit</a>
          </div>
        </div>
      </Section>
    </>
  );
}

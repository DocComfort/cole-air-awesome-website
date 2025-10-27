import Section from "@/components/Section";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Join Our Team | Cole Air Careers",
  description: "Apply for a career at Cole Air, Inc. Fill out our job application form to join our professional HVAC team in Lake Charles, LA.",
};

export default function CareersPage() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <Section title="Join Our Team" subtitle="Cole Air Careers & Job Application">
        <form name="job-application" method="POST" action="/__forms.html" className="grid gap-6">
          <input type="hidden" name="form-name" value="job-application" />
          <label className="grid gap-1">
            <span className="font-medium">Full Name *</span>
            <input name="name" required className="border rounded-xl px-3 py-2" placeholder="Your name" />
          </label>
          <label className="grid gap-1">
            <span className="font-medium">Email *</span>
            <input name="email" type="email" required className="border rounded-xl px-3 py-2" placeholder="your@email.com" />
          </label>
          <label className="grid gap-1">
            <span className="font-medium">Phone *</span>
            <input name="phone" type="tel" required className="border rounded-xl px-3 py-2" placeholder="(337) 123-4567" />
          </label>
          <label className="grid gap-1">
            <span className="font-medium">Address</span>
            <input name="address" className="border rounded-xl px-3 py-2" placeholder="Street, City, State" />
          </label>
          <label className="grid gap-1">
            <span className="font-medium">Work Experience</span>
            <textarea name="experience" rows={3} className="border rounded-xl px-3 py-2" placeholder="Describe your HVAC or related experience" />
          </label>
          <label className="grid gap-1">
            <span className="font-medium">Certifications</span>
            <input name="certifications" className="border rounded-xl px-3 py-2" placeholder="EPA, NATE, etc." />
          </label>
          <label className="grid gap-1">
            <span className="font-medium">Availability</span>
            <input name="availability" className="border rounded-xl px-3 py-2" placeholder="Full-time, part-time, weekends, etc." />
          </label>
          <label className="grid gap-1">
            <span className="font-medium">Why do you want to join Cole Air?</span>
            <textarea name="cover-letter" rows={4} className="border rounded-xl px-3 py-2" placeholder="Tell us about yourself and why you'd be a great fit." />
          </label>
          <button className="btn btn-primary text-lg py-3" type="submit">Submit Application</button>
          <p className="text-xs text-slate-500 text-center">By submitting, you agree to be contacted by Cole Air regarding employment opportunities.</p>
        </form>
      </Section>
    </div>
  );
}

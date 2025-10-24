import Link from "next/link";

export default function ServiceCard({ title, desc, href }: { title: string; desc: string; href?: string }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-700 mb-4">{desc}</p>
      {href && <Link href={href as any} className="btn btn-outline">Learn More</Link>}
    </div>
  );
}

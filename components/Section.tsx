export default function Section({ id, title, subtitle, children } : { id?: string, title: string, subtitle?: string, children: React.ReactNode }){
  return (
    <section id={id} className="mb-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle && <p className="text-slate-600">{subtitle}</p>}
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  )
}

export function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="container py-6 md:py-24">
      <div className="mb-4 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#415E72' }}>{title}</h2>
        {subtitle ? <p className="mt-1 md:mt-2 max-w-prose" style={{ color: 'var(--brand2)' }}>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  )
}
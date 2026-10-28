import Reveal from './Reveal'

interface PageHeroProps {
  title: string
  subtitle?: string
  eyebrow?: string
}

export default function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-secondary text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 80% 20%, rgba(255,203,8,0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(255,203,8,0.08), transparent 50%)',
        }}
      />
      <div className="relative container-site py-16 sm:py-20">
        {eyebrow && (
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal delay={1}>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={2}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
        <Reveal delay={3}>
          <div className="mt-6 h-1 w-16 bg-primary" />
        </Reveal>
      </div>
    </section>
  )
}

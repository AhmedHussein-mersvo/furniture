import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'

interface Stat {
  value: number
  suffix?: string
  label: string
  hint: string
}

const stats: Stat[] = [
  {
    value: 12,
    suffix: '+',
    label: 'Years',
    hint: 'Crafting furniture with care',
  },
  {
    value: 850,
    suffix: '+',
    label: 'Pieces',
    hint: 'Across our collections',
  },
  {
    value: 1200,
    suffix: '+',
    label: 'Clients',
    hint: 'Homes & projects furnished',
  },
  {
    value: 2,
    label: 'Countries',
    hint: 'Egypt & United Arab Emirates',
  },
]

function StatItem({
  stat,
  active,
  delay,
}: {
  stat: Stat
  active: boolean
  delay: number
}) {
  const count = useCountUp(stat.value, active, 1600 + delay * 120)

  return (
    <div
      className={`reveal border-t border-white/15 pt-8 text-center first:border-t-0 first:pt-0 sm:border-t-0 sm:pt-0 lg:px-8 ${active ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay * 80}ms` }}
    >
      <p className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {count}
        {stat.suffix ?? ''}
      </p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
        {stat.label}
      </p>
      <p className="mt-2 text-sm text-white/50">{stat.hint}</p>
    </div>
  )
}

export default function CounterUp() {
  const { ref, visible } = useReveal<HTMLElement>(0.25)

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-secondary py-16 text-white sm:py-20"
      aria-label="Company highlights"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 10% 50%, rgba(255,203,8,0.12), transparent 55%), radial-gradient(ellipse 50% 60% at 90% 40%, rgba(255,203,8,0.08), transparent 50%)',
        }}
      />
      <div className="relative container-site">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={visible} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

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
      className={`reveal border border-white/10 p-4 text-center sm:border-0 sm:p-0 lg:px-8 ${active ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay * 80}ms` }}
    >
      <p className="font-display text-2xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
        {count}
        {stat.suffix ?? ''}
      </p>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:mt-3 sm:text-xs sm:tracking-[0.2em]">
        {stat.label}
      </p>
      <p className="mt-1.5 text-[11px] leading-snug text-white/50 sm:mt-2 sm:text-sm">
        {stat.hint}
      </p>
    </div>
  )
}

export default function CounterUp() {
  const { ref, visible } = useReveal<HTMLElement>(0.25)

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-secondary py-12 text-white sm:py-20"
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
        <div className="grid grid-cols-2 gap-3 sm:gap-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={visible} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

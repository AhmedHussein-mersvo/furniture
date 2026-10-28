import { MapPin, MessageCircle, ShieldCheck, Truck } from 'lucide-react'
import Reveal from './Reveal'
import { useLanguage } from '../context/LanguageContext'

const items = [
  { icon: Truck, titleKey: 'trustDeliveryTitle' as const, textKey: 'trustDeliveryText' as const },
  { icon: MapPin, titleKey: 'trustShowroomTitle' as const, textKey: 'trustShowroomText' as const },
  { icon: ShieldCheck, titleKey: 'trustQualityTitle' as const, textKey: 'trustQualityText' as const },
  { icon: MessageCircle, titleKey: 'trustSupportTitle' as const, textKey: 'trustSupportText' as const },
]

export default function TrustStrip() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-line bg-page py-10 sm:py-12">
      <div className="container-site grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {items.map((item, i) => (
          <Reveal
            key={item.titleKey}
            delay={Math.min(i, 5) as 0 | 1 | 2 | 3 | 4 | 5}
            className="flex gap-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-secondary text-primary">
              <item.icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-display text-sm font-semibold tracking-wide text-ink">
                {t(item.titleKey)}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {t(item.textKey)}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

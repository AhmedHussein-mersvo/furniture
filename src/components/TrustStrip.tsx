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
    <section className="border-y border-line bg-page py-8 sm:py-12">
      <div className="container-site grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4 lg:gap-6">
        {items.map((item, i) => (
          <Reveal
            key={item.titleKey}
            delay={Math.min(i, 5) as 0 | 1 | 2 | 3 | 4 | 5}
            className="flex flex-col gap-2.5 sm:flex-row sm:gap-4"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-secondary text-primary sm:h-11 sm:w-11">
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-xs font-semibold tracking-wide text-ink sm:text-sm">
                {t(item.titleKey)}
              </h3>
              <p className="mt-1 text-[11px] leading-snug text-muted sm:text-sm sm:leading-relaxed">
                {t(item.textKey)}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

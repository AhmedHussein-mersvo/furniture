import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import { useLanguage } from '../context/LanguageContext'
import { MAP_ADDRESS, MAP_EMBED, MAP_LINK } from '../data/site'

export default function ShowroomSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            {t('showroomEyebrow')}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t('showroomTitle')}
          </h2>
          <div className="mt-4 h-1 w-14 bg-primary" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {t('showroomSubtitle')}
          </p>

          <div className="mt-8 flex gap-3 text-sm text-ink">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark" />
            <div>
              <p className="font-medium">{MAP_ADDRESS}</p>
              <p className="mt-1 text-muted">{t('showroomHours')}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-2 px-6 py-3 text-xs"
            >
              <ExternalLink className="h-4 w-4" />
              {t('getDirections')}
            </a>
            <Link
              to="/contact"
              className="btn-outline gap-2 border-ink/20 px-6 py-3 text-xs text-ink"
            >
              {t('visitCta')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={2} className="overflow-hidden border border-line bg-page">
          <div className="relative aspect-[16/11] min-h-[280px]">
            <iframe
              title={t('showroomMapTitle')}
              src={MAP_EMBED}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

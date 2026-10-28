import { Link } from 'react-router-dom'
import { ArrowRight, Sofa, Sparkles, Truck } from 'lucide-react'
import { categories, getFeaturedProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import CounterUp from '../components/CounterUp'
import TrustStrip from '../components/TrustStrip'
import ShowroomSection from '../components/ShowroomSection'
import { useWhatsApp } from '../context/WhatsAppContext'
import { useLanguage } from '../context/LanguageContext'
import { localizeCategory } from '../i18n/catalog'
import heroImg from '../assets/hero.png'

export default function Home() {
  const featured = getFeaturedProducts()
  const { open: openWhatsApp } = useWhatsApp()
  const { t, lang } = useLanguage()

  return (
    <>
      <section className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-secondary text-white">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.45) 100%), radial-gradient(ellipse at 70% 30%, rgba(255,203,8,0.15), transparent 50%)',
          }}
        />

        <div className="relative container-site flex min-h-[calc(100svh-72px)] flex-col justify-center py-20">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            {t('heroEyebrow')}
          </p>
          <h1 className="animate-fade-up stagger-1 mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {t('heroTitleBefore')}{' '}
            <span className="text-primary">{t('heroTitleHighlight')}</span>
          </h1>
          <p className="animate-fade-up stagger-2 mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t('heroSubtitle')}
          </p>
          <div className="animate-fade-up stagger-3 mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="btn-accent gap-2 px-7 py-3.5 text-xs"
            >
              {t('exploreProducts')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="btn-outline-light gap-2 px-7 py-3.5 text-xs"
            >
              {t('talkToUs')}
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </section>

      <TrustStrip />

      <CounterUp />

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              {t('collections')}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t('shopByCategory')}
            </h2>
            <p className="mt-3 max-w-lg text-muted">{t('shopByCategorySub')}</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {categories.map((cat, i) => {
              const localized = localizeCategory(cat, lang)
              return (
              <Reveal
                key={cat.slug}
                delay={Math.min(i % 6, 5) as 0 | 1 | 2 | 3 | 4 | 5}
              >
                <Link
                  to={`/products/category/${cat.slug}`}
                  className="group relative block aspect-[3/4] overflow-hidden bg-secondary sm:aspect-[5/4] lg:aspect-[3/4]"
                >
                  <img
                    src={cat.image}
                    alt={localized.name}
                    className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">
                    <h3 className="font-display text-base font-bold text-white transition-colors group-hover:text-primary sm:text-xl">
                      {localized.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-white/60 sm:text-sm">
                      {localized.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {t('viewCollection')}{' '}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                {t('highlights')}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {t('featuredPieces')}
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:gap-3 hover:text-primary-dark"
            >
              {t('viewAllProducts')} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {featured.slice(0, 6).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ShowroomSection />

      <section className="bg-secondary py-20 text-white sm:py-24">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t('whyVisual')}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t('whyTitle')}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {[
              {
                icon: Sofa,
                title: t('whyCuratedTitle'),
                text: t('whyCuratedText'),
              },
              {
                icon: Sparkles,
                title: t('whyDetailTitle'),
                text: t('whyDetailText'),
              },
              {
                icon: Truck,
                title: t('whyReachTitle'),
                text: t('whyReachText'),
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                delay={Math.min(i + 1, 5) as 0 | 1 | 2 | 3 | 4 | 5}
              >
                <div className="border-t border-white/15 pt-8">
                  <item.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #000 1px, transparent 1px), radial-gradient(circle at 80% 50%, #000 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative container-site text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              {t('ctaTitle')}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-secondary/75">
              {t('ctaSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary px-7 py-3.5 text-xs">
                {t('contactCta')}
              </Link>
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="btn-outline border-2 border-secondary px-7 py-3.5 text-xs text-secondary"
              >
                {t('whatsappNow')}
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

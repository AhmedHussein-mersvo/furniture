import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Phone, Ruler, Sparkles, Package } from 'lucide-react'
import ImageZoom from '../components/ImageZoom'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import StickyInquireBar from '../components/StickyInquireBar'
import {
  categories,
  companyInfo,
  getProductBySlug,
  getProductsByCategory,
} from '../data/products'
import {
  buildProductWhatsAppMessage,
  useWhatsApp,
} from '../context/WhatsAppContext'
import { useLanguage } from '../context/LanguageContext'
import {
  getCategoryName,
  localizeProduct,
} from '../i18n/catalog'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined
  const { open: openWhatsApp } = useWhatsApp()
  const { t, lang } = useLanguage()
  const [activeImage, setActiveImage] = useState(0)
  const localized = product ? localizeProduct(product, lang) : undefined

  const inquireOnWhatsApp = () => {
    if (!localized) return
    openWhatsApp({
      message: buildProductWhatsAppMessage(localized.name, window.location.href),
    })
  }

  if (!product) {
    return (
      <section className="container-site py-24 text-center">
        <h1 className="font-display text-3xl font-bold">{t('noProducts')}</h1>
        <Link
          to="/products"
          className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.12em] text-primary-dark"
        >
          {t('backToProducts')}
        </Link>
      </section>
    )
  }

  const category = categories.find((c) => c.slug === product.category)
  const categoryLabel = category
    ? getCategoryName(category.slug, lang)
    : undefined
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3)
  const images = product.images.length ? product.images : [product.image]
  const currentSrc = images[activeImage] ?? product.image

  return (
    <>
      <section className="pb-28 pt-10 sm:pt-14 lg:pb-16">
        <div className="container-site">
          <Reveal>
            <Link
              to={
                category
                  ? `/products/category/${category.slug}`
                  : '/products'
              }
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              {categoryLabel
                ? `${t('backToCategory')} ${categoryLabel}`
                : t('backToProducts')}
            </Link>
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal className="w-full lg:sticky lg:top-28">
              <div className="overflow-hidden border border-line bg-surface">
                <ImageZoom src={currentSrc} alt={localized!.name} />
              </div>
              {images.length > 1 && (
                <div className="mt-3 flex gap-2">
                  {images.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={`h-16 w-16 overflow-hidden border-2 bg-surface transition-colors sm:w-20 ${
                        i === activeImage
                          ? 'border-primary'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </Reveal>

            <Reveal delay={2} className="flex flex-col">
              {category && categoryLabel && (
                <Link
                  to={`/products/category/${category.slug}`}
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark"
                >
                  {categoryLabel}
                </Link>
              )}
              <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {localized!.name}
              </h1>
              <div className="mt-4 h-1 w-14 bg-primary" />
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                {localized!.description}
              </p>

              <dl className="mt-8 space-y-4 border border-line bg-surface/60 p-5">
                {[
                  {
                    icon: Sparkles,
                    label: t('materials'),
                    value: t('materialsValue'),
                  },
                  {
                    icon: Ruler,
                    label: t('dimensions'),
                    value: t('dimensionsValue'),
                  },
                  {
                    icon: Package,
                    label: t('availability'),
                    value: t('availabilityValue'),
                  },
                ].map((row) => (
                  <div key={row.label} className="flex gap-3">
                    <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" />
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                        {row.label}
                      </dt>
                      <dd className="mt-1 text-sm text-ink">{row.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-10 space-y-3 border-t border-line pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                  {t('interestedTitle')}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={inquireOnWhatsApp}
                    className="inline-flex items-center gap-2 bg-[#25D366] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t('whatsapp')}
                  </button>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="btn-primary gap-2 px-5 py-3.5 text-xs"
                  >
                    <Phone className="h-4 w-4" />
                    {companyInfo.phoneDisplay}
                  </a>
                  <Link
                    to="/contact"
                    className="btn-outline gap-2 border-line px-5 py-3.5 text-xs text-ink"
                  >
                    {t('contactUs')}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-surface py-16 sm:py-20">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {t('similarPieces')}
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <StickyInquireBar
        productName={localized!.name}
        onWhatsApp={inquireOnWhatsApp}
      />
    </>
  )
}

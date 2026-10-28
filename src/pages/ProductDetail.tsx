import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Phone } from 'lucide-react'
import ImageZoom from '../components/ImageZoom'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
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

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined
  const { open: openWhatsApp } = useWhatsApp()
  const [activeImage, setActiveImage] = useState(0)

  const inquireOnWhatsApp = () => {
    if (!product) return
    const url = window.location.href
    openWhatsApp({
      message: buildProductWhatsAppMessage(product.name, url),
    })
  }

  if (!product) {
    return (
      <section className="container-site py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Product not found</h1>
        <Link
          to="/products"
          className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.12em] text-primary-dark"
        >
          Back to products
        </Link>
      </section>
    )
  }

  const category = categories.find((c) => c.slug === product.category)
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3)
  const images = product.images.length ? product.images : [product.image]
  const currentSrc = images[activeImage] ?? product.image

  return (
    <>
      <section className="py-10 sm:py-14">
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
              <ArrowLeft className="h-4 w-4" />
              {category ? `Back to ${category.name}` : 'Back to products'}
            </Link>
          </Reveal>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal className="w-full">
              <div className="overflow-hidden border border-black/8 bg-surface">
                <ImageZoom src={currentSrc} alt={product.name} />
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
              {category && (
                <Link
                  to={`/products/category/${category.slug}`}
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark"
                >
                  {category.name}
                </Link>
              )}
              <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {product.name}
              </h1>
              <div className="mt-4 h-1 w-14 bg-primary" />
              <p className="mt-6 text-base leading-relaxed text-muted">
                {product.description}
              </p>

              <div className="mt-10 space-y-3 border-t border-black/8 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                  Interested in this piece?
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={inquireOnWhatsApp}
                    className="inline-flex items-center gap-2 bg-[#25D366] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </button>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="inline-flex items-center gap-2 bg-secondary px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary transition-opacity hover:opacity-90"
                  >
                    <Phone className="h-4 w-4" />
                    Call {companyInfo.phoneDisplay}
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border border-black/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-secondary hover:bg-secondary hover:text-primary"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-black/8 bg-surface py-16">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                More from {category?.name}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

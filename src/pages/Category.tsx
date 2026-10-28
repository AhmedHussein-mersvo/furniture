import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import {
  getCategoryBySlug,
  getProductsByCategory,
  type CategorySlug,
} from '../data/products'
import { useLanguage } from '../context/LanguageContext'

export default function Category() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useLanguage()
  const category = slug ? getCategoryBySlug(slug) : undefined
  const products = category
    ? getProductsByCategory(category.slug as CategorySlug)
    : []

  if (!category) {
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

  return (
    <>
      <PageHero
        eyebrow={t('categoryLabel')}
        title={category.name}
        subtitle={category.description}
      />

      <section className="py-14 sm:py-16">
        <div className="container-site">
          <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted">
              {products.length}{' '}
              {products.length === 1 ? t('product') : t('products')}
            </p>
            <Link
              to="/products"
              className="text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-primary-dark"
            >
              {t('viewAllProducts')}
            </Link>
          </Reveal>

          {products.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-muted">{t('noProducts')}</p>
          )}
        </div>
      </section>
    </>
  )
}

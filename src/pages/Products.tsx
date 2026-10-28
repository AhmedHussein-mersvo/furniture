import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import FloatingCategoryFilter from '../components/FloatingCategoryFilter'
import {
  categories,
  getProductsByCategory,
  type CategorySlug,
} from '../data/products'
import { useLanguage } from '../context/LanguageContext'

export default function Products() {
  const { t } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const initial = (searchParams.get('category') as CategorySlug | 'all') || 'all'
  const [filter, setFilter] = useState<CategorySlug | 'all'>(
    categories.some((c) => c.slug === initial) ? (initial as CategorySlug) : 'all',
  )

  const filtered = useMemo(() => getProductsByCategory(filter), [filter])

  const setCategory = (slug: CategorySlug | 'all') => {
    setFilter(slug)
    if (slug === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: slug })
    }
  }

  return (
    <>
      <PageHero
        eyebrow={t('catalog')}
        title={t('ourProducts')}
        subtitle={t('catalogSubtitle')}
      />

      <section className="py-14 sm:py-16">
        <div className="container-site">
          <Reveal className="flex flex-wrap gap-2 border-b border-line pb-6">
            <FilterChip
              active={filter === 'all'}
              onClick={() => setCategory('all')}
              label={t('all')}
            />
            {categories.map((cat) => (
              <FilterChip
                key={cat.slug}
                active={filter === cat.slug}
                onClick={() => setCategory(cat.slug)}
                label={cat.name}
              />
            ))}
          </Reveal>

          <Reveal delay={1}>
            <p className="mt-6 text-sm text-muted" key={filter}>
              {t('showing')} {filtered.length}{' '}
              {filtered.length === 1 ? t('product') : t('products')}
              {filter !== 'all' && (
                <>
                  {' '}
                  {t('in')}{' '}
                  <span className="font-medium text-ink">
                    {categories.find((c) => c.slug === filter)?.name}
                  </span>
                </>
              )}
            </p>
          </Reveal>

          {filtered.length > 0 ? (
            <div
              className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6"
              key={filter}
            >
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-muted">{t('noProducts')}</p>
          )}
        </div>
      </section>

      <FloatingCategoryFilter active={filter} onSelect={setCategory} />
    </>
  )
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
        active
          ? 'bg-secondary text-primary'
          : 'bg-surface text-ink hover:bg-secondary hover:text-primary'
      }`}
    >
      {label}
    </button>
  )
}

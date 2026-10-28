import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import {
  categories,
  getProductsByCategory,
  type CategorySlug,
} from '../data/products'

export default function Products() {
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
        eyebrow="Catalog"
        title="Our Products"
        subtitle="Browse the full Visual Furniture collection. Filter by category to find exactly what your space needs."
      />

      <section className="py-14 sm:py-16">
        <div className="container-site">
          <Reveal className="flex flex-wrap gap-2 border-b border-black/8 pb-6">
            <FilterChip
              active={filter === 'all'}
              onClick={() => setCategory('all')}
              label="All"
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
              Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
              {filter !== 'all' && (
                <>
                  {' '}
                  in{' '}
                  <span className="font-medium text-ink">
                    {categories.find((c) => c.slug === filter)?.name}
                  </span>
                </>
              )}
            </p>
          </Reveal>

          {filtered.length > 0 ? (
            <div
              className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              key={filter}
            >
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-muted">
              No products in this category yet.
            </p>
          )}
        </div>
      </section>
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

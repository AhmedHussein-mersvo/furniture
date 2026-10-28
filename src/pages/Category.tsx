import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import {
  getCategoryBySlug,
  getProductsByCategory,
  type CategorySlug,
} from '../data/products'

export default function Category() {
  const { slug } = useParams<{ slug: string }>()
  const category = slug ? getCategoryBySlug(slug) : undefined
  const products = category
    ? getProductsByCategory(category.slug as CategorySlug)
    : []

  if (!category) {
    return (
      <section className="container-site py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Category not found</h1>
        <Link
          to="/products"
          className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.12em] text-primary-dark"
        >
          Back to products
        </Link>
      </section>
    )
  }

  return (
    <>
      <PageHero
        eyebrow="Category"
        title={category.name}
        subtitle={category.description}
      />

      <section className="py-14 sm:py-16">
        <div className="container-site">
          <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted">
              {products.length} product{products.length !== 1 ? 's' : ''}
            </p>
            <Link
              to="/products"
              className="text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-primary-dark"
            >
              View all products
            </Link>
          </Reveal>

          {products.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-muted">
              Products for this category are coming soon.
            </p>
          )}
        </div>
      </section>
    </>
  )
}

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { categories } from '../data/products'
import Reveal from './Reveal'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const category = categories.find((c) => c.slug === product.category)
  const delay = Math.min(index % 6, 5) as 0 | 1 | 2 | 3 | 4 | 5

  return (
    <Reveal delay={delay} as="article" className="group flex flex-col bg-white">
      <Link
        to={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-surface"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {category && (
          <span className="absolute left-3 top-3 bg-secondary/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
            {category.name}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col border border-t-0 border-black/8 px-5 py-5">
        <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
          <Link
            to={`/products/${product.slug}`}
            className="transition-colors hover:text-primary-dark"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
          {product.shortDescription}
        </p>
        <Link
          to={`/products/${product.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-primary-dark"
        >
          Read more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Reveal>
  )
}

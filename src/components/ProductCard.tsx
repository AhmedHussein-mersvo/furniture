import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { categories } from '../data/products'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const category = categories.find((c) => c.slug === product.category)
  const delay = Math.min(index % 6, 5) as 0 | 1 | 2 | 3 | 4 | 5
  const { t } = useLanguage()

  return (
    <Reveal
      delay={delay}
      as="article"
      className="group flex flex-col overflow-hidden bg-page"
    >
      <Link
        to={`/products/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-surface"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        {category && (
          <span className="absolute start-2 top-2 bg-secondary/90 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.12em] text-primary sm:start-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[11px] sm:tracking-[0.14em]">
            {category.name}
          </span>
        )}
        <span className="absolute inset-x-0 bottom-0 hidden translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:block">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {t('readMore')}
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </span>
      </Link>

      <div className="flex flex-1 flex-col border border-t-0 border-line px-2.5 py-3 sm:px-5 sm:py-5">
        <h3 className="font-display text-sm font-semibold tracking-tight text-ink sm:text-lg">
          <Link
            to={`/products/${product.slug}`}
            className="transition-colors hover:text-primary-dark"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-muted sm:mt-2 sm:text-sm">
          {product.shortDescription}
        </p>
        <Link
          to={`/products/${product.slug}`}
          className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:gap-3 hover:text-primary-dark sm:mt-4 sm:gap-2 sm:text-sm"
        >
          {t('readMore')}
          <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </Link>
      </div>
    </Reveal>
  )
}

import { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Filter, X } from 'lucide-react'
import { categories, type CategorySlug } from '../data/products'
import { useLanguage } from '../context/LanguageContext'
import { getCategoryName } from '../i18n/catalog'

type FilterValue = CategorySlug | 'all'

interface FloatingCategoryFilterProps {
  /** Controlled active filter (Products page). If omitted, uses navigate (Category pages). */
  active?: FilterValue
  onSelect?: (slug: FilterValue) => void
  /** Scroll distance before the FAB appears */
  showAfter?: number
}

export default function FloatingCategoryFilter({
  active = 'all',
  onSelect,
  showAfter = 220,
}: FloatingCategoryFilterProps) {
  const { t, lang } = useLanguage()
  const navigate = useNavigate()
  const panelId = useId()
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop
      setVisible(y > showAfter)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [showAfter])

  useEffect(() => {
    if (!visible) setOpen(false)
  }, [visible])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  const select = (slug: FilterValue) => {
    if (onSelect) {
      onSelect(slug)
    } else if (slug === 'all') {
      navigate('/products')
    } else {
      navigate(`/products/category/${slug}`)
    }
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeLabel =
    active === 'all' ? t('all') : getCategoryName(active, lang)

  const options: { slug: FilterValue; label: string }[] = [
    { slug: 'all', label: t('all') },
    ...categories.map((c) => ({
      slug: c.slug as FilterValue,
      label: getCategoryName(c.slug, lang),
    })),
  ]

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 lg:hidden">
      {/* Backdrop */}
      <div
        className={`pointer-events-auto absolute inset-0 bg-black/45 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Sheet */}
      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label={t('filterByCategory')}
        className={`pointer-events-auto absolute inset-x-0 bottom-0 border-t border-line bg-page shadow-[0_-12px_40px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-out ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="container-site pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                {t('filterByCategory')}
              </p>
              <p className="mt-1 font-display text-base font-semibold text-ink">
                {activeLabel}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center bg-surface text-ink"
              aria-label={t('closeFilter')}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pb-2">
            {options.map((opt) => {
              const isActive = opt.slug === active
              return (
                <button
                  key={opt.slug}
                  type="button"
                  onClick={() => select(opt.slug)}
                  className={`px-3 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? 'bg-secondary text-primary'
                      : 'bg-surface text-ink hover:bg-secondary hover:text-primary'
                  }`}
                >
                  {opt.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* FAB — bottom start (left in LTR, right in RTL) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={t('filterByCategory')}
        className={`pointer-events-auto absolute bottom-6 start-6 z-10 inline-flex items-center gap-2 bg-secondary px-4 py-3.5 text-primary shadow-lg transition-all duration-300 ${
          visible && !open
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <Filter className="h-4 w-4" strokeWidth={2} />
        <span className="text-[11px] font-bold uppercase tracking-[0.14em]">
          {t('filter')}
        </span>
        {active !== 'all' && (
          <span className="max-w-[5.5rem] truncate bg-primary px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-secondary">
            {activeLabel}
          </span>
        )}
      </button>
    </div>
  )
}

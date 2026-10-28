import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { categories, companyInfo } from '../data/products'
import { useWhatsApp } from '../context/WhatsAppContext'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import Logo from './Logo'
import TopBar from './TopBar'

const linkBase =
  'relative text-sm font-medium uppercase tracking-[0.14em] transition-all duration-300'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileCats, setMobileCats] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const { open: openWhatsApp } = useWhatsApp()
  const { t } = useLanguage()
  const { isDark } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
    setMobileCats(false)
  }, [location.pathname])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${scrolled ? 'text-[12px]' : 'text-sm'} ${
      isActive
        ? 'text-primary-dark'
        : 'text-ink/80 hover:text-ink dark:text-white/75 dark:hover:text-primary'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 animate-header-in border-b bg-page transition-[height,box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? 'border-ink/90 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:border-white/15 dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)]'
          : 'border-transparent'
      }`}
    >
      <TopBar />

      <div
        className={`container-site flex items-center justify-between gap-6 transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? 'h-14' : 'h-[72px]'
        }`}
      >
        <Logo className="shrink-0" compact={scrolled} onDark={isDark} />

        <nav
          className={`hidden items-center transition-all duration-500 lg:flex ${
            scrolled ? 'gap-6' : 'gap-8'
          }`}
          aria-label="Main"
        >
          <NavLink to="/" end className={navClass}>
            {t('home')}
          </NavLink>

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <NavLink
                to="/products"
                className={navClass}
                onClick={() => setDropdownOpen(false)}
              >
                {t('ourProducts')}
              </NavLink>
              <button
                type="button"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                aria-label={t('categories')}
                onClick={() => setDropdownOpen((v) => !v)}
                className="p-0.5 text-ink/70 transition-all duration-300 hover:text-ink dark:text-white/70 dark:hover:text-primary"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-primary-dark' : ''}`}
                />
              </button>
            </div>

            {dropdownOpen && (
              <div className="absolute start-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 rtl:translate-x-1/2">
                <div className="animate-dropdown overflow-hidden border border-line bg-page shadow-xl">
                  <div className="h-0.5 w-full bg-primary" />
                  <ul className="py-2">
                    {categories.map((cat) => (
                      <li key={cat.slug}>
                        <Link
                          to={`/products/category/${cat.slug}`}
                          className="block px-5 py-2.5 text-sm text-ink/80 transition-all duration-300 hover:translate-x-1 hover:bg-primary hover:text-secondary dark:text-white/80 rtl:hover:-translate-x-1"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={navClass}>
            {t('contactUs')}
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${companyInfo.phone}`}
            className={`inline-flex items-center gap-2 text-ink/70 transition-all duration-300 hover:text-ink dark:text-white/70 dark:hover:text-primary ${
              scrolled ? 'text-xs' : 'text-sm'
            }`}
          >
            <Phone className="h-4 w-4 text-primary-dark" />
            <span className="tracking-wide">{companyInfo.phoneDisplay}</span>
          </a>
          <button
            type="button"
            onClick={() => openWhatsApp()}
            className={`btn-primary ms-2 ${
              scrolled ? 'px-3 py-2 text-[10px]' : 'px-4 py-2.5 text-xs'
            }`}
          >
            {t('whatsapp')}
          </button>
        </div>

        <button
          type="button"
          className="-me-2 p-2 text-ink transition-colors duration-300 hover:text-primary-dark dark:text-white lg:hidden"
          aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="animate-fade-in border-t border-line bg-page lg:hidden">
          <nav className="container-site space-y-1 py-6" aria-label="Mobile">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-3 py-3 text-sm uppercase tracking-[0.14em] transition-colors ${isActive ? 'text-primary-dark' : 'text-ink/85 dark:text-white/85'}`
              }
            >
              {t('home')}
            </NavLink>

            <div>
              <div className="flex items-center justify-between">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `block px-3 py-3 text-sm uppercase tracking-[0.14em] transition-colors ${isActive ? 'text-primary-dark' : 'text-ink/85 dark:text-white/85'}`
                  }
                >
                  {t('ourProducts')}
                </NavLink>
                <button
                  type="button"
                  className="px-3 py-3 text-ink/70 dark:text-white/70"
                  aria-label={t('categories')}
                  onClick={() => setMobileCats((v) => !v)}
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${mobileCats ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
              {mobileCats && (
                <ul className="animate-dropdown ms-3 space-y-1 border-s border-line pb-2 ps-3">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        to={`/products/category/${cat.slug}`}
                        className="block px-3 py-2.5 text-sm text-ink/65 transition-colors hover:text-ink dark:text-white/65 dark:hover:text-primary"
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-3 text-sm uppercase tracking-[0.14em] transition-colors ${isActive ? 'text-primary-dark' : 'text-ink/85 dark:text-white/85'}`
              }
            >
              {t('contactUs')}
            </NavLink>

            <div className="mt-3 space-y-3 border-t border-line px-3 pt-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 text-sm text-ink/75 dark:text-white/75"
              >
                <Phone className="h-4 w-4 text-primary-dark" />
                {companyInfo.phoneDisplay}
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false)
                  openWhatsApp()
                }}
                className="btn-primary w-full py-3 text-xs"
              >
                {t('whatsapp')}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

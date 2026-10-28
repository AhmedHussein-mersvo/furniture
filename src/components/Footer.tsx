import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { categories, companyInfo } from '../data/products'
import { useWhatsApp } from '../context/WhatsAppContext'
import { useLanguage } from '../context/LanguageContext'
import { getCategoryName } from '../i18n/catalog'
import Logo from './Logo'

export default function Footer() {
  const { open: openWhatsApp } = useWhatsApp()
  const { t, lang } = useLanguage()

  return (
    <footer className="bg-secondary text-white">
      <div className="container-site pt-16 pb-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Logo onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {t('footerBlurb')}
            </p>
            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="btn-accent mt-6 px-4 py-2.5 text-xs"
            >
              {t('chatOnWhatsApp')}
            </button>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
              {t('explore')}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {[
                { to: '/', label: t('home') },
                { to: '/products', label: t('ourProducts') },
                { to: '/about', label: t('aboutUs') },
                { to: '/contact', label: t('contactUs') },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-primary rtl:hover:-translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
              {t('categories')}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/products/category/${cat.slug}`}
                    className="text-sm text-white/65 transition-colors hover:text-primary"
                  >
                    {getCategoryName(cat.slug, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
              {t('contact')}
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-white/65">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex gap-3 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>{companyInfo.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex gap-3 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 sm:block sm:space-y-2.5">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-white/55 transition-colors hover:text-primary"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-white/55 transition-colors hover:text-primary"
                >
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-center text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>{companyInfo.copyright}</p>
          <p>{companyInfo.taxRegistration}</p>
        </div>
      </div>
    </footer>
  )
}

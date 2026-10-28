import { Globe, Moon, Percent, Sun } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

export default function TopBar() {
  const { lang, setLang, t } = useLanguage()
  const { isDark, toggle } = useTheme()

  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-secondary text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,203,8,0.12) 0%, transparent 35%, transparent 65%, rgba(255,203,8,0.08) 100%)',
        }}
      />

      <div className="relative container-site flex h-9 items-center justify-between gap-3 text-[11px] sm:h-10 sm:text-xs">
        <p className="flex min-w-0 items-center gap-2 font-medium tracking-wide text-primary">
          <span className="hidden h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 sm:inline-flex">
            <Percent className="h-3 w-3" aria-hidden />
          </span>
          <span className="truncate">{t('discountBanner')}</span>
        </p>

        <div className="flex shrink-0 items-center gap-2">
          <div
            className="flex items-center overflow-hidden rounded-full border border-white/15 bg-white/5 p-0.5 backdrop-blur-sm"
            role="group"
            aria-label={t('language')}
          >
            <Globe className="ms-1.5 me-0.5 h-3.5 w-3.5 text-primary" aria-hidden />
            {([
              ['en', 'EN'],
              ['ar', 'AR'],
            ] as const).map(([code, label]) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`rounded-full px-2.5 py-1 font-semibold uppercase tracking-[0.12em] transition-all duration-300 ease-out ${
                  lang === code
                    ? 'bg-primary text-secondary shadow-[0_4px_12px_rgba(255,203,8,0.35)]'
                    : 'text-white/65 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? t('lightMode') : t('darkMode')}
            title={isDark ? t('lightMode') : t('darkMode')}
            className="group relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 text-primary transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-secondary hover:shadow-[0_0_0_4px_rgba(255,203,8,0.2)] active:translate-y-0"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            {isDark ? (
              <Sun className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2} />
            ) : (
              <Moon className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-12" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

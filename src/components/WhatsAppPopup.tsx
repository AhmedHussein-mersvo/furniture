import { MessageCircle, Phone, X } from 'lucide-react'
import { companyInfo } from '../data/products'
import { buildWhatsAppUrl, useWhatsApp } from '../context/WhatsAppContext'
import { useLanguage } from '../context/LanguageContext'

function FlagEG({ className = 'w-7 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={className} aria-hidden>
      <rect width="36" height="8" fill="#CE1126" />
      <rect y="8" width="36" height="8" fill="#FFFFFF" />
      <rect y="16" width="36" height="8" fill="#000000" />
      <circle cx="18" cy="12" r="3.2" fill="#C09300" />
    </svg>
  )
}

function FlagAE({ className = 'w-7 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={className} aria-hidden>
      <rect width="36" height="8" fill="#00732F" />
      <rect y="8" width="36" height="8" fill="#FFFFFF" />
      <rect y="16" width="36" height="8" fill="#000000" />
      <rect width="9" height="24" fill="#FF0000" />
    </svg>
  )
}

export default function WhatsAppPopup() {
  const { isOpen, close, message } = useWhatsApp()
  const { t, lang } = useLanguage()

  if (!isOpen) return null

  const labels: Record<string, string> = {
    eg: lang === 'ar' ? 'مصر' : 'Egypt',
    ae: lang === 'ar' ? 'الإمارات' : 'United Arab Emirates',
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-dialog-title"
    >
      <button
        type="button"
        className="absolute inset-0 animate-fade-in bg-black/55 backdrop-blur-sm"
        aria-label={t('closeMenu')}
        onClick={close}
      />

      <div className="animate-popup relative w-full max-w-md overflow-hidden border border-line bg-page shadow-2xl">
        <div className="flex items-start justify-between gap-4 bg-secondary px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
              <MessageCircle className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <h2
                id="whatsapp-dialog-title"
                className="font-display text-lg font-bold tracking-wide text-white"
              >
                {t('chatOnWhatsApp')}
              </h2>
              <p className="mt-0.5 text-sm text-white/65">
                {t('chooseNumber')}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            className="p-1 text-white/70 transition-colors hover:text-white"
            aria-label={t('closeMenu')}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-3 p-5">
          {companyInfo.whatsapp.map((contact) => (
            <a
              key={contact.id}
              href={buildWhatsAppUrl(contact.number, message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="group flex items-center gap-4 border border-line bg-surface px-4 py-4 transition-all duration-300 hover:border-primary hover:bg-primary/10"
            >
              <span className="shrink-0 overflow-hidden rounded-sm border border-line shadow-sm">
                {contact.id === 'eg' ? <FlagEG /> : <FlagAE />}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display font-semibold text-ink">
                  {labels[contact.id] ?? contact.label}
                </span>
                <span className="mt-0.5 block text-sm tracking-wide text-muted">
                  {contact.display}
                </span>
              </span>
              <span className="shrink-0 rounded-full bg-[#25D366]/15 p-2 text-[#128C7E] transition-transform group-hover:scale-110">
                <MessageCircle className="h-4 w-4" />
              </span>
            </a>
          ))}

          <a
            href={`tel:${companyInfo.phone}`}
            onClick={close}
            className="group flex items-center gap-4 border border-line bg-surface px-4 py-4 transition-all duration-300 hover:border-secondary hover:bg-secondary/5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
              <Phone className="h-4 w-4" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display font-semibold text-ink">
                {t('callUs')}
              </span>
              <span className="mt-0.5 block text-sm tracking-wide text-muted">
                {companyInfo.phoneDisplay}
              </span>
            </span>
          </a>
        </div>

        <div className="px-5 pb-5">
          <p className="text-center text-xs leading-relaxed text-muted">
            {t('whatsappReplyHint')}
          </p>
        </div>
      </div>
    </div>
  )
}

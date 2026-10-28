import { MessageCircle, Phone, X } from 'lucide-react'
import { companyInfo } from '../data/products'
import { buildWhatsAppUrl, useWhatsApp } from '../context/WhatsAppContext'

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

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-dialog-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        aria-label="Close WhatsApp dialog"
        onClick={close}
      />

      <div className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden animate-popup">
        <div className="bg-secondary px-6 py-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
              <MessageCircle className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <h2
                id="whatsapp-dialog-title"
                className="font-display text-lg font-bold text-white tracking-wide"
              >
                Chat on WhatsApp
              </h2>
              <p className="text-sm text-white/65 mt-0.5">
                Choose your preferred number
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 space-y-3">
          {companyInfo.whatsapp.map((contact) => (
            <a
              key={contact.id}
              href={buildWhatsAppUrl(contact.number, message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="group flex items-center gap-4 border border-black/8 px-4 py-4 transition-all duration-300 hover:border-primary hover:bg-primary/8"
            >
              <span className="shrink-0 overflow-hidden rounded-sm border border-black/10 shadow-sm">
                {contact.id === 'eg' ? <FlagEG /> : <FlagAE />}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-display font-semibold text-ink">
                  {contact.label}
                </span>
                <span className="block text-sm text-muted mt-0.5 tracking-wide">
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
            className="group flex items-center gap-4 border border-black/8 px-4 py-4 transition-all duration-300 hover:border-secondary hover:bg-black/[0.03]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary">
              <Phone className="h-4 w-4" />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-display font-semibold text-ink">Call Us</span>
              <span className="block text-sm text-muted mt-0.5 tracking-wide">
                {companyInfo.phoneDisplay}
              </span>
            </span>
          </a>
        </div>

        <div className="px-5 pb-5">
          <p className="text-xs text-muted text-center leading-relaxed">
            Our team typically replies within minutes during business hours.
          </p>
        </div>
      </div>
    </div>
  )
}

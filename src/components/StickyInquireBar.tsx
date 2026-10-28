import { MessageCircle, Phone } from 'lucide-react'
import { companyInfo } from '../data/products'
import { useLanguage } from '../context/LanguageContext'

interface StickyInquireBarProps {
  productName: string
  onWhatsApp: () => void
}

export default function StickyInquireBar({
  productName,
  onWhatsApp,
}: StickyInquireBarProps) {
  const { t } = useLanguage()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-page/95 backdrop-blur-md lg:hidden">
      <div className="container-site flex items-center gap-3 py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink">{productName}</p>
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
            {t('inquireAboutPiece')}
          </p>
        </div>
        <a
          href={`tel:${companyInfo.phone}`}
          className="inline-flex h-11 w-11 items-center justify-center bg-secondary text-primary"
          aria-label={t('callUs')}
        >
          <Phone className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={onWhatsApp}
          className="inline-flex items-center gap-2 bg-[#25D366] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" />
          {t('whatsapp')}
        </button>
      </div>
    </div>
  )
}

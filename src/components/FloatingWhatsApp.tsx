import { MessageCircle } from 'lucide-react'
import { useWhatsApp } from '../context/WhatsAppContext'

export default function FloatingWhatsApp() {
  const { open, isOpen } = useWhatsApp()

  if (isOpen) return null

  return (
    <button
      type="button"
      onClick={() => open()}
      aria-label="Open WhatsApp chat"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 animate-float-pulse"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} fill="currentColor" />
    </button>
  )
}

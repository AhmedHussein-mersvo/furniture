import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export interface WhatsAppOpenOptions {
  /** Pre-filled WhatsApp message (e.g. product inquiry + link) */
  message?: string
}

interface WhatsAppContextValue {
  isOpen: boolean
  message: string
  open: (options?: WhatsAppOpenOptions) => void
  close: () => void
  toggle: () => void
}

const DEFAULT_MESSAGE =
  'Hello Visual Furniture, I would like to inquire about your products.'

const WhatsAppContext = createContext<WhatsAppContextValue | null>(null)

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState(DEFAULT_MESSAGE)

  const open = useCallback((options?: WhatsAppOpenOptions) => {
    const msg =
      options && typeof options === 'object' && 'message' in options
        ? options.message?.trim()
        : undefined
    setMessage(msg || DEFAULT_MESSAGE)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggle = useCallback(() => {
    setIsOpen((v) => {
      if (!v) setMessage(DEFAULT_MESSAGE)
      return !v
    })
  }, [])

  const value = useMemo(
    () => ({ isOpen, message, open, close, toggle }),
    [isOpen, message, open, close, toggle],
  )

  return (
    <WhatsAppContext.Provider value={value}>{children}</WhatsAppContext.Provider>
  )
}

export function useWhatsApp() {
  const ctx = useContext(WhatsAppContext)
  if (!ctx) throw new Error('useWhatsApp must be used within WhatsAppProvider')
  return ctx
}

export function buildProductWhatsAppMessage(productName: string, url: string) {
  return `Hello Visual Furniture, I'm interested in "${productName}".\n\nProduct link: ${url}`
}

export function buildWhatsAppUrl(phone: string, message: string) {
  const digits = phone.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import WhatsAppPopup from './WhatsAppPopup'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-[108px] sm:pt-[112px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <WhatsAppPopup />
    </div>
  )
}

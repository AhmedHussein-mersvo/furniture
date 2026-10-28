import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { WhatsAppProvider } from './context/WhatsAppContext'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Category from './pages/Category'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <WhatsAppProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="products/category/:slug" element={<Category />} />
                <Route path="products/:slug" element={<ProductDetail />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="terms" element={<Terms />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </WhatsAppProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

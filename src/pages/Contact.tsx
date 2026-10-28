import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { companyInfo } from '../data/products'
import { useWhatsApp } from '../context/WhatsAppContext'

const MAP_LINK = 'https://maps.app.goo.gl/XtF7PDR1tKgGWtk29'
const MAP_EMBED =
  'https://www.google.com/maps?q=29.8418545,31.3407318&hl=en&z=17&output=embed'
const MAP_ADDRESS =
  'Youssef Youssef, Helwan Sharkeya, Helwan, Cairo Governorate'

export default function Contact() {
  const { open: openWhatsApp } = useWhatsApp()

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="Reach our team by phone or WhatsApp, or visit us at our Helwan location."
      />

      <section className="py-14 sm:py-16">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">
                Let&apos;s talk about your space
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Whether you&apos;re furnishing a villa, office, or showroom -
                we&apos;re ready to help you choose the right pieces.
              </p>
            </div>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-secondary text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Phone
                  </p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="mt-1 block font-medium text-ink transition-colors hover:text-primary-dark"
                  >
                    {companyInfo.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-secondary text-primary">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    WhatsApp
                  </p>
                  <button
                    type="button"
                    onClick={() => openWhatsApp()}
                    className="mt-1 block text-left font-medium text-ink transition-colors hover:text-primary-dark"
                  >
                    Egypt & UAE numbers
                  </button>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-secondary text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="mt-1 block font-medium text-ink transition-colors hover:text-primary-dark"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-secondary text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Location
                  </p>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-medium text-ink transition-colors hover:text-primary-dark"
                  >
                    {MAP_ADDRESS}
                  </a>
                </div>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                Open WhatsApp
              </button>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-black/15 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-secondary hover:bg-secondary hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                Open in Maps
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={2}
            className="flex flex-col overflow-hidden border border-black/8 bg-white"
          >
            <div className="flex items-center justify-between gap-3 border-b border-black/8 px-5 py-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Find us
                </h3>
                <p className="mt-0.5 text-sm text-muted">Helwan, Cairo</p>
              </div>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary-dark transition-colors hover:text-ink"
              >
                Directions
              </a>
            </div>
            <div className="relative min-h-[360px] flex-1 bg-surface sm:min-h-[440px]">
              <iframe
                title="Visual Furniture location on Google Maps"
                src={MAP_EMBED}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

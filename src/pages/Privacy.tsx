import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { companyInfo } from '../data/products'

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Visual Furniture collects, uses, and protects your information."
      />

      <section className="py-14 sm:py-16">
        <div className="prose-custom mx-auto max-w-3xl space-y-8 px-4 sm:px-6 lg:px-8">
          <Block title="1. Introduction">
            Visual Furniture (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            respects your privacy. This policy explains what information we may
            collect when you use our website or contact us, and how we use it.
          </Block>
          <Block title="2. Information we collect">
            We may collect information you provide voluntarily  -  such as your
            name, email address, phone number, and message content  -  when you
            submit our contact form, call us, or message us on WhatsApp.
          </Block>
          <Block title="3. How we use your information">
            We use your information to respond to inquiries, provide product
            information, improve our services, and communicate about orders or
            requests. We do not sell your personal data to third parties.
          </Block>
          <Block title="4. WhatsApp & phone communications">
            When you contact us via WhatsApp ({companyInfo.whatsapp.map((w) => w.display).join(' / ')}) or phone (
            {companyInfo.phoneDisplay}), your messages and call details are used
            solely to assist you and may be retained as part of our customer
            service records.
          </Block>
          <Block title="5. Cookies & analytics">
            Our website may use essential cookies and basic analytics to
            understand how pages are used. You can control cookies through your
            browser settings.
          </Block>
          <Block title="6. Data security">
            We take reasonable administrative and technical measures to protect
            personal information. No method of transmission over the internet is
            completely secure, and we cannot guarantee absolute security.
          </Block>
          <Block title="7. Your rights">
            You may request access to, correction of, or deletion of personal
            information we hold about you by contacting us at{' '}
            {companyInfo.email}.
          </Block>
          <Block title="8. Updates">
            We may update this Privacy Policy from time to time. The latest
            version will always be available on this page.
          </Block>
          <Block title="9. Contact">
            For privacy-related questions, email {companyInfo.email} or call{' '}
            {companyInfo.phoneDisplay}.
          </Block>
        </div>
      </section>
    </>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        {children}
      </p>
    </Reveal>
  )
}

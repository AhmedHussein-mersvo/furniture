import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { companyInfo } from '../data/products'

export default function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using the Visual Furniture website."
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6 lg:px-8">
          <Block title="1. Acceptance of terms">
            By accessing or using the Visual Furniture website, you agree to
            these Terms & Conditions. If you do not agree, please do not use the
            site.
          </Block>
          <Block title="2. Product information">
            Product images, descriptions, and specifications on this website are
            for general information. Colors, finishes, and dimensions may vary
            slightly. Final details are confirmed at the time of order or
            quotation.
          </Block>
          <Block title="3. Pricing & quotations">
            Prices are not displayed on this website. All pricing is provided
            upon inquiry via WhatsApp, phone, or email. Quotations are valid for
            the period stated in the quote unless otherwise agreed.
          </Block>
          <Block title="4. Orders & availability">
            Product availability may change. Placing an inquiry does not
            constitute a confirmed order until accepted by Visual Furniture in
            writing or via official communication channels.
          </Block>
          <Block title="5. Intellectual property">
            All content on this website  -  including logos, text, images, and
            design  -  is owned by or licensed to Visual Furniture and may not be
            copied or reused without prior written permission.
          </Block>
          <Block title="6. Limitation of liability">
            To the fullest extent permitted by law, Visual Furniture is not
            liable for any indirect or consequential loss arising from use of
            this website or reliance on its content.
          </Block>
          <Block title="7. Governing law">
            These terms are governed by the applicable laws of the Arab Republic
            of Egypt and, where relevant, the United Arab Emirates, without
            regard to conflict of law principles.
          </Block>
          <Block title="8. Contact">
            Questions about these terms: {companyInfo.email} ·{' '}
            {companyInfo.phoneDisplay} · Tax registration:{' '}
            {companyInfo.taxRegistration}
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

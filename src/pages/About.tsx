import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About Visual Furniture"
        subtitle="We design and curate furniture that gives every room a clear point of view."
      />

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80"
                alt="Visual Furniture showroom atmosphere"
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={1}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Who we are
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
                Furniture with a point of view
              </h2>
              <div className="mt-4 h-1 w-14 bg-primary" />
              <div className="mt-6 space-y-4 leading-relaxed text-muted">
                <p>
                  Visual Furniture was founded on a simple belief: a well-made
                  piece should elevate how a space feels - not just fill it.
                  From bedroom suites to salon seating, every collection is
                  chosen for proportion, material integrity, and everyday comfort.
                </p>
                <p>
                  With a presence across Egypt and the United Arab Emirates, we
                  work closely with homeowners, designers, and project clients
                  who want furniture that looks considered and lasts.
                </p>
                <p>
                  Whether you browse our catalog or reach us on WhatsApp, our
                  team is here to help you find pieces that fit your room, your
                  lifestyle, and your aesthetic.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container-site">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              What guides us
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: 'Quality first',
                text: 'Solid construction, thoughtful finishes, and materials selected to age gracefully.',
              },
              {
                title: 'Clear design',
                text: 'Clean silhouettes and balanced proportions that photograph as well as they live.',
              },
              {
                title: 'Client focus',
                text: 'Dedicated support in Egypt and UAE - from first inquiry to final delivery.',
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                delay={Math.min(i + 1, 5) as 0 | 1 | 2 | 3 | 4 | 5}
              >
                <div className="h-full border-t-2 border-primary bg-white p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div className="mt-14 text-center">
              <Link
                to="/products"
                className="inline-flex bg-secondary px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-opacity hover:opacity-90"
              >
                Explore our products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

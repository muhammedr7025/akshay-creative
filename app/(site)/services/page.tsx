import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionDivider from '@/components/shared/SectionDivider'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import EyebrowLabel from '@/components/shared/EyebrowLabel'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'
import { getAllServices } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional photography services — portrait, fashion, boudoir, concept shoots, and creative films. Book your vision with Akshay Creative.',
}

const equipment = [
  'Sony A7R V Full Frame',
  'Profoto B10 & B10 Plus Lights',
  'Sigma Art Prime Lenses',
  'Sony 70-200mm f/2.8 GM II',
  'Seamless Paper Backdrops',
  'V-Flat & Reflector Kit',
  'Fog Machine & Gels',
]

const studioSpecs = [
  '1200 sq ft open studio',
  '3 distinct shooting sets',
  'Climate controlled environment',
  'Private changing rooms',
  'On-site parking available',
  'High-speed WiFi',
  'Refreshments provided',
]

export default async function ServicesPage() {
  const services = await getAllServices()

  return (
    <>
      <PageHero
        eyebrow="STUDIO SERVICES"
        title="Book Your Vision"
        subtitle="From intimate portraits to large-scale productions — we bring your creative vision to life."
      />

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-void">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service._id} delay={i * 0.15}>
              <div className="bg-void-surface border border-void-border rounded-[4px] overflow-hidden hover:border-blaze/50 transition-all duration-300 hover:shadow-blaze group">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={typeof service.image === 'string' ? service.image : 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800'}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-surface via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="font-label text-[10px] uppercase tracking-[0.15em] text-blaze mb-2 block">
                    Studio Service
                  </span>
                  <h3 className="font-display text-[28px] font-semibold text-text-primary mb-2">
                    {service.name}
                  </h3>
                  <p className="text-text-muted text-sm mb-4">
                    {service.tagline}
                  </p>

                  {/* Price & Duration */}
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-blaze font-display text-2xl font-bold">
                      From {service.priceFrom}
                    </span>
                    <span className="font-label text-[10px] uppercase tracking-wider text-text-muted border border-void-border px-2 py-1">
                      {service.duration}
                    </span>
                  </div>

                  {/* What's included */}
                  <div className="border-l-2 border-blaze/30 pl-4 mb-6 space-y-2">
                    {service.includes.map((item, idx) => (
                      <p key={idx} className="text-text-primary/80 text-sm">
                        {item}
                      </p>
                    ))}
                  </div>

                  <WhatsAppButton
                    message={service.whatsappMessage || WHATSAPP_MESSAGES.bookShoot}
                    label="Book This Shoot →"
                    variant="primary"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Studio Info */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-void-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <EyebrowLabel text="THE STUDIO" className="mb-6" />
            <h2 className="font-display text-[36px] md:text-[56px] font-bold text-text-primary mb-12">
              Our Setup
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection delay={0.15}>
              <h3 className="font-display text-xl font-semibold text-text-primary mb-6">
                Equipment
              </h3>
              <ul className="space-y-3">
                {equipment.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blaze rounded-full flex-shrink-0" />
                    <span className="text-text-primary/80 text-sm font-label tracking-wide">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3 className="font-display text-xl font-semibold text-text-primary mb-6">
                Studio Specs
              </h3>
              <ul className="space-y-3">
                {studioSpecs.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blaze rounded-full flex-shrink-0" />
                    <span className="text-text-primary/80 text-sm font-label tracking-wide">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Bottom CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-void text-center">
        <AnimatedSection>
          <h2 className="font-display text-[28px] md:text-[40px] font-bold italic text-text-primary mb-6">
            Not sure which package? Let&apos;s talk.
          </h2>
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.general}
            label="Chat on WhatsApp"
            variant="primary"
          />
        </AnimatedSection>
      </section>
    </>
  )
}

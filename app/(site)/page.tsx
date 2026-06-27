import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ServicesStrip from '@/components/home/ServicesStrip'
import CommunityTeaser from '@/components/home/CommunityTeaser'
import OpportunitiesTeaser from '@/components/home/OpportunitiesTeaser'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionDivider from '@/components/shared/SectionDivider'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'
import { getSiteSettings, getAllServices, getAllOpportunities } from '@/lib/queries'

export const metadata: Metadata = {
  title: "Akshay's Creative Platform | Create. Collaborate. Inspire.",
  description: 'Photography, fashion, and creative community platform. Book shoots, join as a model, photographer, videographer, or editor. Find paid creative opportunities.',
}

export default async function HomePage() {
  const [settings, services, opportunities] = await Promise.all([
    getSiteSettings(),
    getAllServices(),
    getAllOpportunities(),
  ])

  return (
    <>
      {/* Hero */}
      <HeroSection
        headline={settings.heroHeadline}
        subtext={settings.heroSubtext}
      />

      <SectionDivider />

      {/* Services Strip */}
      <ServicesStrip services={services} />

      <SectionDivider />

      {/* Manifesto */}
      <section className="py-24 md:py-32 bg-blaze">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
          <AnimatedSection>
            <p className="font-display text-2xl md:text-4xl lg:text-5xl font-bold italic text-void text-center leading-tight">
              &ldquo;More than a photography studio — a creative community where ideas become collaborations, collaborations become opportunities, and opportunities become lasting careers.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider />

      {/* Community Teaser */}
      <CommunityTeaser />

      <SectionDivider />

      {/* Opportunities Teaser */}
      <OpportunitiesTeaser opportunities={opportunities} />

      <SectionDivider />

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-void relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-blaze/30" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-blaze/30" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <AnimatedSection>
            <h2 className="font-display text-[36px] md:text-[56px] font-bold italic text-text-primary mb-8">
              Ready to create something iconic?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.bookShoot}
                label="Book a Shoot"
                variant="primary"
              />
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.joinCommunity}
                label="Join the Platform"
                variant="secondary"
                showIcon={false}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ServicesStrip from '@/components/home/ServicesStrip'
import HowItWorks from '@/components/home/HowItWorks'
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

      <HowItWorks />

      <SectionDivider />

      {/* Manifesto */}
      <section className="py-32 md:py-48 bg-blaze relative overflow-hidden flex items-center justify-center">
        {/* Premium Background Marquee (Subtle) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200vw] flex flex-col gap-4 opacity-5 pointer-events-none -rotate-3 select-none">
          <div className="flex gap-4 whitespace-nowrap animate-marquee-slow font-display text-[150px] font-black uppercase italic leading-none">
            CREATE COLLABORATE INSPIRE CREATE COLLABORATE INSPIRE CREATE COLLABORATE INSPIRE
          </div>
          <div className="flex gap-4 whitespace-nowrap animate-marquee-slow-reverse font-display text-[150px] font-black uppercase italic leading-none">
            AKSHAY CREATIVE PLATFORM AKSHAY CREATIVE PLATFORM AKSHAY CREATIVE PLATFORM
          </div>
        </div>

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-block px-4 py-1 border border-void/20 rounded-full mb-12">
              <span className="font-sans text-[11px] font-bold text-void uppercase tracking-[0.2em]">
                THE MANIFESTO
              </span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium text-void text-center leading-[1.05] tracking-tight">
              &ldquo;More than a photography studio — a <span className="font-bold font-display italic">creative community</span> where ideas become collaborations, and opportunities become <span className="font-bold font-display italic">lasting careers.</span>&rdquo;
            </h2>
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

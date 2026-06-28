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

      {/* Final CTA / Footer Teaser */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-t border-void-border">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=2000" 
            alt="Creative Fashion" 
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          />
          {/* Gradients for depth and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
          <div className="absolute inset-0 bg-blaze/5 mix-blend-overlay" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center flex flex-col items-center">
          <AnimatedSection>
            <span className="block font-sans text-[11px] font-bold text-blaze uppercase tracking-[0.3em] mb-8">
              Your next big project starts here
            </span>
            
            <h2 className="flex flex-col items-center justify-center mb-16">
              <span className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold text-blaze tracking-tight leading-none mb-2">
                READY TO CREATE
              </span>
              <span className="font-display text-6xl md:text-8xl lg:text-[140px] font-bold text-gold tracking-tighter leading-none drop-shadow-2xl">
                SOMETHING ICONIC?
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.bookShoot}
                label="Book a Shoot"
                variant="primary"
                className="!px-10 !py-4 !text-sm"
              />
              <span className="font-display text-text-primary/40 font-bold">OR</span>
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.joinCommunity}
                label="Join the Platform"
                variant="secondary"
                showIcon={false}
                className="!px-10 !py-4 !text-sm border-void-border/80 hover:border-gold hover:text-gold"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

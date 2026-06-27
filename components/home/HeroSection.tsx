'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import EyebrowLabel from '@/components/shared/EyebrowLabel'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'

interface HeroSectionProps {
  headline?: string
  subtext?: string
}

export default function HeroSection({ headline, subtext }: HeroSectionProps) {
  const lines = (headline || 'Create.\nCollaborate.\nInspire.').split('\n')

  return (
    <section className="relative min-h-screen flex items-center bg-void overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,0,47,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,47,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center relative z-10 pt-24 lg:pt-0">
        {/* Left — Text content (60%) */}
        <div className="lg:col-span-3 order-2 lg:order-1 pb-24 lg:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <EyebrowLabel text="AKSHAY'S CREATIVE PLATFORM" className="mb-8" />
          </motion.div>

          <div className="mb-8">
            {lines.map((line, i) => (
              <motion.h1
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display text-[42px] sm:text-[52px] md:text-[72px] lg:text-[96px] font-bold italic leading-[1] lg:leading-[0.95] text-text-primary"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-text-muted text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            {subtext || 'A creative platform where photographers, models, videographers, and editors come together to create iconic visual stories.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.bookShoot}
              label="Book a Shoot →"
              variant="primary"
            />
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.joinCommunity}
              label="Join the Community"
              variant="secondary"
              showIcon={false}
            />
          </motion.div>
        </div>

        {/* Right — Hero image (40%) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 relative order-1 lg:order-2 mt-8 lg:mt-0 max-w-[300px] sm:max-w-[400px] lg:max-w-none w-full mx-auto"
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
              alt="Creative portrait with dramatic lighting"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Red tinted overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
            <div className="absolute inset-0 bg-blaze/10 mix-blend-multiply" />
          </div>
          {/* Decorative border */}
          <div className="absolute -top-3 -right-3 w-full h-full border border-blaze/20" />
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 lg:left-24 flex items-center gap-4"
      >
        <span className="w-12 h-[1px] bg-blaze" />
        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-text-muted">
          Scroll to Explore
        </span>
      </motion.div>
    </section>
  )
}

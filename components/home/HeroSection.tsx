'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import EyebrowLabel from '@/components/shared/EyebrowLabel'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'
import { Calendar, UserPlus } from 'lucide-react'
interface HeroSectionProps {
  headline?: string
  subtext?: string
}

export default function HeroSection({ headline, subtext }: HeroSectionProps) {
  const lines = (headline || 'CREATE.\nCOLLABORATE.\nINSPIRE.').split('\n')

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-void overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000"
          alt="Creative photographer"
          fill
          className="object-cover object-top opacity-60 md:opacity-80"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays to fade into black */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/70 to-transparent w-full md:w-2/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10 pt-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <EyebrowLabel text="AKSHAY'S CREATIVE PLATFORM" className="mb-8" />
          </motion.div>

          <div className="mb-6">
            {lines.map((line, i) => (
              <motion.h1
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`font-display text-[48px] sm:text-[64px] md:text-[80px] font-bold italic leading-[1] ${
                  i === 2 ? 'text-blaze' : 'text-text-primary'
                }`}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-text-primary/90 text-sm md:text-base max-w-md leading-relaxed mb-8"
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
              label="Book a Shoot"
              variant="primary"
              icon={<Calendar className="w-4 h-4 mr-2" />}
              className="bg-blaze text-void hover:bg-blaze/90 font-medium border-none !py-3"
            />
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.joinCommunity}
              label="Join the Community"
              variant="secondary"
              icon={<UserPlus className="w-4 h-4 mr-2" />}
              className="border-blaze text-text-primary hover:bg-blaze/10 !py-3"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

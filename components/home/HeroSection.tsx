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
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-void px-4 md:px-8 lg:px-12 py-24 md:py-32 overflow-hidden">
      {/* Subtle Background pattern on the body itself to give texture outside the card */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="w-full max-w-[1400px] mx-auto relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-void-border/50 flex flex-col md:flex-row min-h-[600px] md:min-h-[700px] shadow-2xl">
        
        {/* Right Side / Background Image */}
        <div className="absolute inset-0 md:inset-y-0 md:left-[30%] md:right-0 w-full md:w-[70%] h-full z-10">
          <Image
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000"
            alt="Creative photographer"
            fill
            className="object-cover object-center md:object-top opacity-50 md:opacity-80 mix-blend-luminosity"
            priority
            sizes="(max-width: 768px) 100vw, 70vw"
          />
          {/* Gradient overlays to blend into black card background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent md:hidden" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        </div>

        {/* Left Side / Content */}
        <div className="w-full md:w-[60%] lg:w-[50%] p-8 md:p-16 lg:p-24 relative z-20 flex flex-col justify-center bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent md:bg-none mt-auto md:mt-0">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <EyebrowLabel text="AKSHAY'S CREATIVE PLATFORM" className="mb-6" />
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
                className={`font-sans text-[42px] sm:text-[56px] md:text-[64px] lg:text-[76px] font-medium leading-[1.05] tracking-tight ${
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
            className="text-text-primary/80 text-sm md:text-base max-w-[420px] leading-relaxed mb-10 font-sans"
          >
            {subtext || 'A creative platform where photographers, models, videographers, and editors come together to create iconic visual stories.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.bookShoot}
              label="Book a Shoot"
              variant="primary"
              icon={<Calendar className="w-[18px] h-[18px] mr-2" />}
              className="justify-center rounded-lg bg-blaze text-void hover:bg-blaze/90 border-none font-medium text-xs tracking-wider !py-4 w-full sm:w-auto px-8"
            />
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.joinCommunity}
              label="Join the Community"
              variant="secondary"
              icon={<UserPlus className="w-[18px] h-[18px] mr-2" />}
              className="justify-center rounded-lg border-void-border/80 text-text-primary hover:bg-white/5 font-medium text-xs tracking-wider !py-4 w-full sm:w-auto px-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

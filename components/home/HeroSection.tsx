'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import EyebrowLabel from '@/components/shared/EyebrowLabel'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'
import { Calendar, UserPlus, Sparkles } from 'lucide-react'

interface HeroSectionProps {
  headline?: string
  subtext?: string
}

export default function HeroSection({ headline, subtext }: HeroSectionProps) {
  const lines = (headline || 'CREATE.\nCOLLABORATE.\nINSPIRE.').split('\n')
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Subtle parallax effect on the image
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] md:min-h-screen flex items-center bg-void px-4 md:px-8 lg:px-12 py-24 md:py-32 overflow-hidden perspective-1000">
      {/* Dynamic Background pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} 
      />

      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1400px] mx-auto relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-void-border/50 flex flex-col md:flex-row min-h-[600px] md:min-h-[750px] shadow-[0_0_100px_rgba(255,0,47,0.05)] group"
      >
        
        {/* Right Side / Background Image */}
        <div className="absolute inset-0 md:inset-y-0 md:left-[30%] md:right-0 w-full md:w-[70%] h-full z-10 overflow-hidden">
          <motion.div style={{ y: imageY }} className="w-full h-[120%] -top-[10%] relative">
            <Image
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2a4507?q=80&w=2000"
              alt="Creative fashion portrait"
              fill
              className="object-cover object-center opacity-60 md:opacity-80 mix-blend-luminosity group-hover:scale-105 transition-transform duration-[20s] ease-out"
              priority
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </motion.div>
          {/* Enhanced Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent md:hidden" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent w-full md:w-[60%]" />
        </div>

        {/* Left Side / Content */}
        <div className="w-full md:w-[65%] lg:w-[55%] p-8 md:p-16 lg:p-24 relative z-20 flex flex-col justify-center bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent md:bg-none mt-auto md:mt-0">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blaze" />
            <EyebrowLabel text="AKSHAY'S CREATIVE PLATFORM" className="mb-0" />
          </motion.div>

          <div className="mb-8 relative">
            {lines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.4 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`font-sans text-[44px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-bold leading-[1.05] tracking-tight ${
                    i === 2 ? 'text-blaze' : 'text-text-primary'
                  }`}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-primary/70 text-sm md:text-lg max-w-[460px] leading-relaxed mb-12 font-sans font-light"
          >
            {subtext || 'A creative platform where photographers, models, videographers, and editors come together to create iconic visual stories.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.bookShoot}
                label="Book a Shoot"
                variant="primary"
                icon={<Calendar className="w-[18px] h-[18px] mr-2" />}
                className="justify-center rounded-xl bg-blaze text-void hover:bg-blaze shadow-[0_0_20px_rgba(255,0,47,0.3)] hover:shadow-[0_0_30px_rgba(255,0,47,0.5)] border-none font-bold text-xs tracking-wider !py-4 w-full px-8 transition-all duration-300"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.joinCommunity}
                label="Join the Community"
                variant="secondary"
                icon={<UserPlus className="w-[18px] h-[18px] mr-2" />}
                className="justify-center rounded-xl border border-void-border/80 bg-void/30 backdrop-blur-md text-text-primary hover:bg-void-border/50 font-bold text-xs tracking-wider !py-4 w-full px-8 transition-all duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

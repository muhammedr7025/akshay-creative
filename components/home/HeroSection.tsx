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
    <section className="relative min-h-[95vh] w-full flex flex-col lg:flex-row bg-void overflow-hidden">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 min-h-[60vh] lg:min-h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 relative z-20 pt-32 lg:pt-0">
        
        {/* Subtle Background Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-gold/30 rounded-full bg-gold/5">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-sans text-[10px] font-light text-gold uppercase tracking-[0.3em]">
              AKSHAY'S CREATIVE PLATFORM
            </span>
          </div>
        </motion.div>

        <div className="mb-10 relative z-10">
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden mb-2">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`font-sans uppercase text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[88px] font-light leading-[1.1] tracking-widest ${
                  i === 0 ? 'text-white' : i === 1 ? 'text-gold' : 'text-blaze'
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
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-primary/60 uppercase tracking-[0.2em] text-xs md:text-sm max-w-[480px] leading-relaxed mb-12 font-sans font-light relative z-10"
        >
          {subtext || 'A creative platform where photographers, models, videographers, and editors come together to create iconic visual stories.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto relative z-10"
        >
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.bookShoot}
            label="BOOK A SHOOT"
            variant="primary"
            icon={<Calendar className="w-4 h-4 mr-2" />}
            className="justify-center rounded-none bg-blaze text-white hover:bg-blaze/90 border-none font-light uppercase tracking-[0.2em] text-[11px] !py-5 px-8 transition-all duration-300"
          />
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.joinCommunity}
            label="JOIN THE PLATFORM"
            variant="secondary"
            icon={<UserPlus className="w-4 h-4 mr-2" />}
            className="justify-center rounded-none border border-gold/40 bg-transparent text-gold hover:bg-gold/10 font-light uppercase tracking-[0.2em] text-[11px] !py-5 px-8 transition-all duration-300"
          />
        </motion.div>
      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden mt-12 lg:mt-0 bg-[#0A0A0A]">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Using a highly editorial, striking fashion image */}
          <Image
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2000"
            alt="Editorial fashion photography"
            fill
            className="object-cover object-[center_30%] mix-blend-luminosity opacity-80"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
        
        {/* Gradients to seamlessly blend the image edge on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-transparent hidden lg:block opacity-60 w-32" />
        
        {/* Artistic Overlay Elements */}
        <div className="absolute bottom-12 right-12 text-white/10 font-sans font-black text-9xl leading-none hidden xl:block select-none pointer-events-none">
          AC
        </div>
      </div>
    </section>
  )
}

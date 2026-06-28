'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { whatsappLink } from '@/lib/whatsapp'
import type { Service } from '@/types'
import { User, Camera, Heart, Lightbulb, Video, ArrowRight } from 'lucide-react'

interface ServicesStripProps {
  services: Service[]
}

const icons = [User, Camera, Heart, Lightbulb, Video]
// Premium specific images for categories
const categoryImages = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800", // Portraits
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800", // Fashion
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800", // Boudoir
  "https://images.unsplash.com/photo-1551042735-ee7d833c84fb?q=80&w=800", // Concept
  "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800"  // Video
]

export default function ServicesStrip({ services }: ServicesStripProps) {
  return (
    <section className="py-24 bg-void relative overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
        <AnimatedSection>
          <h2 className="font-sans text-[11px] font-semibold text-blaze uppercase tracking-[0.2em] mb-12">
            CREATIVE SERVICES
          </h2>
        </AnimatedSection>
        
        {/* Desktop: 5-column grid */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service._id} delay={i * 0.15}>
              <ServiceCard service={service} index={i} />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto no-scrollbar pb-8 snap-x">
          {services.map((service, i) => (
            <AnimatedSection key={service._id} delay={i * 0.1} className="min-w-[220px] flex-shrink-0 snap-start">
              <ServiceCard service={service} index={i} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: Service, index: number }) {
  const message = service.whatsappMessage || `Hi Akshay! I'm interested in ${service.name}.`
  const Icon = icons[index % icons.length]
  const imageSrc = categoryImages[index % categoryImages.length]

  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -10 }}
      className="relative block rounded-2xl overflow-hidden aspect-[3/4] group border border-void-border/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(255,0,47,0.15)] transition-all duration-500"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={service.name}
          fill
          className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 ease-[0.16,1,0.3,1] mix-blend-luminosity group-hover:mix-blend-normal"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent group-hover:from-void/90 transition-all duration-500" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-500">
        <div className="w-10 h-10 rounded-full bg-void/50 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4 group-hover:bg-blaze group-hover:border-blaze transition-colors duration-500">
          <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
        </div>
        <h3 className="font-sans text-[14px] font-bold text-text-primary uppercase tracking-[0.15em] mb-2 group-hover:text-blaze transition-colors">
          {service.name}
        </h3>
        <p className="text-text-primary/70 text-[11px] leading-relaxed mb-4 line-clamp-2 group-hover:text-text-primary/90 transition-colors">
          {service.tagline}
        </p>
        
        <div className="flex items-center gap-2 text-blaze font-sans text-[10px] font-bold tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
          <span>Book Now</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </motion.a>
  )
}

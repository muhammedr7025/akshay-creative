'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { whatsappLink } from '@/lib/whatsapp'
import type { Service } from '@/types'
import { User, Camera, Heart, Lightbulb, Video } from 'lucide-react'

interface ServicesStripProps {
  services: Service[]
}

const icons = [User, Camera, Heart, Lightbulb, Video]

export default function ServicesStrip({ services }: ServicesStripProps) {
  return (
    <section className="py-12 bg-void">
      <div className="w-full px-6 md:px-12 lg:px-24">
        {/* Desktop: 5-column grid | Mobile: horizontal scroll */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <AnimatedSection key={service._id} delay={i * 0.15}>
              <ServiceCard service={service} index={i} />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
          {services.map((service, i) => (
            <AnimatedSection key={service._id} delay={i * 0.1} className="min-w-[140px] flex-shrink-0 snap-start">
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
  const imageSrc = typeof service.image === 'string' ? service.image : 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400'

  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      className="relative block rounded-xl overflow-hidden aspect-[3/4] group border border-void-border"
    >
      <Image
        src={imageSrc}
        alt={service.name}
        fill
        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
      
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <Icon className="w-5 h-5 text-blaze mb-2" strokeWidth={1.5} />
        <h3 className="font-sans text-[11px] font-semibold text-text-primary uppercase tracking-widest mb-1 group-hover:text-blaze transition-colors">
          {service.name}
        </h3>
        <p className="text-text-primary/70 text-[10px] leading-snug">
          {service.tagline}
        </p>
      </div>
    </motion.a>
  )
}

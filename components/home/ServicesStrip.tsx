'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/shared/AnimatedSection'
import EyebrowLabel from '@/components/shared/EyebrowLabel'
import { whatsappLink } from '@/lib/whatsapp'
import type { Service } from '@/types'

interface ServicesStripProps {
  services: Service[]
}

export default function ServicesStrip({ services }: ServicesStripProps) {
  return (
    <section className="py-24 bg-void-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <AnimatedSection>
          <EyebrowLabel text="WHAT WE CREATE" className="mb-6" />
          <h2 className="font-display text-[36px] md:text-[56px] font-bold text-text-primary mb-12">
            Five Ways to Create
          </h2>
        </AnimatedSection>

        {/* Desktop: 5-column grid | Mobile: horizontal scroll */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <AnimatedSection key={service._id} delay={i * 0.15}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {services.map((service, i) => (
            <AnimatedSection key={service._id} delay={i * 0.1} className="min-w-[280px] flex-shrink-0">
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const message = service.whatsappMessage || `Hi Akshay! I'm interested in ${service.name}.`

  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      className="block bg-void border border-void-border p-6 h-full transition-all duration-300 rounded-[4px] hover:border-blaze hover:shadow-blaze group"
    >
      <h3 className="font-display text-xl font-semibold text-text-primary mb-2 group-hover:text-blaze transition-colors">
        {service.name}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed mb-4">
        {service.tagline}
      </p>
      <span className="font-label text-[10px] uppercase tracking-[0.15em] text-blaze opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Book Now →
      </span>
    </motion.a>
  )
}

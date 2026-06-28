'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { UserPlus, Search, Users, Camera, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'JOIN',
    description: 'Create your profile and showcase your talent.',
  },
  {
    icon: Search,
    title: 'EXPLORE',
    description: 'Discover opportunities, creators and collaborations.',
  },
  {
    icon: Users,
    title: 'CONNECT',
    description: 'Collaborate, plan and build amazing projects.',
  },
  {
    icon: Camera,
    title: 'CREATE',
    description: 'Bring your ideas to life in our professional studio.',
  },
  {
    icon: TrendingUp,
    title: 'GROW',
    description: 'Build your portfolio, reputation and career.',
  }
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Animate the line width based on scroll
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="py-32 bg-void relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blaze/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-[12px] font-semibold text-blaze uppercase tracking-[0.2em] mb-20 text-center"
        >
          HOW IT WORKS
        </motion.h2>

        {/* Desktop: Horizontal layout with connecting lines */}
        <div className="hidden lg:flex justify-between relative">
          
          {/* Base dashed line */}
          <div className="absolute top-10 left-12 right-12 h-[2px] bg-void-border/30 -z-10" />
          
          {/* Animated fill line */}
          <motion.div 
            style={{ width: lineWidth }}
            className="absolute top-10 left-12 h-[2px] bg-gradient-to-r from-blaze/20 via-blaze to-blaze/20 -z-10 origin-left" 
          />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center max-w-[200px] group cursor-default"
            >
              <div className="relative w-20 h-20 rounded-full border-2 border-void-border/50 bg-[#0A0A0A] flex items-center justify-center mb-8 z-10 group-hover:border-blaze group-hover:shadow-[0_0_30px_rgba(255,0,47,0.2)] transition-all duration-500">
                <span className="absolute -top-3 -right-3 text-[10px] font-bold text-blaze/50 group-hover:text-blaze transition-colors">
                  0{i + 1}
                </span>
                <step.icon className="w-6 h-6 text-text-primary/70 group-hover:text-blaze group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-[13px] font-bold text-text-primary uppercase tracking-[0.15em] mb-4 group-hover:text-blaze transition-colors">
                {step.title}
              </h3>
              <p className="text-text-primary/60 text-xs leading-relaxed group-hover:text-text-primary/90 transition-colors">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="lg:hidden flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x relative">
          <div className="absolute top-8 left-6 right-6 w-[800px] h-[1px] bg-void-border/30 -z-10" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col flex-shrink-0 w-[160px] snap-start group"
            >
              <div className="relative w-16 h-16 rounded-full border border-void-border/50 bg-void-surface flex items-center justify-center mb-6">
                <span className="absolute -top-2 -right-2 text-[10px] font-bold text-blaze/50">
                  0{i + 1}
                </span>
                <step.icon className="w-5 h-5 text-blaze" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-[12px] font-bold text-text-primary uppercase tracking-widest mb-2 group-hover:text-blaze transition-colors">
                {step.title}
              </h3>
              <p className="text-text-primary/70 text-[11px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

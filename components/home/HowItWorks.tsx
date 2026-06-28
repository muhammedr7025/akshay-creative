'use client'

import { motion } from 'framer-motion'
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
  return (
    <section className="py-12 bg-void">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="font-sans text-[11px] font-semibold text-blaze uppercase tracking-widest mb-10">
          HOW IT WORKS
        </h2>

        {/* Desktop: Horizontal layout with connecting lines */}
        <div className="hidden lg:flex justify-between relative">
          <div className="absolute top-7 left-12 right-12 h-[1px] border-t border-dashed border-void-border -z-10" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col items-center text-center max-w-[180px] bg-void"
            >
              <div className="w-14 h-14 rounded-full border border-void-border flex items-center justify-center mb-6 bg-void z-10">
                <step.icon className="w-5 h-5 text-text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-[11px] font-bold text-text-primary uppercase tracking-widest mb-3">
                {step.title}
              </h3>
              <p className="text-text-primary/70 text-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll or vertical */}
        <div className="lg:hidden flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col flex-shrink-0 w-[140px] snap-start"
            >
              <div className="w-12 h-12 rounded-full border border-void-border flex items-center justify-center mb-4">
                <step.icon className="w-4 h-4 text-text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-[11px] font-bold text-text-primary uppercase tracking-widest mb-2">
                {step.title}
              </h3>
              <p className="text-text-primary/70 text-[10px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

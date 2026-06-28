'use client'

import { motion } from 'framer-motion'
import { UserPlus, Search, Users, Camera, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'JOIN',
    description: 'Create your profile and showcase your creative talent to the world.',
  },
  {
    icon: Search,
    title: 'EXPLORE',
    description: 'Discover high-end opportunities, brands, and fellow creators.',
  },
  {
    icon: Users,
    title: 'CONNECT',
    description: 'Collaborate and build amazing projects with the community.',
  },
  {
    icon: Camera,
    title: 'CREATE',
    description: 'Bring your wildest ideas to life in our professional studio.',
  },
  {
    icon: TrendingUp,
    title: 'GROW',
    description: 'Build your portfolio, elevate your reputation, and scale your career.',
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-void relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blaze/5 blur-[120px] rounded-[100%] pointer-events-none opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-[12px] font-semibold text-blaze uppercase tracking-[0.2em] mb-4"
          >
            THE ECOSYSTEM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl md:text-5xl font-bold text-text-primary tracking-tight"
          >
            How it works
          </motion.p>
        </div>

        {/* Desktop: Staggered Cards */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 relative">
          {/* Subtle connecting background line behind cards */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-void-border/50 to-transparent -z-10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group h-full flex ${i % 2 !== 0 ? 'mt-16' : 'mb-16'}`}
            >
              <div className="w-full h-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-void-border/40 rounded-2xl p-8 flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-blaze/50 hover:shadow-[0_20px_40px_rgba(255,0,47,0.08)]">
                
                {/* Huge Watermark Number */}
                <div className="absolute -bottom-6 -right-4 font-sans font-black text-8xl text-white/[0.02] group-hover:text-blaze/[0.05] transition-colors duration-500 select-none pointer-events-none">
                  0{i + 1}
                </div>

                {/* Glow behind icon on hover */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-blaze/20 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-12 h-12 rounded-xl bg-void border border-void-border/80 flex items-center justify-center mb-8 relative z-10 group-hover:border-blaze/50 transition-colors duration-500">
                  <step.icon className="w-5 h-5 text-text-primary/70 group-hover:text-blaze transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-sans text-[15px] font-bold text-text-primary uppercase tracking-[0.15em] mb-4 relative z-10">
                  {step.title}
                </h3>
                
                <p className="text-text-primary/60 text-[13px] leading-relaxed relative z-10 group-hover:text-text-primary/80 transition-colors duration-500">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet: Vertical or Scroll */}
        <div className="lg:hidden flex flex-col md:grid md:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#0A0A0A] border border-void-border/50 rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute -right-4 -bottom-4 font-sans font-black text-7xl text-white/[0.03] select-none pointer-events-none">
                0{i + 1}
              </div>
              
              <div className="w-10 h-10 rounded-lg bg-void border border-void-border flex items-center justify-center mb-5 relative z-10">
                <step.icon className="w-4 h-4 text-blaze" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-sans text-[13px] font-bold text-text-primary uppercase tracking-widest mb-2 relative z-10">
                {step.title}
              </h3>
              
              <p className="text-text-primary/60 text-[12px] leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

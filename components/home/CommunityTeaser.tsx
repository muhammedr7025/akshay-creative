'use client'

import { Camera, User, Video, PenTool } from 'lucide-react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import EyebrowLabel from '@/components/shared/EyebrowLabel'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'

const roles = [
  {
    icon: User,
    title: 'Models',
    description: 'Fashion, editorial, and commercial models building their portfolios and finding paid opportunities.',
    count: '12+ Creators',
  },
  {
    icon: Camera,
    title: 'Photographers',
    description: 'Studio, street, and documentary photographers collaborating on creative projects.',
    count: '15+ Creators',
  },
  {
    icon: Video,
    title: 'Videographers',
    description: 'Cinematic, drone, and content videographers telling stories through motion.',
    count: '8+ Creators',
  },
  {
    icon: PenTool,
    title: 'Editors',
    description: 'Photo retouchers, colorists, and video editors bringing raw footage to life.',
    count: '10+ Creators',
  },
]

export default function CommunityTeaser() {
  return (
    <section className="py-24 bg-void">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <AnimatedSection>
          <EyebrowLabel text="THE COMMUNITY" className="mb-6" />
          <h2 className="font-display text-[36px] md:text-[56px] font-bold text-text-primary mb-16">
            Four Roles. One Platform.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {roles.map((role, i) => (
            <AnimatedSection key={role.title} delay={i * 0.15}>
              <div className="bg-void-surface border border-void-border p-8 rounded-[4px] hover:border-blaze/50 transition-all duration-300 group">
                <role.icon className="w-8 h-8 text-blaze mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                  {role.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {role.description}
                </p>
                <span className="font-label text-[10px] uppercase tracking-[0.15em] text-blaze">
                  {role.count}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6} className="text-center">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.joinCommunity}
            label="Meet the Community"
            variant="secondary"
          />
        </AnimatedSection>
      </div>
    </section>
  )
}

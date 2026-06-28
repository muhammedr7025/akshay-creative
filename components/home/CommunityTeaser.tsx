'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Camera, User, Video, PenTool } from 'lucide-react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'

const roles = [
  {
    id: 'models',
    icon: User,
    title: 'Models',
    description: 'Fashion, editorial, and commercial models building portfolios.',
    count: '12+ Creators',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800',
  },
  {
    id: 'photographers',
    icon: Camera,
    title: 'Photographers',
    description: 'Studio, street, and documentary photographers.',
    count: '15+ Creators',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800',
  },
  {
    id: 'videographers',
    icon: Video,
    title: 'Videographers',
    description: 'Cinematic and content videographers telling stories.',
    count: '8+ Creators',
    image: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800',
  },
  {
    id: 'editors',
    icon: PenTool,
    title: 'Editors',
    description: 'Photo retouchers and colorists bringing raw footage to life.',
    count: '10+ Creators',
    image: 'https://images.unsplash.com/photo-1574717024453-354056aafd0c?q=80&w=800',
  },
]

export default function CommunityTeaser() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 bg-void">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-block px-4 py-1 border border-void-border/80 rounded-full mb-6">
              <span className="font-sans text-[11px] font-bold text-text-primary uppercase tracking-[0.2em]">
                THE COMMUNITY
              </span>
            </div>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-[64px] font-bold text-text-primary leading-tight tracking-tight max-w-2xl">
              Four Roles.<br />
              <span className="text-text-primary/40 italic font-display font-medium">One Ecosystem.</span>
            </h2>
          </div>
          <div className="hidden md:block pb-4">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.joinCommunity}
              label="Meet the Community"
              variant="secondary"
            />
          </div>
        </AnimatedSection>

        {/* Desktop Accordion */}
        <div className="hidden lg:flex h-[600px] w-full gap-4 mb-12">
          {roles.map((role, i) => (
            <div
              key={role.id}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden rounded-2xl transition-[flex] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-pointer ${
                hoveredIndex === i ? 'flex-[3]' : hoveredIndex === null ? 'flex-1' : 'flex-[0.8]'
              }`}
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  className={`object-cover object-center transition-all duration-700 ease-out ${
                    hoveredIndex === i ? 'scale-105 filter-none' : 'grayscale-[80%] opacity-60'
                  }`}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent transition-opacity duration-700 ${
                hoveredIndex === i ? 'opacity-90' : 'opacity-70'
              }`} />
              <div className={`absolute inset-0 bg-blaze/10 transition-opacity duration-700 mix-blend-overlay ${
                hoveredIndex === i ? 'opacity-100' : 'opacity-0'
              }`} />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                <div className={`transition-all duration-500 transform ${
                  hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-blaze/20 backdrop-blur-md flex items-center justify-center mb-6 border border-blaze/30">
                    <role.icon className="w-5 h-5 text-blaze" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-3xl font-bold text-text-primary tracking-tight">
                    {role.title}
                  </h3>
                  {/* Vertical text when compressed */}
                  <span className={`font-sans font-bold text-sm tracking-[0.2em] uppercase text-text-primary/30 origin-bottom-right -rotate-90 absolute right-8 bottom-12 transition-all duration-500 whitespace-nowrap ${
                    hoveredIndex === i ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
                  }`}>
                    {role.title}
                  </span>
                </div>
                
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  hoveredIndex === i ? 'max-h-[100px] mt-4 opacity-100' : 'max-h-0 mt-0 opacity-0'
                }`}>
                  <p className="text-text-primary/70 text-[15px] leading-relaxed mb-4 max-w-[80%]">
                    {role.description}
                  </p>
                  <span className="font-sans text-[11px] font-bold text-blaze tracking-[0.15em] uppercase">
                    {role.count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Stack */}
        <div className="flex flex-col lg:hidden gap-4 mb-12">
          {roles.map((role, i) => (
            <AnimatedSection key={role.id} delay={i * 0.1}>
              <div className="relative h-[300px] w-full rounded-2xl overflow-hidden group">
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blaze/20 backdrop-blur-md flex items-center justify-center border border-blaze/30">
                      <role.icon className="w-4 h-4 text-blaze" />
                    </div>
                    <h3 className="font-sans text-2xl font-bold text-text-primary tracking-tight">
                      {role.title}
                    </h3>
                  </div>
                  <p className="text-text-primary/80 text-[14px] leading-relaxed mb-3">
                    {role.description}
                  </p>
                  <span className="font-sans text-[11px] font-bold text-blaze tracking-[0.15em] uppercase">
                    {role.count}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="md:hidden">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.joinCommunity}
            label="Meet the Community"
            variant="secondary"
          />
        </div>

      </div>
    </section>
  )
}

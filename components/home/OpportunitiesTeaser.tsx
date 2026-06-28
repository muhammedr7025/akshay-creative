'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'
import type { Opportunity } from '@/types'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'

interface OpportunitiesTeaserProps {
  opportunities: Opportunity[]
}

const typeBadgeColor: Record<string, string> = {
  'Casting Call': 'text-blaze',
  'Paid Project': 'text-emerald-400',
  'Urgent Hire': 'text-red-400',
  'Theme Shoot': 'text-purple-400',
}

export default function OpportunitiesTeaser({ opportunities }: OpportunitiesTeaserProps) {
  const recent = opportunities.slice(0, 3)

  return (
    <section className="py-24 md:py-32 bg-void relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blaze/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <AnimatedSection className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-block px-4 py-1 border border-void-border/80 rounded-full mb-6">
              <span className="font-sans text-[11px] font-bold text-blaze uppercase tracking-[0.2em]">
                LATEST OPPORTUNITIES
              </span>
            </div>
            <h2 className="font-sans text-5xl md:text-7xl lg:text-[90px] font-bold text-gold uppercase leading-[0.9] tracking-[0.05em]">
              OPEN CALLS
            </h2>
          </div>
          <Link
            href="/opportunities"
            className="group flex items-center gap-3 pb-2 border-b border-void-border hover:border-gold transition-colors"
          >
            <span className="font-sans text-[11px] font-bold text-text-primary uppercase tracking-[0.2em] group-hover:text-gold transition-colors">
              View All Opportunities
            </span>
            <ArrowUpRight className="w-4 h-4 text-text-primary/50 group-hover:text-gold group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </Link>
        </AnimatedSection>

        <div className="border-t border-void-border">
          {recent.map((opp, i) => (
            <AnimatedSection key={opp._id} delay={i * 0.1}>
              <div className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-10 lg:py-14 border-b border-void-border hover:border-blaze/50 transition-colors duration-500">
                
                {/* Hover Spotlight Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blaze/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16 w-full">
                  {/* Number Indicator */}
                  <span className="hidden lg:block font-sans text-lg font-black text-text-primary/10 group-hover:text-blaze/30 transition-colors w-12">
                    0{i + 1}
                  </span>

                  {/* Title and Type */}
                  <div className="flex-1">
                    <span className={cn(
                      'font-sans text-[11px] font-bold uppercase tracking-[0.2em] mb-3 block transition-colors',
                      typeBadgeColor[opp.type] || 'text-text-primary/50 group-hover:text-blaze'
                    )}>
                      {opp.type}
                    </span>
                    <h3 className="font-sans text-2xl md:text-4xl lg:text-5xl font-medium text-text-primary/80 group-hover:text-text-primary group-hover:translate-x-2 transition-all duration-500 tracking-tight">
                      {opp.title}
                    </h3>
                  </div>

                  {/* Details (Comp & Date) */}
                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 lg:gap-2 lg:w-48">
                    {opp.compensation && (
                      <span className="font-sans text-lg md:text-xl text-blaze font-bold tracking-tight">
                        {opp.compensation}
                      </span>
                    )}
                    {opp.deadline && (
                      <span className="font-sans text-[11px] text-text-primary/40 uppercase tracking-[0.15em]">
                        Due: {new Date(opp.deadline).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 lg:mt-0 lg:opacity-0 lg:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 lg:w-40 flex justify-end">
                    <WhatsAppButton
                      message={WHATSAPP_MESSAGES.opportunity(opp.title)}
                      label="Apply Now"
                      variant="primary"
                    />
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}

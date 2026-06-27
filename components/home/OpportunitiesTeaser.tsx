'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import EyebrowLabel from '@/components/shared/EyebrowLabel'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'
import type { Opportunity } from '@/types'
import { cn } from '@/lib/utils'

interface OpportunitiesTeaserProps {
  opportunities: Opportunity[]
}

const typeBadgeColor: Record<string, string> = {
  'Casting Call': 'bg-blaze/20 text-blaze',
  'Paid Project': 'bg-emerald-900/30 text-emerald-400',
  'Urgent Hire': 'bg-red-900/40 text-red-400',
  'Theme Shoot': 'bg-purple-900/30 text-purple-400',
}

export default function OpportunitiesTeaser({ opportunities }: OpportunitiesTeaserProps) {
  const recent = opportunities.slice(0, 3)

  return (
    <section className="py-24 bg-void">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <AnimatedSection>
          <EyebrowLabel text="LATEST OPPORTUNITIES" className="mb-6" />
          <h2 className="font-display text-[36px] md:text-[56px] font-bold text-text-primary mb-12">
            Open Calls
          </h2>
        </AnimatedSection>

        <div className="space-y-4 mb-12">
          {recent.map((opp, i) => (
            <AnimatedSection key={opp._id} delay={i * 0.15}>
              <div className="bg-void-surface border border-void-border p-6 rounded-[4px] flex flex-col md:flex-row md:items-center gap-4 hover:border-blaze/50 transition-all duration-300">
                <span className={cn(
                  'font-label text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-[2px] w-fit whitespace-nowrap',
                  typeBadgeColor[opp.type] || 'bg-blaze/20 text-blaze'
                )}>
                  {opp.type}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {opp.title}
                  </h3>
                </div>
                {opp.compensation && (
                  <span className="text-blaze font-label text-sm font-bold whitespace-nowrap">
                    {opp.compensation}
                  </span>
                )}
                {opp.deadline && (
                  <span className="text-text-muted font-label text-[10px] uppercase tracking-wider whitespace-nowrap">
                    Due: {new Date(opp.deadline).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                  </span>
                )}
                <WhatsAppButton
                  message={WHATSAPP_MESSAGES.opportunity(opp.title)}
                  label="Apply"
                  variant="secondary"
                  className="!py-2 !px-4 !text-[9px]"
                  showIcon={false}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="text-center">
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 font-label text-[11px] uppercase tracking-[0.15em] text-blaze hover:text-text-primary transition-colors border-b border-blaze/30 hover:border-blaze pb-1"
          >
            View All Opportunities →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

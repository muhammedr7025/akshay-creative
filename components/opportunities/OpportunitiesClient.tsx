'use client'

import { useState, useMemo } from 'react'
import PageHero from '@/components/shared/PageHero'
import TypeFilter from '@/components/opportunities/TypeFilter'
import OpportunityCard from '@/components/opportunities/OpportunityCard'
import AnimatedSection from '@/components/shared/AnimatedSection'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'
import type { Opportunity, OpportunityType, UserRole } from '@/types'

interface OpportunitiesClientProps {
  opportunities: Opportunity[]
}

export default function OpportunitiesClient({ opportunities }: OpportunitiesClientProps) {
  const [activeType, setActiveType] = useState<OpportunityType | 'All'>('All')
  const [activeRole, setActiveRole] = useState<UserRole | 'All'>('All')

  const filtered = useMemo(() => {
    return opportunities.filter((opp) => {
      const typeMatch = activeType === 'All' || opp.type === activeType
      const roleMatch = activeRole === 'All' || opp.rolesNeeded.includes(activeRole)
      return typeMatch && roleMatch
    })
  }, [opportunities, activeType, activeRole])

  return (
    <>
      <PageHero
        eyebrow="OPEN CALLS"
        title="Your Next Opportunity"
        subtitle="Paid projects, casting calls, theme shoots, and urgent hires — find your next creative gig."
      />

      <section className="py-16 px-6 md:px-12 lg:px-24 bg-void">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <TypeFilter
              activeType={activeType}
              activeRole={activeRole}
              onTypeChange={setActiveType}
              onRoleChange={setActiveRole}
            />
          </AnimatedSection>

          {filtered.length > 0 ? (
            <div className="space-y-4">
              {filtered.map((opp, i) => (
                <AnimatedSection key={opp._id} delay={i * 0.1}>
                  <OpportunityCard opportunity={opp} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <AnimatedSection>
                <p className="font-display text-2xl text-text-primary mb-4">
                  Nothing right now. Check back soon.
                </p>
                <p className="text-text-muted mb-8">
                  Want to be notified when new opportunities open up?
                </p>
                <WhatsAppButton
                  message={WHATSAPP_MESSAGES.general}
                  label="Get Notified via WhatsApp"
                  variant="primary"
                />
              </AnimatedSection>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

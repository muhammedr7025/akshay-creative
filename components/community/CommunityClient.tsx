'use client'

import { useState, useMemo } from 'react'
import PageHero from '@/components/shared/PageHero'
import RoleFilter from '@/components/community/RoleFilter'
import ProfileCard from '@/components/community/ProfileCard'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionDivider from '@/components/shared/SectionDivider'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'
import type { CommunityMember, UserRole } from '@/types'

interface CommunityClientProps {
  members: CommunityMember[]
}

export default function CommunityClient({ members }: CommunityClientProps) {
  const [activeRole, setActiveRole] = useState<UserRole | 'All'>('All')

  const filtered = useMemo(() => {
    if (activeRole === 'All') return members
    return members.filter((m) => m.role === activeRole)
  }, [members, activeRole])

  return (
    <>
      <PageHero
        eyebrow="THE CREATORS"
        title="Meet the Community"
        subtitle="A collective of photographers, models, videographers, and editors building something incredible together."
      />

      <section className="py-16 px-6 md:px-12 lg:px-24 bg-void">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <RoleFilter active={activeRole} onChange={setActiveRole} />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((member, i) => (
              <AnimatedSection key={member._id} delay={i * 0.1}>
                <ProfileCard member={member} />
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">No members found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <SectionDivider />

      {/* Join CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-void text-center">
        <AnimatedSection>
          <h2 className="font-display text-[28px] md:text-[40px] font-bold italic text-text-primary mb-4">
            Are you a creative professional?
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
            Join our platform and connect with collaborators, find opportunities, and grow your career.
          </p>
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.joinCommunity}
            label="Join the Platform"
            variant="primary"
          />
        </AnimatedSection>
      </section>
    </>
  )
}

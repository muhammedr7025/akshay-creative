'use client'

import { motion } from 'framer-motion'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'
import type { Opportunity } from '@/types'
import { cn } from '@/lib/utils'
import { MapPin, Calendar } from 'lucide-react'

interface OpportunityCardProps {
  opportunity: Opportunity
}

const typeBadgeColor: Record<string, string> = {
  'Casting Call': 'bg-blaze/20 text-blaze border-blaze/30',
  'Paid Project': 'bg-emerald-900/30 text-emerald-400 border-emerald-800/30',
  'Urgent Hire': 'bg-red-900/40 text-red-400 border-red-800/30',
  'Theme Shoot': 'bg-purple-900/30 text-purple-400 border-purple-800/30',
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-void-surface border border-void-border rounded-[4px] p-6 md:p-8 hover:border-blaze/50 transition-all duration-300 hover:shadow-blaze"
    >
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        {/* Left: Type badge */}
        <div className="flex-shrink-0">
          <span className={cn(
            'font-label text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-[2px] border whitespace-nowrap',
            typeBadgeColor[opportunity.type] || 'bg-blaze/20 text-blaze border-blaze/30'
          )}>
            {opportunity.type}
          </span>
        </div>

        {/* Center: Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-text-primary mb-2">
            {opportunity.title}
          </h3>

          {/* Roles */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {opportunity.rolesNeeded.map((role) => (
              <span
                key={role}
                className="font-label text-[9px] uppercase tracking-wider text-text-muted border border-void-border px-2 py-0.5"
              >
                {role}
              </span>
            ))}
          </div>

          <p className="text-text-primary/70 text-sm leading-relaxed mb-4 line-clamp-2">
            {opportunity.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-text-muted text-xs font-label tracking-wider">
            {opportunity.location && (
              <span className="flex items-center gap-1.5">
                <MapPin size={12} />
                {opportunity.location}
              </span>
            )}
            {opportunity.deadline && (
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {new Date(opportunity.deadline).toLocaleDateString('en-IN', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            )}
          </div>
        </div>

        {/* Right: Compensation + CTA */}
        <div className="flex flex-col items-start lg:items-end gap-3 flex-shrink-0">
          {opportunity.compensation && (
            <span className="text-blaze font-display text-xl font-bold">
              {opportunity.compensation}
            </span>
          )}
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.opportunity(opportunity.title)}
            label="Apply via WhatsApp →"
            variant="secondary"
            className="!py-2.5 !px-5 !text-[9px] whitespace-nowrap"
          />
        </div>
      </div>
    </motion.div>
  )
}

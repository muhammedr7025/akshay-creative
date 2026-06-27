'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import InstagramIcon from '@/components/shared/InstagramIcon'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'
import type { CommunityMember } from '@/types'
import { cn } from '@/lib/utils'

interface ProfileCardProps {
  member: CommunityMember
}

const roleBadgeColor: Record<string, string> = {
  Model: 'bg-blaze/20 text-blaze',
  Photographer: 'bg-blaze-dim/20 text-blaze-dim',
  Videographer: 'bg-text-muted/20 text-text-muted',
  Editor: 'bg-text-muted/20 text-text-muted',
}

export default function ProfileCard({ member }: ProfileCardProps) {
  const photoSrc = typeof member.photo === 'string' ? member.photo : ''

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-void-surface border border-void-border rounded-[4px] overflow-hidden hover:border-blaze transition-all duration-300 hover:shadow-blaze group"
    >
      {/* Photo */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={photoSrc}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void-surface via-transparent to-transparent opacity-60" />
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-xl font-semibold text-text-primary">
            {member.name}
          </h3>
          {member.instagram && (
            <a
              href={`https://instagram.com/${member.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-blaze transition-colors"
              aria-label={`${member.name}'s Instagram`}
            >
              <InstagramIcon size={16} />
            </a>
          )}
        </div>

        <span className={cn(
          'inline-block font-label text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-[2px] mb-3',
          roleBadgeColor[member.role] || 'bg-blaze/20 text-blaze'
        )}>
          {member.role}
        </span>

        <p className="text-text-muted text-xs font-label tracking-wider mb-3">
          {member.location}
        </p>

        <p className="text-text-primary/80 text-sm leading-relaxed mb-4 line-clamp-2">
          {member.bio}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {member.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="font-label text-[9px] uppercase tracking-wider text-text-muted border border-void-border px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <WhatsAppButton
          message={WHATSAPP_MESSAGES.general}
          label="Connect"
          variant="secondary"
          className="!py-2 !px-4 !text-[9px] w-full justify-center"
        />
      </div>
    </motion.div>
  )
}

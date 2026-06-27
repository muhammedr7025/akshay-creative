'use client'

import { cn } from '@/lib/utils'
import type { OpportunityType, UserRole } from '@/types'

const types: (OpportunityType | 'All')[] = ['All', 'Theme Shoot', 'Casting Call', 'Urgent Hire', 'Paid Project']
const roles: (UserRole | 'All')[] = ['All', 'Model', 'Photographer', 'Videographer', 'Editor']

interface TypeFilterProps {
  activeType: OpportunityType | 'All'
  activeRole: UserRole | 'All'
  onTypeChange: (type: OpportunityType | 'All') => void
  onRoleChange: (role: UserRole | 'All') => void
}

export default function TypeFilter({ activeType, activeRole, onTypeChange, onRoleChange }: TypeFilterProps) {
  return (
    <div className="space-y-4 mb-12">
      {/* Type filter */}
      <div className="flex flex-wrap gap-2">
        <span className="font-label text-[10px] uppercase tracking-wider text-text-muted self-center mr-2">
          Type:
        </span>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={cn(
              'font-label text-[10px] uppercase tracking-[0.15em] px-4 py-2 transition-all duration-300 rounded-none',
              activeType === type
                ? 'bg-blaze text-void'
                : 'bg-transparent border border-void-border text-text-muted hover:border-blaze hover:text-blaze'
            )}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Role filter */}
      <div className="flex flex-wrap gap-2">
        <span className="font-label text-[10px] uppercase tracking-wider text-text-muted self-center mr-2">
          Role:
        </span>
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => onRoleChange(role)}
            className={cn(
              'font-label text-[10px] uppercase tracking-[0.15em] px-4 py-2 transition-all duration-300 rounded-none',
              activeRole === role
                ? 'bg-blaze text-void'
                : 'bg-transparent border border-void-border text-text-muted hover:border-blaze hover:text-blaze'
            )}
          >
            {role === 'All' ? 'All Roles' : `${role}s`}
          </button>
        ))}
      </div>
    </div>
  )
}

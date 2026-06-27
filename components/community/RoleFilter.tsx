'use client'

import { cn } from '@/lib/utils'
import type { UserRole } from '@/types'

const roles: (UserRole | 'All')[] = ['All', 'Model', 'Photographer', 'Videographer', 'Editor']

interface RoleFilterProps {
  active: UserRole | 'All'
  onChange: (role: UserRole | 'All') => void
}

export default function RoleFilter({ active, onChange }: RoleFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {roles.map((role) => (
        <button
          key={role}
          onClick={() => onChange(role)}
          className={cn(
            'font-label text-[11px] uppercase tracking-[0.15em] px-5 py-2.5 transition-all duration-300 rounded-none',
            active === role
              ? 'bg-blaze text-void'
              : 'bg-transparent border border-blaze/50 text-blaze hover:bg-blaze hover:text-void'
          )}
        >
          {role === 'All' ? 'All' : `${role}s`}
        </button>
      ))}
    </div>
  )
}

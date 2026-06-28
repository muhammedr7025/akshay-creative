'use client'

import { whatsappLink } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'
import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  message: string
  label: string
  variant?: 'primary' | 'secondary'
  className?: string
  showIcon?: boolean
  icon?: React.ReactNode
}

export default function WhatsAppButton({
  message,
  label,
  variant = 'primary',
  className,
  showIcon = true,
  icon,
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 px-8 py-4 font-label text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300',
        variant === 'primary'
          ? 'bg-blaze text-void hover:bg-blaze-dim'
          : 'bg-transparent border border-blaze text-blaze hover:bg-blaze/10',
        'rounded-md',
        className
      )}
    >
      {showIcon && (icon ? icon : <MessageCircle className="w-4 h-4" />)}
      {label}
    </a>
  )
}

import { cn } from '@/lib/utils'

interface EyebrowLabelProps {
  text: string
  className?: string
}

export default function EyebrowLabel({ text, className }: EyebrowLabelProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="w-6 h-[2px] bg-blaze" />
      <span className="font-label text-[11px] uppercase tracking-[0.2em] text-blaze font-medium">
        {text}
      </span>
    </div>
  )
}

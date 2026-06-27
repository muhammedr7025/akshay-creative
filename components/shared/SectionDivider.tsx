import { cn } from '@/lib/utils'

interface SectionDividerProps {
  className?: string
}

export default function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div
      className={cn('w-full h-[1px] bg-blaze/20', className)}
      aria-hidden="true"
    />
  )
}

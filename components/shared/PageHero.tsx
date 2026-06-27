import AnimatedSection from './AnimatedSection'
import EyebrowLabel from './EyebrowLabel'
import SectionDivider from './SectionDivider'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
}

export default function PageHero({ eyebrow, title, subtitle, className }: PageHeroProps) {
  return (
    <section className={cn('pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-void', className)}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <EyebrowLabel text={eyebrow} className="mb-6" />
          <h1 className="font-display text-[42px] sm:text-[52px] md:text-[72px] lg:text-[96px] font-bold italic leading-[1] lg:leading-[0.95] text-text-primary mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </AnimatedSection>
        <SectionDivider className="mt-12" />
      </div>
    </section>
  )
}

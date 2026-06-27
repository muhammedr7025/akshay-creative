import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Zap, Users, Camera, MessageCircle, Sparkles } from 'lucide-react'
import InstagramIcon from '@/components/shared/InstagramIcon'
import PageHero from '@/components/shared/PageHero'
import AnimatedSection from '@/components/shared/AnimatedSection'
import SectionDivider from '@/components/shared/SectionDivider'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Akshay Creative. Book a shoot, join the community, or just say hi — all via WhatsApp.',
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@akshaycreative.com' },
  { icon: Phone, label: 'Phone', value: '+91 99999 99999' },
  { icon: MapPin, label: 'Location', value: 'Mumbai, India' },
  { icon: InstagramIcon, label: 'Instagram', value: '@akshaycreative', href: 'https://instagram.com/akshaycreative' },
]

const actions = [
  {
    icon: Camera,
    title: 'Book a Shoot',
    description: 'Portrait, fashion, boudoir, concept, or film — let\'s create something iconic.',
    message: WHATSAPP_MESSAGES.bookShoot,
  },
  {
    icon: Users,
    title: 'Join the Community',
    description: 'Are you a model, photographer, videographer, or editor? Join our creative collective.',
    message: WHATSAPP_MESSAGES.joinCommunity,
  },
  {
    icon: Sparkles,
    title: 'Collaboration Enquiry',
    description: 'Brands, agencies, and fellow creatives — let\'s explore collaboration.',
    message: WHATSAPP_MESSAGES.general,
  },
  {
    icon: Zap,
    title: 'Urgent Booking',
    description: 'Need something shot tomorrow? We\'ll do our best to make it happen.',
    message: WHATSAPP_MESSAGES.urgent,
  },
  {
    icon: MessageCircle,
    title: 'Just Say Hi',
    description: 'No agenda, no pitch — just a conversation between creatives.',
    message: WHATSAPP_MESSAGES.general,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Let's Create Together"
        subtitle="Every great project starts with a conversation. Reach out — we're always open to new ideas."
      />

      <section className="py-16 px-6 md:px-12 lg:px-24 bg-void">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <AnimatedSection>
            <div className="space-y-8">
              <h2 className="font-display text-[28px] font-semibold text-text-primary mb-8">
                Contact Info
              </h2>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <item.icon className="w-5 h-5 text-blaze mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-[0.15em] text-text-muted mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-primary hover:text-blaze transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text-primary">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: WhatsApp Actions */}
          <div className="space-y-4">
            <AnimatedSection>
              <h2 className="font-display text-[28px] font-semibold text-text-primary mb-8">
                Quick Actions
              </h2>
            </AnimatedSection>

            {actions.map((action, i) => (
              <AnimatedSection key={action.title} delay={i * 0.1}>
                <div className="bg-void-surface border border-void-border border-l-2 border-l-blaze rounded-[4px] p-6 hover:shadow-blaze hover:border-blaze/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <action.icon className="w-6 h-6 text-blaze flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-text-primary mb-1">
                        {action.title}
                      </h3>
                      <p className="text-text-muted text-sm mb-4">
                        {action.description}
                      </p>
                      <WhatsAppButton
                        message={action.message}
                        label="Message on WhatsApp"
                        variant="secondary"
                        className="!py-2 !px-4 !text-[9px]"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Bottom Instagram CTA */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-void text-center">
        <AnimatedSection>
          <p className="text-text-muted text-lg mb-4">Or find us on Instagram</p>
          <a
            href="https://instagram.com/akshaycreative"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-label text-[11px] uppercase tracking-[0.15em] text-blaze hover:text-text-primary transition-colors border-b border-blaze/30 hover:border-blaze pb-1"
          >
            <InstagramIcon size={16} />
            @akshaycreative
          </a>
        </AnimatedSection>
      </section>
    </>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, ShoppingBag } from 'lucide-react'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/community', label: 'Community' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-void/95 backdrop-blur-md border-b border-blaze/30'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start justify-center group">
            <span className="text-[16px] md:text-xl font-sans tracking-[0.2em] font-medium text-text-primary">AKSHAY</span>
            <span className="text-[9px] md:text-[10px] font-sans tracking-[0.4em] text-text-muted mt-[-2px] group-hover:text-blaze transition-colors">CREATIVE</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-label text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 relative',
                  pathname === link.href
                    ? 'text-blaze'
                    : 'text-text-primary hover:text-blaze'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-blaze"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Icons */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-text-primary hover:text-blaze transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-text-primary hover:text-blaze transition-colors" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.joinCommunity}
              label="Join Now"
              variant="primary"
              className="!py-2 !px-6 !text-[11px] rounded-md font-sans capitalize tracking-normal text-void"
              showIcon={false}
            />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-text-primary hover:text-blaze transition-colors z-[60]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-void flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'font-display text-3xl italic transition-colors',
                      pathname === link.href ? 'text-blaze' : 'text-text-primary'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                className="mt-4"
              >
                <WhatsAppButton
                  message={WHATSAPP_MESSAGES.bookShoot}
                  label="Book a Shoot"
                  variant="primary"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

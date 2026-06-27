import Link from 'next/link'
import InstagramIcon from '@/components/shared/InstagramIcon'
import SectionDivider from '@/components/shared/SectionDivider'

const navigateLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/community', label: 'Community' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/contact', label: 'Contact' },
]

const joinLinks = [
  { label: 'Models', href: '/community' },
  { label: 'Photographers', href: '/community' },
  { label: 'Videographers', href: '/community' },
  { label: 'Editors', href: '/community' },
]

export default function Footer() {
  return (
    <footer className="bg-void-deep">
      <SectionDivider />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-display font-bold italic text-blaze">AC</span>
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-text-primary">
                Akshay Creative
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              More than a photography studio — a creative community where ideas become collaborations, collaborations become opportunities, and opportunities become lasting careers.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-label text-[11px] uppercase tracking-[0.2em] text-blaze mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navigateLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-blaze transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Join */}
          <div>
            <h4 className="font-label text-[11px] uppercase tracking-[0.2em] text-blaze mb-6">
              Join As
            </h4>
            <ul className="space-y-3">
              {joinLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-blaze transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-label text-[11px] uppercase tracking-[0.2em] text-blaze mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/akshaycreative"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-blaze transition-colors duration-300 flex items-center gap-2"
                >
                  <InstagramIcon size={14} />
                  Instagram
                </a>
              </li>
              <li>
                <span className="text-text-muted text-sm">hello@akshaycreative.com</span>
              </li>
              <li>
                <span className="text-text-muted text-sm">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <SectionDivider className="mt-12 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs font-label tracking-wider">
            © {new Date().getFullYear()} Akshay&apos;s Creative Platform
          </p>
          <p className="text-text-muted text-xs font-label tracking-wider italic">
            Personal Assistant to Designers
          </p>
        </div>
      </div>
    </footer>
  )
}

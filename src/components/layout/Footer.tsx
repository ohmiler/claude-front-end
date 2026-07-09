import { Link } from 'react-router'
import { navLinks } from '../../data/nav'
import { Container } from '../ui/Container'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github-icon' },
  { label: 'X', href: 'https://x.com', icon: 'x-icon' },
  { label: 'Discord', href: 'https://discord.com', icon: 'discord-icon' },
  { label: 'Bluesky', href: 'https://bsky.app', icon: 'bluesky-icon' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-text-primary">
              <img src="/favicon.svg" alt="" width={28} height={27} />
              Astra AI Software Studio
            </Link>
            <p className="max-w-sm text-sm text-text-secondary">
              We design and build production-grade AI software for teams who need to
              ship real products, not prototypes.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:hello@astraaisoftware.studio"
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              hello@astraaisoftware.studio
            </a>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  <svg className="icon-mask h-5 w-5" role="presentation" aria-hidden="true">
                    <use href={`/icons.svg#${social.icon}`} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-text-muted sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Astra AI Software Studio. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

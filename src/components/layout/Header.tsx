import { NavLink } from 'react-router'
import { Menu } from 'lucide-react'
import clsx from 'clsx'
import { navLinks } from '../../data/nav'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { MobileNav } from './MobileNav'

interface HeaderProps {
  isMobileNavOpen: boolean
  onOpenMobileNav: () => void
  onCloseMobileNav: () => void
}

export function Header({ isMobileNavOpen, onOpenMobileNav, onCloseMobileNav }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-4">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-text-primary"
          data-testid="logo-link"
        >
          <img src="/favicon.svg" alt="" width={28} height={27} />
          Astra AI Software Studio
        </NavLink>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={({ isActive }) =>
                    clsx(
                      'text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'text-text-primary'
                        : 'text-text-secondary hover:text-text-primary',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" size="md" data-testid="header-cta">
            Start a project
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-text-primary md:hidden"
          onClick={onOpenMobileNav}
          aria-label="Open menu"
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav"
          data-testid="mobile-nav-toggle"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </Container>

      <MobileNav isOpen={isMobileNavOpen} onClose={onCloseMobileNav} />
    </header>
  )
}

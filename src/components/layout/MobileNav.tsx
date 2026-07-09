import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router'
import { X } from 'lucide-react'
import clsx from 'clsx'
import { navLinks } from '../../data/nav'
import { Button } from '../ui/Button'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return createPortal(
    <div
      id="mobile-nav"
      className={clsx(
        'fixed inset-0 z-50 md:hidden',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <div
        className={clsx(
          'absolute inset-0 bg-bg/80 backdrop-blur-sm transition-opacity duration-200',
          isOpen ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
      />
      <nav
        ref={panelRef}
        aria-label="Mobile"
        role="dialog"
        aria-modal="true"
        className={clsx(
          'absolute inset-y-0 right-0 flex w-full max-w-xs flex-col gap-8 border-l border-border bg-bg-elevated p-6 transition-transform duration-200',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-end">
          <button
            ref={closeButtonRef}
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-text-primary"
            onClick={onClose}
            aria-label="Close menu"
            data-testid="mobile-nav-close"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={onClose}
                data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) =>
                  clsx(
                    'text-xl font-medium transition-colors duration-200',
                    isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary',
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Button to="/contact" size="lg" onClick={onClose} data-testid="mobile-header-cta">
          Start a project
        </Button>
      </nav>
    </div>,
    document.body,
  )
}

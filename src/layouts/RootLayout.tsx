import { useState } from 'react'
import { Outlet, ScrollRestoration } from 'react-router'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

export function RootLayout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="flex min-h-screen flex-1 flex-col" inert={isMobileNavOpen}>
        <Header
          isMobileNavOpen={isMobileNavOpen}
          onOpenMobileNav={() => setIsMobileNavOpen(true)}
          onCloseMobileNav={() => setIsMobileNavOpen(false)}
        />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollRestoration />
    </div>
  )
}

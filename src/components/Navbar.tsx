import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

interface NavbarProps {
  onStartProject?: () => void
}

const HAIRLINE = 'border-line/15'

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 20
      // Bail out unless the threshold actually flips — otherwise every scroll tick re-renders the bar.
      setScrolled((current) => (current === next ? current : next))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav
        aria-label="Main Navigation"
        className={`flex h-14 w-full items-stretch border-b bg-canvas transition-colors duration-300 ${
          scrolled ? 'border-line/30' : HAIRLINE
        }`}
      >
        {/* Brand cell */}
        <Link
          to="/"
          aria-label="Mabbelle Studios Homepage"
          className={`group flex shrink-0 items-center border-r px-4 py-0.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:px-5 ${HAIRLINE}`}
        >
          {/* One lockup per theme — navy wordmark on the light canvas, cream on the dark one */}
          <img
            src="/mabbelle-logo-light.webp"
            alt="Mabbelle Studios"
            className="h-9 w-auto select-none object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-10 dark:hidden"
            loading="eager"
          />
          <img
            src="/mabbelle-logo-dark.webp"
            alt="Mabbelle Studios"
            className="hidden h-9 w-auto select-none object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-10 dark:block"
            loading="eager"
          />
        </Link>

        {/* Desktop link cells */}
        <div className="hidden flex-1 items-stretch md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center border-r px-4 text-[13px] font-medium tracking-wide transition-colors duration-200 select-none lg:px-5 ${HAIRLINE} ${
                  isActive
                    ? 'bg-ink text-canvas'
                    : 'text-muted hover:bg-line/[0.05] hover:text-ink'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Spacer on mobile */}
        <div className="flex-1 md:hidden" />

        {/* Right cluster: theme, CTA, hamburger */}
        <div className="ml-auto flex items-stretch">
          <div className={`hidden items-center border-l px-2 sm:flex ${HAIRLINE}`}>
            <ThemeToggle className="rounded-none border-0 p-1.5" />
          </div>

          <Link
            to="/contact"
            className={`hidden items-center gap-2 border-l bg-gold-bright px-5 text-[13px] font-bold uppercase tracking-wider text-deep transition-colors hover:bg-brand hover:text-canvas md:flex ${HAIRLINE}`}
          >
            <span>Start a project</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
          </Link>

          <div className={`flex items-center border-l px-2 md:hidden ${HAIRLINE}`}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-none p-1.5 text-ink transition-all duration-200 hover:bg-line/5 focus:outline-none active:scale-95"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden"
          >
            <div className={`flex flex-col border-b bg-canvas ${HAIRLINE}`}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`border-b px-5 py-3.5 text-[13px] font-medium tracking-wide transition-colors last:border-b-0 ${HAIRLINE} ${
                      isActive ? 'bg-ink text-canvas' : 'text-muted hover:bg-line/5 hover:text-ink'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}

              <Link
                to="/contact"
                className={`flex items-center justify-between border-t bg-gold-bright px-5 py-3.5 text-[13px] font-bold uppercase tracking-wider text-deep ${HAIRLINE}`}
              >
                <span>Start a project</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar

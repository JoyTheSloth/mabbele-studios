import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

interface NavbarProps {
  onStartProject?: () => void
}

const HAIRLINE = 'border-line/15'

interface MenuEntry {
  title: string
  meta: string
  blurb: string
  /** Defaults to the parent nav item's own page. */
  to?: string
}

interface MenuPanel {
  entries: MenuEntry[]
  footerLabel: string
  footerTo: string
  footerExternal?: boolean
}

interface NavLink {
  name: string
  path: string
  panel?: MenuPanel
}

/** Mirrors the three offering cards plus the ERP add-ons quoted on the Services page. */
const SERVICES_PANEL: MenuPanel = {
  entries: [
    {
      title: 'VidyaSetu School ERP',
      meta: '₹99,000',
      blurb: 'Permanent licence. Admissions, attendance, exams and fees — self-hosted, no renewal.',
      to: '/services/vidyasetu-erp',
    },
    {
      title: 'Custom Business or Cafe Website',
      meta: 'From ₹4,999',
      blurb: 'Menu or services pages, gallery, Google Maps, enquiry and one-tap WhatsApp contact.',
      to: '/services/business-cafe-website',
    },
    {
      title: 'Custom School or College Website',
      meta: 'From ₹11,999',
      blurb: 'Academics, admissions, faculty, notices and prospectus download — Google ready.',
      to: '/services/school-college-website',
    },
    {
      title: 'Setup, Training & Hosting',
      meta: 'Optional',
      blurb: '₹15,000 setup, ₹10,000 staff training. Hosting managed by us or on your own server.',
      to: '/services/vidyasetu-erp',
    },
  ],
  footerLabel: 'All services',
  footerTo: '/services',
}

const WORK_PANEL: MenuPanel = {
  entries: [
    {
      title: 'Admin ERP Console',
      meta: 'Staff',
      blurb: 'Notices, admissions and the school’s whole record set behind role-based access.',
    },
    {
      title: 'Teacher Attendance',
      meta: 'Daily',
      blurb: 'Mark a class in seconds; attendance feeds digital notes and subject-wise reports.',
    },
    {
      title: 'Parent Fee & Reports',
      meta: 'Parents',
      blurb: 'Fee status, payment history and report cards surfaced directly to parents.',
    },
    {
      title: 'Student Portal',
      meta: 'Students',
      blurb: 'Timetable, homework and marks, scoped so each student sees only their own data.',
    },
  ],
  footerLabel: 'Open the live portal',
  footerTo: 'https://vidya-setu-kappa.vercel.app/',
  footerExternal: true,
}

const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', panel: SERVICES_PANEL },
  { name: 'Work', path: '/work', panel: WORK_PANEL },
  { name: 'Process', path: '/process' },
  { name: 'Contact', path: '/contact' },
]

const MOBILE_LINKS = NAV_LINKS.map(({ name, path }) => ({ name, path }))

/** Desktop nav cell that reveals a panel on hover, focus or Escape-dismissable keyboard use. */
const NavDropdown: React.FC<{ link: NavLink; isActive: boolean }> = ({ link, isActive }) => {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | undefined>(undefined)
  const location = useLocation()
  const panel = link.panel as MenuPanel

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  const openNow = () => {
    window.clearTimeout(closeTimer.current)
    setOpen(true)
  }

  // Grace period so crossing the hairline between the cell and the panel doesn't close it.
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpen(false), 140)
  }

  const footerLink = (
    <Link
      to={panel.footerTo}
      {...(panel.footerExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-brand transition-colors hover:text-gold-bright"
    >
      <span>{panel.footerLabel}</span>
      <ArrowUpRight className="h-3.5 w-3.5" />
    </Link>
  )

  return (
    <div
      className="relative flex items-stretch"
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
      onFocus={openNow}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) scheduleClose()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setOpen(false)
      }}
    >
      <Link
        to={link.path}
        aria-expanded={open}
        className={`flex items-center gap-1.5 border-r px-4 text-[13px] font-medium tracking-wide transition-colors duration-200 select-none lg:px-5 ${HAIRLINE} ${
          isActive
            ? 'bg-ink text-canvas'
            : 'text-muted hover:bg-line/[0.05] hover:text-ink'
        }`}
      >
        {link.name}
        <ChevronDown
          className={`h-3 w-3 opacity-60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] as const }}
            className="absolute left-0 top-full z-50 w-[600px] max-w-[calc(100vw-2rem)] pt-px"
          >
            <div className={`rounded-xl border bg-canvas p-6 shadow-2xl shadow-black/10 dark:shadow-black/50 ${HAIRLINE}`}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {panel.entries.map((entry) => (
                  <Link key={entry.title} to={entry.to ?? link.path} className="group/item block">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-[13px] font-semibold text-ink transition-colors group-hover/item:text-brand">
                        {entry.title}
                      </span>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-gold-bright">
                        {entry.meta}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-muted">{entry.blurb}</p>
                  </Link>
                ))}
              </div>
              <div className={`mt-6 border-t pt-4 ${HAIRLINE}`}>{footerLink}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

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
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path
            if (link.panel) return <NavDropdown key={link.name} link={link} isActive={isActive} />
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
          <div className={`flex items-center border-l px-2 ${HAIRLINE}`}>
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
              {MOBILE_LINKS.map((link) => {
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

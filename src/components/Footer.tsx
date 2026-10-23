import React from 'react'
import { ArrowUp, MapPin, ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const HAIRLINE = 'border-line/15'

const EXPLORE_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Studio' },
  { to: '/services', label: 'VidyaSetu ERP' },
  { to: '/work', label: 'Selected Work' },
  { to: '/process', label: '5-Step Process' },
  { to: '/contact', label: 'Contact Us' },
]

const BUILD_ITEMS: [string, string][] = [
  ['VidyaSetu School ERP', '₹99,000 permanent licence — self-hosted, no renewal'],
  ['Business & Cafe Websites', 'From ₹4,999 — fast, mobile-first, Google ready'],
  ['School & College Websites', 'From ₹11,999 — academics, admissions & notices'],
  ['Straight Terms', 'NDA, signed contract & staged payments'],
]

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-canvas text-ink" aria-label="Site footer">
      {/* ─── Call to action band ─── */}
      <div className={`relative overflow-hidden border-t px-4 pt-14 pb-12 sm:px-6 lg:px-8 ${HAIRLINE}`}>
        <div
          className="pointer-events-none absolute inset-0 bg-grid-pattern-dense opacity-60"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <span className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
            [ 03 — GET STARTED ]
          </span>
          <h3 className="max-w-[18ch] text-[clamp(1.9rem,5.4vw,3.6rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.04em] text-ink">
            Put your school online with VidyaSetu ERP.
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Pick a service, we build and deploy it — website, admissions, attendance, fees and your
            branded Android app.
          </p>

          <div className={`mt-9 grid max-w-2xl gap-px border bg-line/15 sm:grid-cols-2 ${HAIRLINE}`}>
            <Link
              to="/contact"
              className="group flex items-center justify-between gap-3 bg-gold-bright px-6 py-4 text-xs font-bold uppercase tracking-wider text-deep transition-colors hover:bg-deep hover:text-gold-bright"
            >
              <span>Start a project</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/services"
              className={`group flex items-center justify-between gap-3 bg-canvas px-6 py-4 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-canvas`}
            >
              <span>See all services</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Information cells ─── */}
      <div className="mx-auto max-w-[1400px] px-4 pb-8 sm:px-6 lg:px-8">
        <div className={`grid gap-px border bg-line/15 md:grid-cols-12 ${HAIRLINE}`}>
          {/* Brand */}
          <div className="bg-canvas p-7 md:col-span-6">
            <Link to="/" className="group inline-flex items-center gap-3">
              <span className={`flex h-10 w-10 items-center justify-center overflow-hidden border bg-surface p-1 ${HAIRLINE}`}>
                <img
                  src="/mabbele-logo.png"
                  alt="Mabbelle Studios Logo"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-ink">
                Mabbelle{' '}
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                  Studios
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              A bespoke digital design and software studio rooted in Northeast India. We build VidyaSetu
              school management systems and fast, modern websites for growing institutions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2 border-t pt-5 font-mono text-[11px] tracking-wider text-brand uppercase">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              <span>Imphal, Manipur · 7 Sisters, Northeast India</span>
            </div>
          </div>

          {/* Explore */}
          <div className="bg-canvas p-7 md:col-span-3">
            <h4 className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {EXPLORE_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group flex items-center gap-2 text-[13px] text-ink/80 transition-colors hover:text-brand"
                  >
                    <span className="h-px w-3 bg-line/15 transition-all duration-300 group-hover:w-5 group-hover:bg-brand" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What we build */}
          <div className="bg-canvas p-7 md:col-span-3">
            <h4 className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
              What We Build
            </h4>
            <ul className="space-y-4">
              {BUILD_ITEMS.map(([title, detail]) => (
                <li key={title} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[3] text-leaf" aria-hidden="true" />
                  <span className="text-[13px] leading-snug">
                    <strong className="font-bold text-ink">{title}:</strong>{' '}
                    <span className="text-muted">{detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div
          className={`mt-8 flex flex-col items-start justify-between gap-4 border px-6 py-5 sm:flex-row sm:items-center ${HAIRLINE}`}
        >
          <span className="font-mono text-[11px] tracking-wider text-muted uppercase">
            &copy; {currentYear} Mabbelle Studios · Imphal, Manipur
          </span>

          <div className="flex items-center gap-5">
            <span className="hidden font-mono text-[11px] tracking-wider text-muted uppercase sm:inline">
              Simple terms · Real working software
            </span>
            <button
              onClick={scrollToTop}
              className={`inline-flex cursor-pointer items-center gap-2 border bg-surface px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-canvas ${HAIRLINE}`}
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

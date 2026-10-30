import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft } from 'lucide-react'

const HAIRLINE = 'border-line/15'

export const NotFoundPage: React.FC = () => {
  return (
    <section
      className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8"
      aria-label="Page not found"
    >
      <div className={`border bg-canvas p-8 sm:p-12 ${HAIRLINE}`}>
        <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
          [ 404 — ROUTE NOT FOUND ]
        </span>
        <h1 className="mt-4 max-w-xl text-[2.2rem] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-ink sm:text-[3.2rem]">
          This page doesn’t exist or has moved.
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
          Check the address or head back to the studio homepage, our service packages, or live project demos.
        </p>

        <div className={`mt-8 grid max-w-xl gap-px border bg-line/15 sm:grid-cols-2 ${HAIRLINE}`}>
          <Link
            to="/"
            className="inline-flex items-center justify-between gap-3 bg-gold-bright px-6 py-4 text-xs font-bold uppercase tracking-wider text-deep transition-colors hover:bg-deep hover:text-gold-bright"
          >
            <span className="inline-flex items-center gap-2">
              <ChevronLeft className="h-4 w-4 stroke-[2.5]" />
              Back to home
            </span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-between gap-3 bg-canvas px-6 py-4 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-canvas"
          >
            <span>Explore services</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage

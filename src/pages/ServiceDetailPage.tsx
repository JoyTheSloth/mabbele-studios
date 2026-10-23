import React from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, ChevronLeft, ExternalLink } from 'lucide-react'
import { OFFERS, getOffer } from '../data/offers'

const HAIRLINE = 'border-line/15'

const FADE_UP = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } }
}

const SectionLabel: React.FC<{ children: React.ReactNode; aside?: string }> = ({ children, aside }) => (
  <div className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b pb-3 ${HAIRLINE}`}>
    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
      {children}
    </span>
    {aside && <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{aside}</span>}
  </div>
)

const CheckList: React.FC<{ items: string[]; tone?: 'light' | 'dark' }> = ({ items, tone = 'light' }) => (
  <ul className="space-y-2.5">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5 text-[13px] leading-snug">
        <span
          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center ${
            tone === 'dark' ? 'bg-gold-bright/20 text-gold-bright' : 'bg-leaf/15 text-leaf'
          }`}
        >
          <Check className="h-2.5 w-2.5 stroke-[3]" />
        </span>
        <span className={tone === 'dark' ? 'text-white/90' : 'text-ink/85'}>{item}</span>
      </li>
    ))}
  </ul>
)

const ChargeRows: React.FC<{ rows: { title: string; price: string; note: string }[] }> = ({ rows }) => (
  <div className={`mt-5 border ${HAIRLINE}`}>
    {rows.map((row, i) => (
      <div
        key={row.title}
        className={`px-6 py-5 ${i < rows.length - 1 ? `border-b ${HAIRLINE}` : ''}`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <span className="text-sm font-bold text-ink">{row.title}</span>
          <span className="font-mono text-xs font-bold text-brand">{row.price}</span>
        </div>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{row.note}</p>
      </div>
    ))}
  </div>
)

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const offer = getOffer(slug)

  if (!offer) return <Navigate to="/services" replace />

  const { detail } = offer
  const others = OFFERS.filter((item) => item.slug !== offer.slug)

  return (
    <section
      className="relative mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 sm:pt-28 lg:px-8"
      aria-label={`${offer.title} details`}
    >
      {/* ─── Back ─── */}
      <Link
        to="/services"
        className={`inline-flex items-center gap-1.5 border px-3.5 py-2 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors hover:bg-ink hover:text-canvas ${HAIRLINE}`}
      >
        <ChevronLeft className="h-3 w-3" />
        All services
      </Link>

      {/* ─── Header ─── */}
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        animate="visible"
        className={`mt-6 border-b pb-8 ${HAIRLINE}`}
      >
        <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
          [ Card {offer.index} — {offer.eyebrow} ]
        </span>
        <h1 className="mt-4 text-[2rem] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-ink break-words sm:text-[3rem] lg:text-[3.8rem]">
          {offer.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-2">
          <span className="text-[2.6rem] leading-none font-extrabold tracking-[-0.035em] text-brand">
            {offer.price}
          </span>
          <span className="pb-1 font-mono text-[10px] uppercase tracking-wider text-muted">
            {offer.priceLabel}
          </span>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{detail.intro}</p>

        {offer.samples && (
          <div className="mt-7 flex flex-wrap gap-3">
            {offer.samples.map((sample) => (
              <a
                key={sample.href}
                href={sample.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/demo inline-flex items-center justify-between gap-6 border bg-deep px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand ${HAIRLINE}`}
              >
                <span>{sample.label} — built by us</span>
                <ExternalLink className="h-4 w-4 stroke-[2.5] transition-transform group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5" />
              </a>
            ))}
          </div>
        )}
      </motion.div>

      {/* ─── Licence points ─── */}
      {detail.points && (
        <div className="mt-8 grid grid-cols-1 gap-px border bg-line/15 sm:grid-cols-3">
          {detail.points.map((point) => (
            <div key={point} className="bg-deep px-6 py-6 text-white">
              <p className="text-[13px] font-semibold leading-snug text-white/90">{point}</p>
            </div>
          ))}
        </div>
      )}

      {/* ─── Included ─── */}
      <div className="mt-10">
        <SectionLabel aside={`${detail.includes.length} items`}>{detail.includesTitle}</SectionLabel>
        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
          <CheckList items={detail.includes.slice(0, Math.ceil(detail.includes.length / 2))} />
          <CheckList items={detail.includes.slice(Math.ceil(detail.includes.length / 2))} />
        </div>
      </div>

      {/* ─── Additional charges ─── */}
      {detail.charges && (
        <div className="mt-12">
          <SectionLabel aside="One-time">Additional charges</SectionLabel>
          <ChargeRows rows={detail.charges} />
        </div>
      )}

      {/* ─── Total + payment schedule ─── */}
      {detail.total && detail.milestones && (
        <div className={`mt-8 grid grid-cols-1 gap-px border bg-line/15 lg:grid-cols-12 ${HAIRLINE}`}>
          <div className="flex flex-col justify-center bg-gallery/10 px-7 py-8 lg:col-span-4">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
              Total investment
            </span>
            <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1">
              <span className="text-[2.4rem] leading-none font-extrabold tracking-[-0.035em] text-ink">
                {detail.total.amount}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                {detail.total.note}
              </span>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">{detail.total.breakdown}</p>
          </div>

          <div className="bg-canvas px-7 py-8 lg:col-span-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-lg font-bold text-ink">Payment schedule</h2>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                Flexible · milestone-based
              </span>
            </div>
            <div className="mt-4">
              {detail.milestones.map((milestone, i) => (
                <div
                  key={milestone.stage}
                  className={`grid grid-cols-[1.75rem_1fr] items-baseline gap-x-4 gap-y-1 py-3 sm:grid-cols-[1.75rem_7.5rem_1fr] ${
                    i < detail.milestones!.length - 1 ? `border-b ${HAIRLINE}` : ''
                  }`}
                >
                  <span className="font-mono text-[11px] text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-bold text-brand tabular-nums">{milestone.amount}</span>
                  <span className="col-span-2 text-[13px] leading-snug text-ink/85 sm:col-span-1">
                    {milestone.stage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── Support plans ─── */}
      {detail.plans && (
        <div className="mt-12">
          <SectionLabel aside="Optional · after the first 45 days">Maintenance and support</SectionLabel>
          <div className={`mt-5 grid grid-cols-1 gap-px border bg-line/15 md:grid-cols-2 ${HAIRLINE}`}>
            {detail.plans.map((plan) => (
              <article
                key={plan.title}
                className={`flex flex-col ${plan.featured ? 'bg-deep text-white' : 'bg-canvas text-ink'}`}
              >
                <div
                  className={`flex items-center justify-between gap-3 border-b px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em] ${
                    plan.featured ? 'border-white/15' : HAIRLINE
                  }`}
                >
                  <span className={plan.featured ? 'text-white/55' : 'text-muted'}>Support plan</span>
                  {plan.featured && <span className="font-bold text-gold-bright">Recommended</span>}
                </div>
                <div className="px-6 py-6">
                  <h3 className="text-base font-bold tracking-tight">{plan.title}</h3>
                  <span
                    className={`mt-2 block font-mono text-[11px] font-bold uppercase tracking-wider ${
                      plan.featured ? 'text-gold-bright' : 'text-brand'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <CheckList items={plan.features} tone={plan.featured ? 'dark' : 'light'} />
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* ─── Extras (websites) ─── */}
      {detail.extras && (
        <div className="mt-12">
          <SectionLabel>Good to know</SectionLabel>
          <ChargeRows rows={detail.extras} />
        </div>
      )}

      {/* ─── Why ─── */}
      {detail.why && (
        <div className={`mt-12 border p-7 ${HAIRLINE}`}>
          <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
            [ Why VidyaSetu ]
          </span>
          <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {detail.why.map(([title, body]) => (
              <div key={title}>
                <h3 className="text-[13px] font-bold text-ink">{title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── Footnote + CTA ─── */}
      <p className={`mt-8 border-t pt-5 text-[11px] leading-relaxed text-muted ${HAIRLINE}`}>
        {detail.footnote}
      </p>

      <div
        className={`mt-8 flex flex-col items-start justify-between gap-5 border bg-surface p-6 sm:flex-row sm:items-center sm:p-7 ${HAIRLINE}`}
      >
        <div>
          <h2 className="text-sm font-bold text-ink">Ready to talk about {offer.title}?</h2>
          <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted">
            Send the brief and we come back within one working day with what fits and what it costs.
          </p>
        </div>
        <button
          onClick={() => navigate('/contact', { state: { service: offer.enquiryLabel } })}
          className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap bg-deep px-6 py-3 text-xs font-bold uppercase tracking-wider text-canvas transition-colors hover:bg-brand"
        >
          <span>Start an enquiry</span>
          <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
        </button>
      </div>

      {/* ─── Other cards ─── */}
      <div className="mt-10">
        <SectionLabel>Also from the studio</SectionLabel>
        <div className={`mt-5 grid grid-cols-1 gap-px border bg-line/15 sm:grid-cols-2 ${HAIRLINE}`}>
          {others.map((other) => (
            <Link
              key={other.slug}
              to={`/services/${other.slug}`}
              className="group/other flex items-center justify-between gap-4 bg-canvas px-6 py-6 transition-colors hover:bg-line/[0.05]"
            >
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                  {other.eyebrow}
                </span>
                <span className="mt-1 block text-sm font-bold text-ink group-hover/other:text-brand">
                  {other.title}
                </span>
                <span className="mt-1 block font-mono text-[11px] text-brand">
                  {other.priceLabel === 'Starting from' ? 'from ' : ''}
                  {other.price}
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover/other:text-brand" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceDetailPage

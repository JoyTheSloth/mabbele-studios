import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, ExternalLink, ShieldCheck } from 'lucide-react'
import { OFFERS, type Offer } from '../data/offers'

interface ServicesProps {
  onSelectService: (serviceName: string) => void
}

const HAIRLINE = 'border-line/15'

const STAGGER_CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
}

const FADE_UP = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } }
}

const OfferCard: React.FC<{ offer: Offer; featured: boolean }> = ({ offer, featured }) => (
  <motion.article
    variants={FADE_UP}
    className={`flex flex-col overflow-hidden border ${HAIRLINE} ${featured ? 'bg-deep text-white' : 'bg-canvas text-ink'}`}
  >
    <div
      className={`flex items-center justify-between gap-3 border-b px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em] ${
        featured ? 'border-white/15' : HAIRLINE
      }`}
    >
      <span className={featured ? 'text-white/55' : 'text-muted'}>
        Card {offer.index} · {offer.eyebrow}
      </span>
      {featured && <span className="font-bold text-gold-bright">Main offering</span>}
    </div>

    <div className="flex flex-1 flex-col px-6 py-7">
      <h3 className={`text-lg font-bold tracking-tight sm:text-xl ${featured ? 'text-white' : 'text-ink'}`}>
        {offer.title}
      </h3>

      <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
        <span
          className={`text-[2.15rem] leading-none font-extrabold tracking-[-0.035em] ${
            featured ? 'text-gold-bright' : 'text-ink'
          }`}
        >
          {offer.price}
        </span>
        <span
          className={`font-mono text-[10px] uppercase tracking-wider ${
            featured ? 'text-white/50' : 'text-muted'
          }`}
        >
          {offer.priceLabel}
        </span>
      </div>

      <p className={`mt-4 text-[13px] leading-relaxed ${featured ? 'text-white/75' : 'text-muted'}`}>
        {offer.summary}
      </p>

      <ul
        className={`mt-5 space-y-2.5 border-t pt-5 ${featured ? 'border-white/15' : HAIRLINE}`}
      >
        {offer.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[13px] leading-snug">
            <span
              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center ${
                featured ? 'bg-gold-bright/20 text-gold-bright' : 'bg-leaf/15 text-leaf'
              }`}
            >
              <Check className="h-2.5 w-2.5 stroke-[3]" />
            </span>
            <span className={featured ? 'text-white/90' : 'text-ink/85'}>{item}</span>
          </li>
        ))}
      </ul>

{offer.samples && (
        <div className="mt-5 flex flex-col gap-2">
          {offer.samples.map((sample) => (
            <a
              key={sample.href}
              href={sample.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/sample inline-flex items-center gap-3 border px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] underline-offset-4 transition-colors hover:underline ${
                featured ? 'border-white/15 text-gold-bright' : 'border-line/15 text-brand'
              }`}
            >
              {sample.image && (
                <img
                  src={sample.image}
                  alt=""
                  loading="lazy"
                  className="h-10 w-14 shrink-0 object-cover"
                />
              )}
              <ExternalLink className="h-3 w-3 shrink-0 stroke-[2.5]" />
              <span>{sample.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>

    <div className={`border-t px-6 py-4 ${featured ? 'border-white/15 bg-black/25' : 'bg-gallery/10 ' + HAIRLINE}`}>
      <Link
        to={`/services/${offer.slug}`}
        className={`group/link inline-flex w-full items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
          featured ? 'text-gold-bright hover:bg-white hover:text-deep' : 'text-ink hover:bg-ink hover:text-canvas'
        }`}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2.5">
          <span>See what’s inside</span>
          <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
        </span>
      </Link>
    </div>
  </motion.article>
)

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8"
      aria-label="Services and pricing"
    >
      {/* ─── Header cell ─── */}
      <div className={`mb-10 border-b pb-7 ${HAIRLINE}`}>
        <span className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
          [ 01 — SERVICES · SCHOOL ERP &amp; CUSTOM WEBSITES ]
        </span>
        <h2 className="mb-6 text-[2.1rem] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-ink break-words sm:text-[3.1rem] md:text-[4rem] lg:text-[4.6rem]">
          School software you own outright. Websites from ₹4,999.
        </h2>
        <div className="flex flex-col gap-4 font-mono text-xs tracking-wider text-muted uppercase sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-leaf animate-pulse" />
            <span>Rooted in Imphal, Manipur · Northeast India</span>
          </div>
          <p className="max-w-2xl font-sans text-sm normal-case sm:text-base">
            Three things we build, each with its own card. Open a card to see the full scope, every charge
            and how the payments are staged.
          </p>
        </div>
      </div>

      {/* ─── Three offering cards ─── */}
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:gap-6"
      >
        {OFFERS.map((offer, i) => (
          <OfferCard key={offer.slug} offer={offer} featured={i === 0} />
        ))}
      </motion.div>

      {/* ─── Collaboration reassurance ─── */}
      <div
        className={`mt-8 flex flex-col items-start justify-between gap-5 border p-6 sm:flex-row sm:items-center sm:p-7 ${HAIRLINE}`}
      >
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold/15 text-gold">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-ink">Simple, safe collaboration</h4>
            <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted">
              Signed contract and a mutual NDA that protects student and staff data. The ERP licence is paid
              against milestones; websites take a 30% advance to start.
            </p>
          </div>
        </div>

        <button
          onClick={() => onSelectService('Other')}
          className={`inline-flex cursor-pointer items-center gap-1.5 border px-5 py-2.5 text-xs font-bold text-ink transition-colors hover:bg-ink hover:text-canvas ${HAIRLINE}`}
        >
          <span>Ask a question</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  )
}

export default Services

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Compass, Terminal, Rocket } from 'lucide-react'
import { NORTHEAST_OUTLINE_PATH, NORTHEAST_OUTLINE_VIEWBOX } from './northeastIndiaOutline'

const HAIRLINE = 'border-line/15'

const STEPS = [
  {
    step: '01',
    title: 'Discover',
    icon: Search,
    description:
      'We sit with the problem — registers, WhatsApp groups, Excel sheets, front-desk chaos — and map what actually happens in your school or business each day.',
    deliverable: 'Written scope · honest timeline',
  },
  {
    step: '02',
    title: 'Design',
    icon: Compass,
    description:
      'Screens before code. Information architecture, flows and visual direction reviewed with you, so nothing expensive is discovered after it is built.',
    deliverable: 'Clickable design · fixed quote',
  },
  {
    step: '03',
    title: 'Build',
    icon: Terminal,
    description:
      'One team writes the design and the code — no handoff losses. Real data, role-based access, payments and reports tested against your actual workflow.',
    deliverable: 'Weekly demo link',
  },
  {
    step: '04',
    title: 'Launch',
    icon: Rocket,
    description:
      'Domain, hosting, backups and staff training handled. We stay reachable after go-live, because software that nobody maintains quietly dies.',
    deliverable: 'Live site · source handover',
  },
]

const FACTS: [string, string][] = [
  ['5+', 'Startups built with'],
  ['100%', 'Design & code in-house'],
  ['Quality', 'Before volume, always'],
  ['Imphal', 'Serving the 7 sisters'],
]

const TERMS = [
  ['Agreement', 'Plain-language contract before any work starts.'],
  ['Privacy', 'Mutual NDA — your student and customer data stays yours.'],
  ['Payment', '30% advance to begin, rest on delivery. No surprises.'],
  ['Ownership', 'Source code and accounts handed over to you.'],
]

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8"
      aria-label="How Mabbelle Studios works"
    >
      {/* ─── Section header ─── */}
      <div className={`mb-10 border-b pb-7 ${HAIRLINE}`}>
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand"
        >
          [ 01 — HOW WE WORK ]
        </motion.span>
        <h2 className="mb-6 text-[2.1rem] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-ink break-words sm:text-[3.1rem] md:text-[4rem] lg:text-[4.6rem]">
          Software the Northeast deserves — built properly.
        </h2>
        <div className="flex flex-col gap-4 font-mono text-[11px] tracking-wider text-muted uppercase sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-leaf animate-pulse" />
            <span>Mutual NDA · Plain contract · 30% upfront</span>
          </div>
          <span className="text-brand font-semibold">Step-by-step workflow ↓</span>
        </div>
      </div>

      {/* ─── Who we are ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`grid gap-px border bg-line/15 lg:grid-cols-12 ${HAIRLINE}`}
      >
        <div className="bg-canvas p-7 sm:p-9 lg:col-span-7">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
            Why we build for the Northeast
          </span>
          <p className="mt-4 text-lg leading-snug font-bold tracking-tight text-ink sm:text-[1.4rem]">
            Startups and businesses here deserve their own website and software — not a borrowed
            template.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
            Mabbelle Studios exists to help schools, cafes and growing businesses across Manipur and the
            seven sisters put up a real digital presence: a fast website of their own, and simple
            software that replaces registers, Excel sheets and endless WhatsApp threads.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
            We have designed and shipped with more than five startups, and we keep the studio deliberately
            focused so every project gets senior attention on both design and code. That is the whole
            pitch — quality work, delivered properly, from a team that is actually here.
          </p>
        </div>

        <div className="grid gap-px bg-line/15 sm:grid-cols-2 lg:col-span-5">
          {FACTS.map(([value, label]) => (
            <div key={label} className="flex flex-col justify-end bg-canvas p-6">
              <span className="text-[2rem] leading-none font-extrabold tracking-[-0.04em] text-ink">
                {value}
              </span>
              <span className="mt-2 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ─── Four phases ─── */}
      <div className={`mt-8 grid gap-px border bg-line/15 md:grid-cols-2 lg:grid-cols-4 ${HAIRLINE}`}>
        {STEPS.map((item, idx) => {
          const Icon = item.icon
          const isLast = idx === STEPS.length - 1
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="flex flex-col bg-canvas"
            >
              <div
                className={`flex items-center justify-between border-b px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em] ${HAIRLINE}`}
              >
                <span className="text-muted">Phase {item.step}</span>
                <Icon className={`h-4 w-4 ${isLast ? 'text-gold' : 'text-brand'}`} />
              </div>

              <div className="flex flex-1 flex-col px-6 py-7">
                <span className="text-[2.6rem] leading-none font-extrabold tracking-[-0.05em] text-ink/12">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-muted">
                  {item.description}
                </p>
                <p
                  className={`mt-6 border-t pt-4 font-mono text-[10px] tracking-wider text-brand uppercase ${HAIRLINE}`}
                >
                  {item.deliverable}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* ─── Engagement terms ─── */}
      <div className={`mt-8 border ${HAIRLINE}`}>
        <div
          className={`flex flex-col gap-1.5 border-b px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${HAIRLINE}`}
        >
          <h3 className="text-sm font-bold text-ink">How we engage</h3>
          <span className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            Same terms for a cafe and a school
          </span>
        </div>
        <div className="grid gap-px bg-line/15 sm:grid-cols-2 lg:grid-cols-4">
          {TERMS.map(([title, detail]) => (
            <div key={title} className="bg-canvas p-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
                {title}
              </span>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Northeast India outline — decorative watermark, no state borders */}
      <svg
        viewBox={NORTHEAST_OUTLINE_VIEWBOX}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
        className="pointer-events-none absolute top-1/2 right-0 w-[300px] -translate-y-1/2 text-ink opacity-[0.09] dark:opacity-[0.13] sm:w-[460px] lg:w-[680px]"
      >
        <path d={NORTHEAST_OUTLINE_PATH} vectorEffect="non-scaling-stroke" />
      </svg>
    </section>
  )
}

export default Process

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const HAIRLINE = 'border-line/15'

const LIVE_URL = 'https://vidya-setu-kappa.vercel.app/'
const LIVE_HOST = 'vidya-setu-kappa.vercel.app'

const MODULES = ['Admin ERP Console', 'Teacher Attendance', 'Parent Fee & Reports', 'Student Portal']

const FEATURES = [
  'Institutional website — academics, philosophy, campus tour and academic wings',
  'Admissions flow from LKG to Class 11 Science and Commerce',
  'Live notices and events board with a circular ticker',
  'Role-based portals so staff, parents and students see only their own data',
  'Attendance tracking, digital notes and subject-wise reports',
  'Fee status and report cards surfaced directly to parents',
]

const STATS: [string, string][] = [
  ['32+', 'Years'],
  ['CBSE', 'Affiliated'],
  ['K-12', 'Streams'],
  ['STEM', 'Robotics lab'],
]

const STACK = ['React', 'TypeScript', 'Vite', 'Tailwind CSS']

const CAFE_URL = '/cafe-demo/index.html'

const CAFE_FEATURES = [
  'Editorial hero and type-led layout, drawn entirely as inline vector art',
  'Filterable menu with prices, rooms list and visiting hours',
  'Live open or closed status for the current time of day',
  'Phone-first navigation that opens as a full-screen menu',
]

const CAFE_STACK = ['HTML', 'CSS', 'Vanilla JS']

const MENU_URL = '/lazeez-demo/index.html'

const MENU_FEATURES = [
  'Fine-dining hero and a printed menu card with dotted price leaders',
  'Four sections — biryani, Kashmiri, Chinese and continental',
  'Sticky menu bar, signature dishes and a reservation panel',
  'Real dish photography, sourced and optimised as WebP',
]

const MENU_STACK = ['HTML', 'CSS', 'Vanilla JS']

export const Work: React.FC = () => {
  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8"
      aria-label="Selected work"
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
          [ 01 — SELECTED WORK · LIVE DEPLOYMENT ]
        </motion.span>
        <h2 className="mb-6 text-[2.1rem] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-ink break-words sm:text-[3.1rem] md:text-[4rem] lg:text-[4.6rem]">
          Real problems. Real working software.
        </h2>
        <div className="flex flex-col gap-3 font-mono text-[11px] tracking-wider text-muted uppercase sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 bg-leaf animate-pulse" />
            <span>Live at {LIVE_HOST}</span>
          </span>
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-brand transition-colors hover:text-gold"
          >
            Open the portal
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* ─── Featured project ─── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`grid gap-px border bg-line/15 lg:grid-cols-12 ${HAIRLINE}`}
      >
        {/* Preview cell */}
        <a
          href={LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col bg-deep lg:col-span-7"
          aria-label={`Open ${LIVE_HOST} in a new tab`}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-3 border-b border-white/15 px-5 py-3">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 bg-white/25" />
              <span className="h-2 w-2 bg-white/25" />
              <span className="h-2 w-2 bg-white/25" />
            </span>
            <span className="flex-1 truncate border border-white/15 bg-black/25 px-3 py-1 font-mono text-[10px] tracking-wider text-white/60">
              {LIVE_HOST}
            </span>
            <span className="hidden font-mono text-[10px] tracking-wider text-gold-bright uppercase sm:inline">
              Live
            </span>
          </div>

          {/* Live screenshot preview, shown at its natural aspect ratio */}
          <img
            src="/vidyasetu-preview.webp"
            alt="Vidyasetu ERP — Bhaktivedanta Institute Mission Hr. Sec. School homepage"
            loading="lazy"
            className="block w-full"
          />

          {/* Caption panel fills the remaining cell height */}
          <div className="flex flex-1 flex-col justify-between border-t border-white/15">
            <div className="grid flex-1 auto-rows-fr grid-cols-2 gap-px bg-white/15">
              {MODULES.map((m) => (
                <span
                  key={m}
                  className="flex items-center bg-deep px-4 py-3 font-mono text-[10px] tracking-wider text-white/70 uppercase transition-colors group-hover:text-white"
                >
                  {m}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 bg-deep px-5 py-3 font-mono text-[10px] tracking-wider text-white/45 uppercase">
              <span>Website · ERP · Portals</span>
              <span className="inline-flex items-center gap-1 text-gold-bright transition-transform group-hover:translate-x-0.5">
                Visit site <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </a>

        {/* Details cell */}
        <div className="flex flex-col justify-between bg-canvas p-7 sm:p-9 lg:col-span-5">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
              School Website + ERP
            </span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Vidyasetu ERP
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              The official website and management portal for a CBSE-affiliated senior secondary school,
              built to replace paper registers and scattered spreadsheets.
            </p>

            <ul className={`mt-7 space-y-2.5 border-t pt-6 ${HAIRLINE}`}>
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-snug">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center bg-leaf/15 text-leaf">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </span>
                  <span className="text-ink/85">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-1.5">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className={`border px-2.5 py-1 font-mono text-[10px] tracking-wider text-brand ${HAIRLINE}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 bg-gold-bright px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-deep transition-colors hover:bg-deep hover:text-gold-bright"
              >
                <span>View live site</span>
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
              </a>
              <Link
                to="/services"
                className={`inline-flex flex-1 items-center justify-center gap-2 border bg-surface px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-canvas ${HAIRLINE}`}
              >
                <span>See packages</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Sample build — cafe site ─── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`mt-16 grid gap-px border bg-line/15 lg:grid-cols-12 ${HAIRLINE}`}
      >
        {/* Preview cell */}
        <a
          href={CAFE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col bg-deep lg:col-span-7"
          aria-label="Open the MOKSA cafe sample site in a new tab"
        >
          <div className="flex items-center gap-3 border-b border-white/15 px-5 py-3">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 bg-white/25" />
              <span className="h-2 w-2 bg-white/25" />
              <span className="h-2 w-2 bg-white/25" />
            </span>
            <span className="flex-1 truncate border border-white/15 bg-black/25 px-3 py-1 font-mono text-[10px] tracking-wider text-white/60">
              /cafe-demo/index.html
            </span>
            <span className="hidden font-mono text-[10px] tracking-wider text-gold-bright uppercase sm:inline">
              Sample
            </span>
          </div>

          <img
            src="/moksa-preview.webp"
            alt="MOKSA Coffee House sample site — hero reading 'slow coffee, loud music' beside an arched window illustration"
            loading="lazy"
            className="block w-full"
          />

          <div className="flex flex-1 items-center justify-between gap-4 border-t border-white/15 bg-deep px-5 py-3 font-mono text-[10px] tracking-wider text-white/45 uppercase">
            <span>One page · Vector art · Smooth scroll</span>
            <span className="inline-flex items-center gap-1 text-gold-bright transition-transform group-hover:translate-x-0.5">
              Open sample <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </a>

        {/* Details cell */}
        <div className="flex flex-col justify-between bg-canvas p-7 sm:p-9 lg:col-span-5">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
              Cafe Website · Sample build
            </span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              MOKSA Coffee House
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A one-page site for a specialty coffee house — menu, rooms and visiting hours in a single
              editorial scroll, built as a live example of the cafe website package.
            </p>

            <ul className={`mt-7 space-y-2.5 border-t pt-6 ${HAIRLINE}`}>
              {CAFE_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-snug">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center bg-leaf/15 text-leaf">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </span>
                  <span className="text-ink/85">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-1.5">
              {CAFE_STACK.map((tech) => (
                <span
                  key={tech}
                  className={`border px-2.5 py-1 font-mono text-[10px] tracking-wider text-brand ${HAIRLINE}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={CAFE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 bg-gold-bright px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-deep transition-colors hover:bg-deep hover:text-gold-bright"
              >
                <span>View sample</span>
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
              </a>
              <Link
                to="/services/business-cafe-website"
                className={`inline-flex flex-1 items-center justify-center gap-2 border bg-surface px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-canvas ${HAIRLINE}`}
              >
                <span>See the package</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Sample build — restaurant menu card ─── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`mt-16 grid gap-px border bg-line/15 lg:grid-cols-12 ${HAIRLINE}`}
      >
        {/* Preview cell */}
        <a
          href={MENU_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col bg-deep lg:col-span-7 lg:order-2"
          aria-label="Open the Lazeez-a-Gulmarg sample site in a new tab"
        >
          <div className="flex items-center gap-3 border-b border-white/15 px-5 py-3">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 bg-white/25" />
              <span className="h-2 w-2 bg-white/25" />
              <span className="h-2 w-2 bg-white/25" />
            </span>
            <span className="flex-1 truncate border border-white/15 bg-black/25 px-3 py-1 font-mono text-[10px] tracking-wider text-white/60">
              /lazeez-demo/index.html
            </span>
            <span className="hidden font-mono text-[10px] tracking-wider text-gold-bright uppercase sm:inline">
              Sample
            </span>
          </div>

          <img
            src="/lazeez-preview.webp"
            alt="Lazeez-a-Gulmarg sample site — the wordmark beside a photograph of dum biryani"
            loading="lazy"
            className="block w-full"
          />

          <div className="flex flex-1 items-center justify-between gap-4 border-t border-white/15 bg-deep px-5 py-3 font-mono text-[10px] tracking-wider text-white/45 uppercase">
            <span>Menu card · 4 cuisines · Photography</span>
            <span className="inline-flex items-center gap-1 text-gold-bright transition-transform group-hover:translate-x-0.5">
              Open sample <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </a>

        {/* Details cell */}
        <div className="flex flex-col justify-between bg-canvas p-7 sm:p-9 lg:col-span-5 lg:order-1">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
              Restaurant Website · Sample build
            </span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Lazeez-a-Gulmarg
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A menu card site for a Kashmiri restaurant — four cuisines laid out like a printed
              card, with dish photography, hours and a reservation panel.
            </p>

            <ul className={`mt-7 space-y-2.5 border-t pt-6 ${HAIRLINE}`}>
              {MENU_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-snug">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center bg-leaf/15 text-leaf">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </span>
                  <span className="text-ink/85">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-1.5">
              {MENU_STACK.map((tech) => (
                <span
                  key={tech}
                  className={`border px-2.5 py-1 font-mono text-[10px] tracking-wider text-brand ${HAIRLINE}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={MENU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 bg-gold-bright px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-deep transition-colors hover:bg-deep hover:text-gold-bright"
              >
                <span>View sample</span>
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
              </a>
              <Link
                to="/services/business-cafe-website"
                className={`inline-flex flex-1 items-center justify-center gap-2 border bg-surface px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-canvas ${HAIRLINE}`}
              >
                <span>See the package</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Deployment facts strip ─── */}
      <div className={`mt-8 grid gap-px border bg-line/15 sm:grid-cols-2 lg:grid-cols-4 ${HAIRLINE}`}>
        {STATS.map(([value, label]) => (
          <div key={label} className="bg-canvas px-6 py-5">
            <span className="block text-xl font-extrabold tracking-tight text-ink">{value}</span>
            <span className="mt-1 block font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work

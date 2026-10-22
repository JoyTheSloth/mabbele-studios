import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Play, Globe, Layout, Smartphone, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import TextType from './TextType'
import ImageTrail from './ImageTrail'
import { NORTHEAST_OUTLINE_PATH, NORTHEAST_OUTLINE_VIEWBOX } from './northeastIndiaOutline'

/** Repeating one source gives the trail several flowers on screen at once. */
const FLOWER_TRAIL_ITEMS = Array.from({ length: 8 }, () => '/mabbele-flower-trail.webp')

const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  }
}

const FADE_IN = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
}

const HAIRLINE = 'border-line/15'

/** Joydeep's project archive — the portfolio CTA points here rather than the in-app Work page. */
const PORTFOLIO_URL = 'https://joydeepdas-portfolio.vercel.app/projects'

const CAPABILITIES = [
  { icon: Globe, label: 'Brand Websites' },
  { icon: Layout, label: 'Web Applications' },
  { icon: Smartphone, label: 'Digital Products' },
  { icon: Sparkles, label: 'Interactive 3D & AI' },
]

export const Hero: React.FC = () => {
  const navigate = useNavigate()

  const handleStartProject = () => navigate('/contact')

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col bg-canvas pt-14"
      aria-label="Mabbelle Studios introduction"
    >
      {/* ─── Row 1 · Display headline cell ─── */}
      <div className={`relative overflow-hidden border-b px-4 pt-9 pb-8 sm:px-6 lg:px-8 ${HAIRLINE}`}>
        <div
          className="pointer-events-none absolute inset-0 bg-grid-pattern-dense opacity-70"
          aria-hidden="true"
        />

        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-[1400px]"
        >
          {/* Monospace status row */}
          <motion.div
            variants={FADE_UP}
            className="mb-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.18em] text-muted uppercase sm:text-[11px]"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-leaf animate-pulse" />
              Digital Product &amp; Web Design Studio
            </span>
            <span className="text-brand">Imphal / North-East India</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={FADE_UP}
            className="max-w-[16ch] text-[clamp(2.35rem,8vw,7rem)] leading-[0.92] font-extrabold tracking-[-0.045em] text-ink"
          >
            We help brands build <span className="text-brand">websites</span> &amp;{' '}
            <span className="text-gold-bright">applications</span>{' '}
            <TextType
              as="span"
              prefix="that "
              text={['captivate.', 'convert.', 'scale.', 'endure.']}
              textColors={[
                'var(--accent-cyan)',
                'var(--accent-gold-bright)',
                'var(--accent-teal)',
                'var(--accent-cyan)',
              ]}
              typingSpeed={75}
              deletingSpeed={40}
              pauseDuration={1800}
              initialDelay={900}
              typeEffect="fade"
              cursorStyle="bar"
              cursorColor="var(--accent-cyan)"
              cursorGlide
            />
          </motion.h1>
        </motion.div>
      </div>

      {/* ─── Row 2 · Two-cell grid ─── */}
      <div className="grid flex-1 lg:grid-cols-2">
        {/* Left cell · studio visual */}
        <motion.div
          variants={FADE_IN}
          initial="hidden"
          animate="visible"
          className={`relative flex flex-col justify-between overflow-hidden border-b px-4 py-8 sm:px-6 lg:border-r lg:border-b-0 lg:px-8 ${HAIRLINE}`}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/8 blur-[130px]"
            aria-hidden="true"
          />

          {/* Northeast India outline — sits behind the wordmark */}
          <svg
            viewBox={NORTHEAST_OUTLINE_VIEWBOX}
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
            className="pointer-events-none absolute top-1/2 right-[-9%] w-[74%] -translate-y-1/2 text-ink opacity-[0.11] dark:opacity-[0.15]"
          >
            <path d={NORTHEAST_OUTLINE_PATH} vectorEffect="non-scaling-stroke" />
          </svg>

          {/* Corner labels */}
          <div className="relative z-10 flex items-start justify-between gap-4">
            <span className="flex items-center gap-2 border border-line/20 bg-canvas px-2.5 py-1 font-mono text-[10px] tracking-wider text-ink uppercase">
              <span className="h-1.5 w-1.5 bg-leaf animate-ping" />
              Engineered for Growth
            </span>
            <span className="border border-line/20 bg-canvas px-2.5 py-1 text-right font-mono text-[10px] tracking-wider text-muted uppercase">
              Design &amp; AI
            </span>
          </div>

          {/* Studio wordmark */}
          <div className="relative z-10 flex flex-1 flex-col justify-center py-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Imphal · North-East India
            </p>
            <p className="mt-4 text-[clamp(2.4rem,8vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-ink">
              mabbele
              <span className="block text-brand">studios</span>
            </p>
            <p className="mt-5 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <span className="h-px w-6 bg-brand/50" aria-hidden="true" />
              For North-East India
            </p>
          </div>

          {/* Cursor trail · studio flower artwork */}
          <div className="absolute inset-0 z-20">
            <ImageTrail
              items={FLOWER_TRAIL_ITEMS}
              size={140}
              aspectRatio={320 / 271}
              radius={0}
              threshold={70}
              appearScale={0}
              zoom={2.2}
              flash={0.5}
            />
          </div>

          {/* Cell footer */}
          <div className="relative z-10 flex items-center justify-between gap-4">
            <span className="text-[11px] text-muted">
              Crafting digital flagships &amp; apps for brands.
            </span>
            <span className="hidden font-mono text-[10px] tracking-wider text-muted uppercase sm:inline">
              Artisan Technology
            </span>
          </div>
        </motion.div>

        {/* Right cell · proposition, CTAs, capabilities */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-between gap-10 px-4 py-8 sm:px-6 lg:px-8"
        >
          <div>
            <motion.p
              variants={FADE_UP}
              className="max-w-lg text-lg leading-snug text-ink sm:text-xl"
            >
              From iconic brand flagships to high-performance web applications and digital
              platforms — Mabbelle Studios crafts tailor-made digital experiences that turn
              visitors into loyal customers.
            </motion.p>

            <motion.div
              variants={FADE_UP}
              className={`mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-muted uppercase sm:text-[11px]`}
            >
              <span className="h-px w-8 bg-line/30" />
              Bespoke engineering · Rooted in Imphal
            </motion.div>
          </div>

          <motion.div variants={FADE_UP} className="flex flex-col gap-px">
            {/* CTA blocks — hairline gaps form the cell dividers */}
            <div className={`grid gap-px border bg-line/15 sm:grid-cols-2 ${HAIRLINE}`}>
              <motion.button
                whileTap={{ scale: 0.99 }}
                onClick={handleStartProject}
                className="flex items-center justify-between gap-3 bg-gold-bright px-5 py-4 text-[13px] font-bold tracking-wider text-deep uppercase transition-colors duration-200 hover:bg-deep hover:text-canvas"
              >
                <span>Start your project</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </motion.button>

              <motion.a
                whileTap={{ scale: 0.99 }}
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-canvas px-5 py-4 text-[13px] font-bold tracking-wider text-ink uppercase transition-colors duration-200 hover:bg-line/[0.06]"
              >
                <span>View our portfolio</span>
                <Play className="h-3.5 w-3.5 fill-current" />
              </motion.a>
            </div>

            {/* Capability cells */}
            <div className={`grid grid-cols-2 gap-px border bg-line/15 sm:grid-cols-4 ${HAIRLINE}`}>
              {CAPABILITIES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-canvas px-3 py-3 font-mono text-[10px] tracking-wider text-muted uppercase"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-brand" />
                  <span className="truncate">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

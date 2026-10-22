import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react'

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

interface ErpPackage {
  id: string
  step: string
  badge?: string
  featured?: boolean
  title: string
  price: string
  priceNote: string
  inherits?: string
  features: string[]
  footnote?: string
}

const PACKAGES: ErpPackage[] = [
  {
    id: 'vidyasetu-website',
    step: 'Package 01',
    badge: 'Basic',
    title: 'Website',
    price: '₹9,999',
    priceNote: 'One-time setup',
    features: [
      'School homepage and about section',
      'Infrastructure, facilities and gallery',
      'Courses, admissions and contact details',
      'Mobile-responsive design',
      'Google Maps and enquiry form',
      'Domain and hosting setup assistance',
    ],
  },
  {
    id: 'vidyasetu-website-erp',
    step: 'Package 02',
    title: 'Website + ERP',
    price: '₹49,000',
    priceNote: 'One-time setup',
    inherits: 'Everything in Website',
    features: [
      'Admin dashboard',
      'Student and teacher portals',
      'Student profiles and class management',
      'Attendance and timetable',
      'Homework, exams, marks and report cards',
      'Notices and circulars',
      'Role-based access control',
    ],
  },
  {
    id: 'vidyasetu-transactions',
    step: 'Package 03',
    badge: 'Main Offering',
    featured: true,
    title: 'Website + ERP + Transactions',
    price: '₹69,000',
    priceNote: 'One-time setup',
    inherits: 'Everything in Website + ERP',
    features: [
      'Online fee payments',
      'Payment gateway integration',
      'Fee receipts and payment history',
      'Pending fees and dues tracking',
      'Transaction records and reports',
      'Payment status reconciliation',
      'Parent fee dashboard',
    ],
    footnote: 'Payment gateway charges are additional and payable to the provider.',
  },
  {
    id: 'vidyasetu-digital-campus',
    step: 'Package 04',
    badge: 'Premium · Full Package',
    title: 'Complete Digital Campus',
    price: '₹1,19,000',
    priceNote: 'Starting price · one-time setup',
    inherits: 'Everything in Website + ERP + Transactions',
    features: [
      'Android APK with school branding',
      'Parent and student app features',
      'Teacher access and attendance tools',
      'Push notifications',
      'Mobile-friendly dashboards',
      'App and ERP integration',
      'Deployment and initial setup support',
    ],
  },
]

const RECURRING_COSTS: [string, string][] = [
  ['Hosting, backups and maintenance', '₹6,000 – ₹12,000 / year'],
  ['Domain renewal', 'At actual cost'],
  ['SMS / WhatsApp credits', 'At actual cost'],
  ['Payment gateway fees', "Provider's applicable rate"],
  ['Major customisations', 'Quoted separately'],
]

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8"
      aria-label="VidyaSetu ERP packages and pricing"
    >
      {/* ─── Header cell ─── */}
      <div className={`mb-10 border-b pb-7 ${HAIRLINE}`}>
        <span className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
          [ 01 — VIDYASETU ERP · PACKAGES &amp; PRICING ]
        </span>
        <h2 className="mb-6 text-[2.1rem] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-ink break-words sm:text-[3.1rem] md:text-[4rem] lg:text-[4.6rem]">
          VidyaSetu ERP — one campus platform, four clear packages.
        </h2>
        <div className="flex flex-col gap-4 font-mono text-xs tracking-wider text-muted uppercase sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-leaf animate-pulse" />
            <span>Rooted in Imphal, Manipur · Northeast India</span>
          </div>
          <p className="max-w-2xl font-sans text-sm normal-case sm:text-base">
            Start with a school website and scale up to a complete management platform with online fees
            and a branded Android app. Every package below is a one-time setup cost.
          </p>
        </div>
      </div>

      {/* ─── Package grid ─── */}
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className={`grid grid-cols-1 gap-px border bg-line/15 md:grid-cols-2 xl:grid-cols-4 ${HAIRLINE}`}
      >
        {PACKAGES.map((pkg) => (
          <motion.article
            key={pkg.id}
            variants={FADE_UP}
            className={`flex flex-col ${pkg.featured ? 'bg-deep text-white' : 'bg-canvas text-ink'}`}
          >
            {/* Card header strip */}
            <div
              className={`flex items-center justify-between gap-3 border-b px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em] ${
                pkg.featured ? 'border-white/15' : `border-line/15`
              }`}
            >
              <span className={pkg.featured ? 'text-white/55' : 'text-muted'}>{pkg.step}</span>
              {pkg.badge && (
                <span
                  className={`font-bold ${
                    pkg.featured ? 'text-gold-bright' : pkg.id === 'vidyasetu-digital-campus' ? 'text-brand' : 'text-ink'
                  }`}
                >
                  {pkg.badge}
                </span>
              )}
            </div>

            {/* Card body */}
            <div className="flex flex-1 flex-col px-6 py-7">
              <h3 className="text-lg font-bold tracking-tight sm:text-xl">{pkg.title}</h3>

              <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span
                  className={`text-[2.15rem] leading-none font-extrabold tracking-[-0.035em] ${
                    pkg.featured ? 'text-gold-bright' : 'text-ink'
                  }`}
                >
                  {pkg.price}
                </span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider ${
                    pkg.featured ? 'text-white/50' : 'text-muted'
                  }`}
                >
                  {pkg.priceNote}
                </span>
              </div>

              {pkg.inherits && (
                <p
                  className={`mt-5 border-l-2 pl-3 font-mono text-[11px] ${
                    pkg.featured ? 'border-gold-bright text-white/80' : 'border-brand text-brand'
                  }`}
                >
                  {pkg.inherits}
                </p>
              )}

              <ul
                className={`mt-5 space-y-2.5 border-t pt-5 ${
                  pkg.featured ? 'border-white/15' : 'border-line/15'
                }`}
              >
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-snug">
                    <span
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center ${
                        pkg.featured ? 'bg-gold-bright/20 text-gold-bright' : 'bg-leaf/15 text-leaf'
                      }`}
                    >
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    <span className={pkg.featured ? 'text-white/90' : 'text-ink/85'}>{feature}</span>
                  </li>
                ))}
              </ul>

              {pkg.footnote && (
                <p
                  className={`mt-4 text-[11px] leading-relaxed ${
                    pkg.featured ? 'text-white/55' : 'text-muted'
                  }`}
                >
                  {pkg.footnote}
                </p>
              )}
            </div>

            {/* Card footer CTA */}
            <div
              className={`border-t px-6 py-4 ${pkg.featured ? 'border-white/15 bg-black/25' : 'bg-gallery/10 border-line/15'}`}
            >
              <button
                onClick={() => onSelectService(`VidyaSetu ERP — ${pkg.title} (${pkg.price})`)}
                className={`inline-flex w-full cursor-pointer items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                  pkg.featured
                    ? 'bg-gold-bright text-deep hover:bg-white'
                    : 'border border-line/15 text-ink hover:bg-ink hover:text-canvas'
                }`}
              >
                <span>Request this package</span>
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* ─── Recurring costs ─── */}
      <div className={`mt-8 border ${HAIRLINE}`}>
        <div
          className={`flex flex-col gap-2 border-b px-6 py-5 sm:flex-row sm:items-end sm:justify-between ${HAIRLINE}`}
        >
          <div>
            <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
              [ Important ]
            </span>
            <h3 className="mt-1.5 text-lg font-bold text-ink">Recurring costs</h3>
          </div>
          <p className="max-w-xl text-xs leading-relaxed text-muted sm:text-right">
            Hosting, maintenance and third-party services are billed separately instead of being absorbed
            into the development price.
          </p>
        </div>

        <div>
          {RECURRING_COSTS.map(([service, charge], i) => (
            <div
              key={service}
              className={`grid grid-cols-1 gap-1 px-6 py-3.5 sm:grid-cols-2 sm:items-center sm:justify-between ${
                i < RECURRING_COSTS.length - 1 ? `border-b ${HAIRLINE}` : ''
              }`}
            >
              <span className="text-[13px] text-ink/85">{service}</span>
              <span className="font-mono text-xs font-bold text-brand sm:text-right">{charge}</span>
            </div>
          ))}
        </div>

        <p className={`border-t px-6 py-4 text-[11px] leading-relaxed text-muted ${HAIRLINE}`}>
          Prices shown are the VidyaSetu ERP scope described above. Published Indian school ERP packages vary
          significantly by features, student capacity and support — we confirm student limits, support duration,
          source-code ownership and whether the APK is native or a web wrapper before signing.
        </p>
      </div>

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
              Signed contract, a mutual NDA that protects student and staff data, and a clear 30% advance
              deposit to start work.
            </p>
          </div>
        </div>

        <button
          onClick={() => onSelectService('VidyaSetu ERP — General Question')}
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

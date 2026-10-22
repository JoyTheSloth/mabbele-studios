import React, { useState, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Plus, Minus, School, Users, Globe, Code2, Sparkles, Database, ShieldCheck } from 'lucide-react'
import BounceCards from './BounceCards'

/** Painted width of the 380px stack, spread included. */
const STACK_PAINTED_WIDTH = 407

const subscribeViewport = (onStoreChange: () => void) => {
  window.addEventListener('resize', onStoreChange)
  return () => window.removeEventListener('resize', onStoreChange)
}

/** The banner clips overflow, so scale every linear dimension of the stack to
    whatever is left once the page and banner padding are accounted for. */
const getStackScale = () => {
  const vw = window.innerWidth
  const gutter = vw >= 640 ? 160 : 104
  return Math.min(1, Math.max(0.5, (vw - gutter) / STACK_PAINTED_WIDTH))
}

export const About: React.FC = () => {
  // Accordion state for process items
  const [openProcess, setOpenProcess] = useState<string | null>('discovery')
  const stackScale = useSyncExternalStore(subscribeViewport, getStackScale, () => 1)

  const toggleProcess = (id: string) => {
    setOpenProcess(prev => (prev === id ? null : id))
  }

  const processItems = [
    {
      index: '01',
      id: 'discovery',
      name: 'First Call & Project Planning',
      description:
        'We get on a quick call to talk about what you need, what pages or features you want, and when you need it done. We agree on the full plan together so there are no surprises later.',
    },
    {
      index: '02',
      id: 'nda',
      name: 'Signing an NDA (Keeping Your Idea Private)',
      description:
        'Your ideas, business data, and student records stay 100% private. Before we look at anything sensitive, we sign a simple Non-Disclosure Agreement (NDA) so your project is legally protected.',
    },
    {
      index: '03',
      id: 'contract',
      name: 'Simple Freelance Contract',
      description:
        'We sign a straightforward freelance agreement that clearly lists what we will build, the deadlines, and the price. Everything belongs to you once finished, with zero hidden fees.',
    },
    {
      index: '04',
      id: 'kickoff',
      name: '30% Advance Payment to Start',
      description:
        'To lock in our time and officially start designing and building, you pay 30% upfront. The remaining 70% is paid in stages as we show you progress or when the project is finished.',
    },
    {
      index: '05',
      id: 'delivery',
      name: 'Reviewing Progress & Launching',
      description:
        'We send you live links as we build so you can click around and give feedback. Once you are completely happy, we help you launch it, hand over all the files and passwords, and show you how to use it.',
    },
  ]



  return (
    <section 
      id="about" 
      className="relative pt-28 sm:pt-32 pb-20 bg-canvas border-t border-line/8 overflow-hidden text-ink"
      aria-label="About Mabbelle Studios"
    >
      {/* Editorial grid lines background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ─── Massive Editorial Banner Headline (Signal-A Style) ─── */}
        <div className="mb-14 md:mb-18 pb-8 border-b border-line/15">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="block font-mono text-xs uppercase tracking-[0.2em] text-brand font-bold mb-4">
              [ 01 — WHO WE ARE &amp; WHAT WE DO ]
            </span>
            <h2 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4.2rem] lg:text-[4.8rem] font-black uppercase tracking-[-0.04em] leading-[0.98] text-ink break-words mb-5">
              Modern Websites &amp; Custom School Systems.
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-muted uppercase tracking-wider">
              <span>Bespoke Engineering Rooted in Imphal, Manipur</span>
              <span className="text-brand font-semibold">Northeast India (7 Sisters)</span>
            </div>
          </motion.div>
        </div>

        {/* ─── Dual-Column Narrative: Real People + Practical Systems ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-12 border-t border-line/15 mb-28 md:mb-36">
          <div className="lg:col-span-5 font-mono text-xs text-muted uppercase tracking-wider space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-gold-bright font-bold">[ OUR PURPOSE ]</span>
              <span>Practical Solutions That Work</span>
            </div>
            <p className="text-sm font-sans normal-case text-ink font-medium leading-relaxed">
              Software should remove operational headaches, not create new ones. Whether it’s a first website for a growing business or a school’s entire admin workload, we build tools people actually enjoy using.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg lg:text-xl text-ink/85 leading-relaxed font-normal">
            <p>
              Mabbelle Studios is a studio and technology company working directly with business owners, founders and educators who want a strong web presence or custom software for daily operations.
            </p>
            <p>
              Our current focus is <strong className="font-semibold text-ink">educational institutions and schools</strong> — custom <strong className="font-semibold text-brand">School ERP systems</strong> for student records, attendance, report cards, fees and parent communication, without the weight of legacy software.
            </p>
          </div>
        </div>



        {/* ─── School ERP Deep Dive Banner with BounceCards ─── */}
        <div className="mb-28 md:mb-36 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-deep via-brand to-deep text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-2xl flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-5">
                <School className="w-3.5 h-3.5" />
                <span>Made for Schools &amp; Colleges</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                One Simple App to Run Your Entire School.
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                Say goodbye to lost paper registers, messy Excel sheets, and delayed fee follow-ups. We build an easy, custom system for your school where teachers take attendance in seconds, parents get instant WhatsApp alerts, and fees are tracked automatically.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
                <div className="space-y-1">
                  <div className="text-white/40 uppercase text-[10px]">Student Records</div>
                  <div className="font-semibold text-white">All in One Place</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white/40 uppercase text-[10px]">School Fees</div>
                  <div className="font-semibold text-emerald-400">Easy Due Tracking</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white/40 uppercase text-[10px]">Daily Attendance</div>
                  <div className="font-semibold text-[#38bdf8]">Instant Alerts</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white/40 uppercase text-[10px]">Parent App</div>
                  <div className="font-semibold text-gold-bright">Phone &amp; Web</div>
                </div>
              </div>
            </div>

            {/* Right Interactive BounceCards */}
            <div className="relative flex-shrink-0 flex items-center justify-center pt-4 lg:pt-0">
              <BounceCards
                images={[
                  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=480&h=480&fit=crop', // Classroom / School campus
                  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=480&h=480&fit=crop', // Students learning
                  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=480&h=480&fit=crop', // Group discussion / modern education
                  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=480&h=480&fit=crop', // Digital dashboard / software
                  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=480&h=480&fit=crop'  // Library / student campus
                ]}
                containerWidth={380 * stackScale}
                containerHeight={280 * stackScale}
                cardSize={150 * stackScale}
                spread={60 * stackScale}
                rotation={12}
                arc={-12}
                pushDistance={110 * stackScale}
                hoverScale={1.12}
                bounciness={0.65}
                animationDelay={0.3}
                animationStagger={0.07}
                borderWidth={4 * stackScale}
                borderColor="#FAF2EA"
                radius={20 * stackScale}
                shadow={true}
                enableHover={true}
              />
            </div>
          </div>
        </div>

        {/* ─── Process Accordion (Interactive Signal-A Style) ─── */}
        <div className="pt-12 border-t border-line/15 mb-28 md:mb-36">
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-muted mb-8">
            <span>[ 02 — HOW WE WORK TOGETHER ]</span>
            <span>Simple Steps, NDA &amp; Payment</span>
          </div>

          <div className="divide-y divide-line/12 border-y border-line/12">
            {processItems.map((item) => {
              const isOpen = openProcess === item.id
              return (
                <div key={item.id} className="py-5 transition-colors hover:bg-line/[0.04]">
                  <button
                    onClick={() => toggleProcess(item.id)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-6 sm:gap-12">
                      <span className="font-mono text-xs font-semibold text-brand tracking-widest">
                        {item.index}
                      </span>
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-ink group-hover:text-brand transition-colors">
                        {item.name}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-line/15 flex items-center justify-center text-ink group-hover:border-brand/50 group-hover:text-brand transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-3 sm:pl-[4.5rem] md:pl-[6.5rem] max-w-3xl">
                          <p className="text-sm sm:text-base text-muted leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        {/* ─── Bottom CTA Bar ─── */}
        <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-line/15 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs font-semibold text-brand uppercase tracking-wider">
              Need a website or customized school system?
            </span>
            <p className="text-sm sm:text-base font-semibold text-ink">
              Let’s discuss your requirements and walk through a demo of our customized solutions.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-deep text-white text-xs font-bold uppercase tracking-wider hover:bg-brand transition-colors whitespace-nowrap"
          >
            Get In Touch
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default About

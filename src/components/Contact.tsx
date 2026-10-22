import React, { useState } from 'react'
import { Send, Check, AlertCircle, MapPin, ArrowUpRight } from 'lucide-react'

interface ContactProps {
  initialService?: string
}

const HAIRLINE = 'border-line/15'

const PROJECT_TYPES = [
  'School Website',
  'Website + ERP',
  'Website + ERP + Transactions',
  'Complete Digital Campus',
  'Custom Web Application',
  'Other',
]

const BUDGETS = [
  'Under ₹10,000',
  '₹10,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  'Above ₹1,00,000',
  'Not decided yet',
]

const FACTS: [string, string][] = [
  ['Response', 'Every brief is read by the studio. Expect a considered reply within one working day.'],
  ['Terms', 'Mutual NDA, signed contract and a 30% advance deposit before work starts.'],
  ['Based in', 'Imphal, Manipur · serving schools and businesses across the 7 Sisters.'],
]

const FIELD_BASE =
  'w-full border bg-surface px-4 py-3 text-sm text-ink placeholder-muted/50 transition-colors focus:outline-none focus:border-brand'

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    projectType: initialService || PROJECT_TYPES[0],
    budget: '',
    description: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, projectType: initialService }))
    }
  }, [initialService])

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.'
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.description.trim()) {
      errs.description = 'Please include a brief description of your requirement.'
    } else if (formData.description.trim().length < 15) {
      errs.description = 'Please provide a little more detail (at least 15 characters).'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitted')
  }

  const errorText = (message?: string) =>
    message ? (
      <p className="mt-1.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-red-500">
        <AlertCircle className="h-3 w-3" /> {message}
      </p>
    ) : null

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8"
      aria-label="Contact Mabbelle Studios"
    >
      {/* ─── Section header ─── */}
      <div className={`mb-10 border-b pb-7 ${HAIRLINE}`}>
        <span className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
          [ 02 — START YOUR PROJECT ]
        </span>
        <h2 className="text-[2.1rem] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-ink break-words sm:text-[3.1rem] md:text-[4rem] lg:text-[4.6rem]">
          Tell us what your school needs.
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Share a few details and we'll come back with an honest quote, a clear timeline and what is
          actually worth building for you.
        </p>
      </div>

      {/* ─── Two-cell body: context + enquiry form ─── */}
      <div className={`grid gap-px border bg-line/15 lg:grid-cols-12 ${HAIRLINE}`}>
        {/* Left · context */}
        <div className="bg-canvas p-7 sm:p-9 lg:col-span-5">
          <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            How we work together
          </h3>

          <div className="mt-6">
            {FACTS.map(([label, detail], i) => (
              <div
                key={label}
                className={`py-4 ${i < FACTS.length - 1 ? `border-b ${HAIRLINE}` : ''}`}
              >
                <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
                  {label}
                </span>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{detail}</p>
              </div>
            ))}
          </div>

          <div className={`mt-6 border-t pt-6 ${HAIRLINE}`}>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
              Our working principle
            </p>
            <p className="mt-2 text-lg font-bold tracking-tight text-ink">
              “Smarter systems for real people.”
            </p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[11px] tracking-wider text-brand uppercase">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Imphal, Manipur · Northeast India
            </p>
          </div>
        </div>

        {/* Right · enquiry form */}
        <div className="bg-canvas p-7 sm:p-9 lg:col-span-7">
          {status === 'submitted' ? (
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center bg-leaf/15 text-leaf">
                  <Check className="h-4 w-4 stroke-[3]" />
                </span>
                <h3 className="text-xl font-bold tracking-tight text-ink">Enquiry prepared</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Your brief has been validated. This preview has no mail server connected, so nothing has
                left the browser yet — here is exactly what would be sent.
              </p>

              <div className={`mt-7 border ${HAIRLINE}`}>
                {[
                  ['Name', formData.name],
                  ['Email', formData.email],
                  ['School / Organization', formData.school || '—'],
                  ['Requirement', formData.projectType],
                  ['Budget', formData.budget || '—'],
                ].map(([label, value], i, arr) => (
                  <div
                    key={label}
                    className={`grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-3 sm:items-center ${
                      i < arr.length - 1 ? `border-b ${HAIRLINE}` : ''
                    }`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      {label}
                    </span>
                    <span className="truncate text-[13px] font-medium text-ink sm:col-span-2">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setStatus('idle')}
                className={`mt-7 inline-flex cursor-pointer items-center gap-2 border bg-surface px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-canvas ${HAIRLINE}`}
              >
                <span>Edit enquiry</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className={`border-b pb-6 ${HAIRLINE}`}>
                <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  Project enquiry
                </h3>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Fields marked <span className="text-gold">*</span> are required
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 py-7 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink"
                  >
                    Your name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    aria-invalid={Boolean(errors.name)}
                    className={`${FIELD_BASE} ${errors.name ? 'border-red-500' : HAIRLINE}`}
                  />
                  {errorText(errors.name)}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink"
                  >
                    Email address <span className="text-gold">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@school.edu"
                    aria-invalid={Boolean(errors.email)}
                    className={`${FIELD_BASE} ${errors.email ? 'border-red-500' : HAIRLINE}`}
                  />
                  {errorText(errors.email)}
                </div>
              </div>

              <div className={`grid grid-cols-1 gap-5 border-t py-7 sm:grid-cols-2 ${HAIRLINE}`}>
                <div>
                  <label
                    htmlFor="school"
                    className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink"
                  >
                    School / Organization{' '}
                    <span className="font-normal text-muted normal-case">(optional)</span>
                  </label>
                  <input
                    id="school"
                    type="text"
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    placeholder="St. Xavier's Higher Sec. School"
                    className={`${FIELD_BASE} ${HAIRLINE}`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink"
                  >
                    What do you need
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className={`${FIELD_BASE} ${HAIRLINE}`}
                  >
                    {!PROJECT_TYPES.includes(formData.projectType) && (
                      <option value={formData.projectType}>{formData.projectType}</option>
                    )}
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={`border-t py-7 ${HAIRLINE}`}>
                <label
                  htmlFor="budget"
                  className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink"
                >
                  Estimated budget{' '}
                  <span className="font-normal text-muted normal-case">(optional)</span>
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className={`${FIELD_BASE} ${HAIRLINE}`}
                >
                  <option value="">Select a range...</option>
                  {BUDGETS.map((tier) => (
                    <option key={tier} value={tier}>
                      {tier}
                    </option>
                  ))}
                </select>
              </div>

              <div className={`border-t py-7 ${HAIRLINE}`}>
                <label
                  htmlFor="description"
                  className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink"
                >
                  Requirement <span className="text-gold">*</span>
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Number of students, what you manage on paper or Excel today, and what you want to fix first..."
                  aria-invalid={Boolean(errors.description)}
                  className={`${FIELD_BASE} resize-none ${
                    errors.description ? 'border-red-500' : HAIRLINE
                  }`}
                />
                {errorText(errors.description)}
              </div>

              <button
                type="submit"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 bg-gold-bright px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-deep transition-colors duration-300 hover:bg-deep hover:text-gold-bright active:scale-[0.995]"
              >
                <span>Send project enquiry</span>
                <Send className="h-4 w-4 stroke-[2.2]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import { Process } from '../components/Process'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export const ProcessPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Main Process component */}
      <Process />

      {/* Next page teaser */}
      <section className="border-t border-line/15">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-px border bg-line/15 md:grid-cols-12">
            <div className="bg-canvas p-7 sm:p-9 md:col-span-8">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                Start today
              </span>
              <h3 className="mt-3 text-2xl font-extrabold uppercase leading-[1.02] tracking-[-0.035em] text-ink sm:text-[2.4rem]">
                Have a project in mind? Let’s talk.
              </h3>
            </div>
            <div className="flex items-center justify-end bg-canvas p-7 sm:p-9 md:col-span-4">
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-between gap-3 bg-gold-bright px-6 py-4 text-xs font-bold uppercase tracking-wider text-deep transition-colors hover:bg-deep hover:text-gold-bright"
              >
                <span>Start your project</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProcessPage

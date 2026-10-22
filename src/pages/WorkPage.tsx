import React from 'react'
import { Work } from '../components/Work'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export const WorkPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Main Work portfolio component with interactive case study modal */}
      <Work />

      {/* Next page teaser */}
      <section className="py-20 border-t border-line/10 bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-wider">How We Work</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink mt-1">
              Read About Our Step-by-Step Process
            </h3>
          </div>
          <Link
            to="/process"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-deep text-white hover:bg-brand transition-colors"
          >
            Explore Process
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default WorkPage

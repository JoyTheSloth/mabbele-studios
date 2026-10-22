import React from 'react'
import { Services } from '../components/Services'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate()

  const handleSelectService = (serviceName: string) => {
    navigate('/contact', { state: { service: serviceName } })
  }

  return (
    <div className="min-h-screen">
      {/* Main Services component */}
      <Services onSelectService={handleSelectService} />

      {/* Deliverables & Technology Stack deep dive */}
      <section className="py-20 border-t border-line/10 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs text-brand uppercase tracking-widest font-bold">
              [ TECHNICAL EXCELLENCE ]
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink mt-2">
              How we deliver quality at scale
            </h3>
            <p className="text-muted text-sm sm:text-base mt-2">
              Every deliverable is crafted for lightning performance, accessibility compliance, and frictionless content management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-canvas border border-line/10">
              <div className="text-sm font-bold text-ink mb-2">Modern Frameworks</div>
              <p className="text-xs text-muted leading-relaxed mb-4">
                React 19, Next.js, Vite, TypeScript, and Tailwind CSS for scalable architecture and rapid iteration.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-brand">
                <span className="px-2 py-0.5 rounded bg-surface border border-line/10">TypeScript</span>
                <span className="px-2 py-0.5 rounded bg-surface border border-line/10">Next.js</span>
                <span className="px-2 py-0.5 rounded bg-surface border border-line/10">React 19</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-canvas border border-line/10">
              <div className="text-sm font-bold text-ink mb-2">Motion &amp; 3D Visuals</div>
              <p className="text-xs text-muted leading-relaxed mb-4">
                Fluid Framer Motion physics, WebGL/OGL shaders, and Canvas 2D interactions that wow users without lag.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-brand">
                <span className="px-2 py-0.5 rounded bg-surface border border-line/10">Framer Motion</span>
                <span className="px-2 py-0.5 rounded bg-surface border border-line/10">OGL</span>
                <span className="px-2 py-0.5 rounded bg-surface border border-line/10">Canvas 2D</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-canvas border border-line/10">
              <div className="text-sm font-bold text-ink mb-2">Enterprise Telemetry</div>
              <p className="text-xs text-muted leading-relaxed mb-4">
                Strict Core Web Vitals optimization, semantic schema markup, and headless CMS integrations.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-brand">
                <span className="px-2 py-0.5 rounded bg-surface border border-line/10">Headless CMS</span>
                <span className="px-2 py-0.5 rounded bg-surface border border-line/10">SEO Schema</span>
                <span className="px-2 py-0.5 rounded bg-surface border border-line/10">Web Vitals</span>
              </div>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-line/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted">
              Have a custom requirement? We build bespoke software and automated workflows.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-deep text-white hover:bg-brand transition-colors"
            >
              Start Conversation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

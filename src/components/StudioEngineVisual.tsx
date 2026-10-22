import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Activity, 
  Cpu, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Bot,
  Globe
} from 'lucide-react'

export const StudioEngineVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [activeTab, setActiveTab] = useState<'flow' | 'telemetry' | 'matrix'>('flow')
  const [latency, setLatency] = useState(11)
  const [throughput, setThroughput] = useState(2840)

  // Floating ambient node canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    // Particle nodes
    const nodeCount = 28
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1.5,
      pulse: Math.random() * Math.PI * 2,
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        a.x += a.vx
        a.y += a.vy
        a.pulse += 0.03

        if (a.x < 0 || a.x > width) a.vx *= -1
        if (a.y < 0 || a.y > height) a.vy *= -1

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 105) {
            const alpha = (1 - dist / 105) * 0.22
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        // Draw node
        const currentR = a.radius + Math.sin(a.pulse) * 0.8
        ctx.fillStyle = i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#4AAEB4' : '#EBA83F'
        ctx.beginPath()
        ctx.arc(a.x, a.y, Math.max(1, currentR), 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animId)
    }
  }, [])

  // Live telemetry jitter
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => Math.max(8, Math.min(16, prev + (Math.random() > 0.5 ? 1 : -1))))
      setThroughput(prev => Math.floor(prev + (Math.random() - 0.5) * 60))
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-[#0A1626] border border-brand/25 shadow-2xl shadow-[#0B1C33]/25 backdrop-blur-xl">
      {/* Top decorative gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-brand via-[#38bdf8] to-gold" />

      {/* Terminal header */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-[#07111E] border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <span className="w-2.5 h-2.5 rounded-full bg-gold-bright" />
          <span className="w-2.5 h-2.5 rounded-full bg-leaf" />
          <span className="ml-2 text-xs font-mono font-medium text-white/70 tracking-wider">
            mabbele.studio <span className="text-[#38bdf8]">// engine-core v2.4</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Tab selector */}
          <div className="hidden sm:flex items-center p-0.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono">
            <button
              onClick={() => setActiveTab('flow')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === 'flow' ? 'bg-brand text-white font-semibold' : 'text-white/60 hover:text-white'
              }`}
            >
              Pipeline
            </button>
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === 'telemetry' ? 'bg-brand text-white font-semibold' : 'text-white/60 hover:text-white'
              }`}
            >
              Metrics
            </button>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ONLINE</span>
          </div>
        </div>
      </div>

      {/* Interactive Main Body */}
      <div className="relative min-h-[440px] p-6 flex flex-col justify-between overflow-hidden">
        {/* Canvas animated network background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
        />

        {/* Ambient radial lighting */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-brand/20 blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-gold/15 blur-[90px] pointer-events-none" />

        {/* Dynamic content view */}
        <div className="relative z-10">
          {activeTab === 'flow' ? (
            <div className="space-y-4">
              {/* Architecture Node Stream */}
              <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-3 uppercase tracking-wider">
                <span>Autonomous Execution Stream</span>
                <span className="text-[#38bdf8]">Live cluster: us-east-1</span>
              </div>

              {/* Node 1: Multi-Agent Model Layer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group relative p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#38bdf8]/50 transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8]">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">AI Agent Mesh</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-400/20">
                          Claude 3.7 + GPT-4o
                        </span>
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">
                        Parallel reasoning workers handling logic, synthesis, and structured code gen
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end text-right font-mono text-xs">
                    <span className="text-emerald-400 font-medium">99.98% eval</span>
                    <span className="text-white/40 text-[10px]">{latency}ms latency</span>
                  </div>
                </div>

                {/* Pulsing trace line */}
                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/50">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-gold-bright" />
                    Context window: 200k tokens primed
                  </span>
                  <span className="text-[#38bdf8] flex items-center gap-1">
                    ACTIVE <ArrowRight className="w-3 h-3 animate-pulse" />
                  </span>
                </div>
              </motion.div>

              {/* Node 2: Vector & Knowledge Pipeline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group relative p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-brand/50 transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-brand/20 border border-brand/40 text-brand">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">Real-Time Knowledge Graph</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-400/20">
                          HYBRID SEARCH
                        </span>
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">
                        Sub-millisecond retrieval with dynamic re-ranking & memory persistence
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end text-right font-mono text-xs">
                    <span className="text-cyan-400 font-medium">1.4M vectors</span>
                    <span className="text-white/40 text-[10px]">Sync: live</span>
                  </div>
                </div>
              </motion.div>

              {/* Node 3: Enterprise Deployment Edge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="group relative p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-gold/50 transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-gold/15 border border-gold/30 text-gold-bright">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">Edge Microservices</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-400/20">
                          ZERO-COLD-START
                        </span>
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">
                        Global CDN distribution, end-to-end encryption & SOC2 ready telemetry
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end text-right font-mono text-xs">
                    <span className="text-amber-400 font-medium">350+ PoPs</span>
                    <span className="text-white/40 text-[10px]">Global DNS</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            /* Telemetry Tab */
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <span className="text-xs font-mono text-white/50 uppercase">P99 Response</span>
                  <div className="text-2xl font-bold font-mono text-white mt-1 flex items-baseline gap-2">
                    {latency} <span className="text-xs text-emerald-400">ms</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">▲ 42% faster than v2.1</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <span className="text-xs font-mono text-white/50 uppercase">Requests / Sec</span>
                  <div className="text-2xl font-bold font-mono text-white mt-1 flex items-baseline gap-2">
                    {throughput.toLocaleString()} <span className="text-xs text-[#38bdf8]">req/s</span>
                  </div>
                  <span className="text-[10px] text-[#38bdf8] font-mono">Autoscale ready</span>
                </div>
              </div>

              {/* Live terminal feed */}
              <div className="p-4 rounded-xl bg-[#050C16] border border-white/10 font-mono text-xs text-white/80 space-y-1.5">
                <div className="text-white/40 text-[10px] border-b border-white/10 pb-1 mb-2">LIVE LOG STREAM</div>
                <p className="text-emerald-400">[info] Model routing initialized: 12 nodes warmed</p>
                <p className="text-blue-300">[sync] Neural weights synced via WebTorrent protocol</p>
                <p className="text-white/70">[auth] Zero-trust perimeter verified across 18 clusters</p>
                <p className="text-gold-bright">[perf] Memory overhead minimized to &lt; 42MB per instance</p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Interactive Stat Bar */}
        <div className="relative z-10 pt-4 mt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center font-mono">
          <div className="p-2 rounded-lg bg-white/[0.02]">
            <div className="text-[10px] text-white/40 uppercase">Architecture</div>
            <div className="text-xs font-semibold text-white mt-0.5">Production-Ready</div>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.02]">
            <div className="text-[10px] text-white/40 uppercase">Security</div>
            <div className="text-xs font-semibold text-emerald-400 mt-0.5">Audited &amp; Strict</div>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.02]">
            <div className="text-[10px] text-white/40 uppercase">Velocity</div>
            <div className="text-xs font-semibold text-[#38bdf8] mt-0.5">Weeks, Not Quarters</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudioEngineVisual

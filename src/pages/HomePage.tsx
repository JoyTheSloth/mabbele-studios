import React from 'react'
import { Hero } from '../components/Hero'
import { FlexCarousel } from '../components/FlexCarousel'
import { About } from '../components/About'

const carouselItems = [
  { 
    src: 'https://images.unsplash.com/photo-1737071371043-761e02b1ef95?w=1200&q=80&auto=format&fit=max', 
    alt: 'Iridescent metallic generative form', 
    title: 'Iridescence', 
    subtitle: 'Brand Research' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1693645325828-62cd35c8da8f?w=1200&q=80&auto=format&fit=max', 
    alt: 'Minimal architectural interface', 
    title: 'White Room', 
    subtitle: 'Interface Design' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1739056238917-d89cd05c48d5?w=1200&q=80&auto=format&fit=max', 
    alt: 'Liquid chrome generative sculpture', 
    title: 'Liquid Metal', 
    subtitle: 'Digital Products' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1747191092806-c7da11881986?w=1200&q=80&auto=format&fit=max', 
    alt: 'Clay sculptural form', 
    title: 'Clay Study', 
    subtitle: 'Tactile Ergonomics' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1770249196550-ff6c641165cb?w=1200&q=80&auto=format&fit=max', 
    alt: 'Intelligent autonomous system sculpture', 
    title: 'Automaton', 
    subtitle: 'Web Applications' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1786835568925-20cd20007ed0?w=1200&q=80&auto=format&fit=max', 
    alt: 'Dynamic fluid topology', 
    title: 'Three Forms', 
    subtitle: 'Modern Flagships' 
  }
]

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* 1. Hero Section with 3D Flower artwork */}
      <Hero />

      {/* 2. Interactive FlexCarousel Showcase */}
      <section className="relative w-full py-8 md:py-14 bg-white/60 dark:bg-white/[0.05] border-y border-line/15 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 md:mb-6 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand/10 border border-line/15 text-[11px] font-bold uppercase tracking-widest text-brand">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-bright" />
            Studio Visual Explorations
          </span>
        </div>
        <div data-lenis-prevent-wheel style={{ width: '100%', height: '470px', position: 'relative' }}>
          <FlexCarousel
            items={carouselItems}
            preset="liquid"
            intro="rise"
            cardHeight={0.62}
            gap={14}
            squeeze={0.2}
            focusOnClick
            captions
          />
        </div>
      </section>

      {/* 3. About Section (Signal-A Manifesto Style) */}
      <About />
    </div>
  )
}

export default HomePage

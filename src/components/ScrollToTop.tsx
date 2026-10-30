import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis } from './SmoothScroll'
import { getOffer } from '../data/offers'

const ROUTE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Mabbelle Studios — Websites & School ERP Systems for Northeast India',
    description:
      'Mabbelle Studios partners with schools, cafes, and growing businesses across Northeast India to build VidyaSetu ERP systems and fast, custom websites.',
  },
  '/about': {
    title: 'About — Mabbelle Studios · Imphal, Manipur',
    description:
      'Meet Mabbelle Studios: a bespoke design and software engineering studio in Imphal building custom school ERP systems and modern websites.',
  },
  '/services': {
    title: 'Services & Pricing — VidyaSetu ERP & Custom Websites | Mabbelle Studios',
    description:
      'Transparent pricing for VidyaSetu School ERP (₹99,000 permanent licence), Custom Business/Cafe Websites (from ₹4,999), and School Websites (from ₹11,999).',
  },
  '/work': {
    title: 'Selected Work & Live Demos — Mabbelle Studios',
    description:
      'Explore live deployments and sample builds by Mabbelle Studios, including VidyaSetu School ERP, MOKSA Coffee House, Lazeez-a-Gulmarg, and Hamlet Tea Room.',
  },
  '/process': {
    title: 'How We Work — 4-Phase Process & Straight Terms | Mabbelle Studios',
    description:
      'Discover how Mabbelle Studios scopes, designs, builds, and launches websites and school software with a mutual NDA, plain contract, and milestone payments.',
  },
  '/contact': {
    title: 'Start a Project — Contact Mabbelle Studios',
    description:
      'Send your project brief for VidyaSetu School ERP or a custom website and get an honest quote and timeline within one working day.',
  },
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    let meta = ROUTE_META[pathname]
    if (!meta && pathname.startsWith('/services/')) {
      const slug = pathname.replace('/services/', '')
      const offer = getOffer(slug)
      if (offer) {
        meta = {
          title: `${offer.title} (${offer.price}) — Mabbelle Studios`,
          description: offer.summary,
        }
      }
    }
    if (!meta) {
      meta = {
        title: 'Mabbelle Studios',
        description: ROUTE_META['/'].description,
      }
    }

    document.title = meta.title
    const descEl = document.querySelector('meta[name="description"]')
    if (descEl) {
      descEl.setAttribute('content', meta.description)
    }

    if (hash) {
      const scrollToHash = () => {
        const el = document.querySelector(hash)
        if (!el) return false
        const lenis = getLenis()
        if (lenis) {
          lenis.scrollTo(el as HTMLElement, { offset: -72 })
        } else {
          el.scrollIntoView({ behavior: 'smooth' })
        }
        return true
      }

      if (!scrollToHash()) {
        const timer = window.setTimeout(scrollToHash, 120)
        return () => window.clearTimeout(timer)
      }
      return
    }

    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [pathname, hash])

  return null
}

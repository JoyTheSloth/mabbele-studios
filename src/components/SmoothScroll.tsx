import React, { useEffect } from 'react'
import Lenis from 'lenis'

let activeLenis: Lenis | null = null

/** Lenis owns the scroll position while mounted, so imperative jumps must go through it. */
export const getLenis = () => activeLenis

export const SmoothScroll: React.FC = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Wheel is interpolated; touch keeps the platform's own momentum.
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1 })
    activeLenis = lenis

    return () => {
      lenis.destroy()
      activeLenis = null
    }
  }, [])

  return null
}

export default SmoothScroll

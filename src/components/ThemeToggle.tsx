import React, { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const STORAGE_KEY = 'mabbelle-theme'

/** Light is the default; the `.dark` class on <html> drives every token. */
function readInitialTheme(): boolean {
  return typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
}

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [dark, setDark] = useState(readInitialTheme)

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
    } catch {
      /* storage blocked — the theme still applies for this session */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={dark}
      className={`p-2 rounded-full text-ink border border-line/10 hover:bg-line/5 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${className}`}
    >
      {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  )
}

export default ThemeToggle

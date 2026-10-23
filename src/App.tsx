import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { SmoothScroll } from './components/SmoothScroll'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { WorkPage } from './pages/WorkPage'
import { ProcessPage } from './pages/ProcessPage'
import { ContactPage } from './pages/ContactPage'

export function App() {
  return (
    <div className="relative min-h-screen bg-canvas text-ink selection:bg-brand selection:text-white flex flex-col justify-between">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Inertial wheel scrolling (skipped under prefers-reduced-motion) */}
      <SmoothScroll />

      {/* Global Architectural Grid Lines Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-70 will-change-transform"
        aria-hidden="true" 
      />

      {/* Floating subtle ambient lighting in background */}
      <div 
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-brand/5 rounded-full blur-[150px] pointer-events-none z-0 will-change-transform" 
        aria-hidden="true" 
      />

      {/* Fixed Global Navbar with active route highlighting */}
      <Navbar />

      {/* Dynamic Page Router */}
      <main className="relative z-10 flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Global Footer with multi-page navigation */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default App

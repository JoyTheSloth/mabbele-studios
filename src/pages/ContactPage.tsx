import React from 'react'
import { Contact } from '../components/Contact'
import { Link, useLocation } from 'react-router-dom'

export const ContactPage: React.FC = () => {
  const location = useLocation()
  const initialService = (location.state as { service?: string })?.service

  return (
    <div className="min-h-screen">
      {/* Main interactive Contact & Project Briefing form */}
      <Contact initialService={initialService} />
    </div>
  )
}

export default ContactPage

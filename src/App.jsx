import { useState, useEffect } from 'react'
import './index.css'
import { track } from './analytics'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LoadingModal from './components/LoadingModal'
import WaitlistPage from './components/WaitlistPage'

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [view, setView] = useState('home')

  useEffect(() => {
    track('landing_page_viewed')
  }, [])

  function handleFileChosen() {
    setShowModal(true)
    setTimeout(() => {
      setShowModal(false)
      setView('waitlist')
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          send_to: 'AW-18123787051/36fbCPbOv6UcEKuWjMJD',
          value: 1.0,
          currency: 'USD',
        })
      }
    }, 2000)
  }

  if (view === 'waitlist') {
    return (
      <div data-theme="lofi">
        <WaitlistPage />
      </div>
    )
  }

  return (
    <div data-theme="lofi" className="min-h-screen bg-base-100">
      <LoadingModal visible={showModal} />
      <Navbar onFileChosen={handleFileChosen} />
      <main>
        <Hero onFileChosen={handleFileChosen} />
        <SocialProof />
<HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

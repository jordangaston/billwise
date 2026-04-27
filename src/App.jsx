import { useState } from 'react'
import './index.css'
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
import InsuranceProviders from './components/InsuranceProviders'

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [view, setView] = useState('home')

  function handleFileChosen() {
    setShowModal(true)
    setTimeout(() => {
      setShowModal(false)
      setView('waitlist')
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
        <InsuranceProviders />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

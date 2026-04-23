import { useState, useEffect } from 'react'
import { BRAND_NAME } from '../constants'
import GridOverlay from './GridOverlay'
import GrainOverlay from './GrainOverlay'
import { colors, gradients } from '../theme'

const STEPS = [
  { id: 'upload', duration: 2200 },
  { id: 'scan', duration: 2600 },
  { id: 'errors', duration: 3000 },
  { id: 'outreach', duration: 2400 },
  { id: 'negotiating', duration: 2800 },
  { id: 'success', duration: 4000 },
]

function UploadCard() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setProgress((p) => Math.min(p + 7, 92)), 120)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="card bg-base-100 shadow-lg w-72">
      <div className="card-body p-4 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-base-200 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-base-content truncate">EOB_March2024.pdf</p>
            <p className="text-xs text-base-content/40">Uploading…</p>
          </div>
          <span className="text-xs font-medium text-base-content/50">{progress}%</span>
        </div>
        <div className="w-full bg-base-200 rounded-full h-1.5">
          <div className="bg-base-content/60 h-1.5 rounded-full transition-all duration-150" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}

function ScanCard() {
  const [checked, setChecked] = useState(0)
  const items = ['Line items', 'Duplicate charges', 'Coding errors', 'Insurance rates']
  useEffect(() => {
    if (checked >= items.length) return
    const t = setTimeout(() => setChecked((c) => c + 1), 480)
    return () => clearTimeout(t)
  }, [checked])
  return (
    <div className="card bg-base-100 shadow-lg w-72">
      <div className="card-body p-4 gap-2.5">
        <div className="flex items-center justify-between mb-0.5">
          <p className="text-xs font-semibold text-base-content">AI scanning bill</p>
          <span className="loading loading-dots loading-xs text-base-content/30"></span>
        </div>
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-2.5">
            <div className={`w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-200 ${i < checked ? 'bg-base-content/80' : 'bg-base-200'}`}>
              {i < checked && (
                <svg className="w-2.5 h-2.5 text-base-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className={`text-xs transition-colors duration-200 ${i < checked ? 'text-base-content' : 'text-base-content/30'}`}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ErrorsCard() {
  return (
    <div className="card bg-base-100 shadow-lg w-72">
      <div className="card-body p-4 gap-2">
        <div className="flex items-center justify-between mb-0.5">
          <p className="text-xs font-semibold text-base-content">3 issues found</p>
          <span className="badge badge-sm text-xs px-2 py-0.5" style={{ background: colors.primary, color: colors.primaryContent }}>Review needed</span>
        </div>
        {[
          { code: '99214', label: 'Up-coded office visit', amount: '$180' },
          { code: '36415', label: 'Duplicate blood draw', amount: '$45' },
          { code: '93000', label: 'Unbundled EKG charge', amount: '$210' },
        ].map((err) => (
          <div key={err.code} className="flex items-center gap-2 py-1 border-t border-base-200">
            <div className="flex-1 min-w-0">
              <span className="text-xs text-base-content/40 font-mono mr-1.5">{err.code}</span>
              <span className="text-xs text-base-content">{err.label}</span>
            </div>
            <span className="text-xs font-semibold text-base-content flex-shrink-0">{err.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function OutreachCard() {
  const [dots, setDots] = useState(1)
  useEffect(() => {
    const t = setInterval(() => setDots((d) => (d % 3) + 1), 500)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="card bg-base-100 shadow-lg w-72">
      <div className="card-body p-4 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="avatar placeholder flex-shrink-0">
            <div className="bg-base-300 rounded-full w-9 h-9 flex items-center justify-center text-xs font-bold text-base-content">SA</div>
          </div>
          <div>
            <p className="text-xs font-medium text-base-content">Sarah A · Health Advocate</p>
            <p className="text-xs text-base-content/40">Assigned to your case</p>
          </div>
        </div>
        <div className="bg-base-200 rounded-xl rounded-tl-sm px-3 py-2">
          <p className="text-xs text-base-content/70 leading-relaxed">
            Contacting Northside Medical Billing{'·'.repeat(0)}<span className="tracking-widest">{'.'.repeat(dots)}</span>
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-base-content/30">
          <span className="loading loading-ring loading-xs"></span>
          Awaiting response
        </div>
      </div>
    </div>
  )
}

function NegotiatingCard() {
  return (
    <div className="card bg-base-100 shadow-lg w-72">
      <div className="card-body p-4 gap-2.5">
        <p className="text-xs font-semibold text-base-content mb-0.5">Negotiation in progress</p>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-base-content/50">Original bill</span>
            <span className="text-xs font-mono text-base-content/50 line-through">$3,500</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-base-content/50">Provider offer</span>
            <span className="text-xs font-mono text-base-content">$2,800</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-base-content/50">Our counter-offer</span>
            <span className="text-xs font-mono text-base-content font-semibold">$2,520</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 pt-1 border-t border-base-200">
          <span className="loading loading-spinner loading-xs text-base-content/30"></span>
          <span className="text-xs text-base-content/40">Waiting on provider response…</span>
        </div>
      </div>
    </div>
  )
}

function SuccessCard() {
  return (
    <div className="card bg-base-100 shadow-lg w-72">
      <div className="card-body p-4 gap-3">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-base-200 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-base-content" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-base-content/50 mb-0.5">Bill resolved · Jenny O</p>
            <p className="text-sm font-bold text-base-content">You saved $980</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg bg-base-200 px-3 py-2 text-center">
            <p className="text-xs text-base-content/40 mb-0.5">Was</p>
            <p className="text-sm font-mono font-semibold text-base-content/50 line-through">$3,500</p>
          </div>
          <div className="flex-1 rounded-lg px-3 py-2 text-center" style={{ background: colors.successBg }}>
            <p className="text-xs text-base-content/40 mb-0.5">Now</p>
            <p className="text-sm font-mono font-bold text-base-content">$2,520</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const CARDS = {
  upload: UploadCard,
  scan: ScanCard,
  errors: ErrorsCard,
  outreach: OutreachCard,
  negotiating: NegotiatingCard,
  success: SuccessCard,
}

function FlowCard() {
  const [stepIndex, setStepIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [key, setKey] = useState(0)

  useEffect(() => {
    const { duration } = STEPS[stepIndex]
    const fadeOut = setTimeout(() => setVisible(false), duration - 300)
    const advance = setTimeout(() => {
      setStepIndex((i) => (i + 1) % STEPS.length)
      setKey((k) => k + 1)
      setVisible(true)
    }, duration)
    return () => { clearTimeout(fadeOut); clearTimeout(advance) }
  }, [stepIndex])

  const Card = CARDS[STEPS[stepIndex].id]
  return (
    <div className="transition-opacity duration-300" style={{ opacity: visible ? 1 : 0 }}>
      <Card key={key} />
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="text-left relative overflow-hidden"
      style={{ background: gradients.hero }}
    >
      <GridOverlay />
      <GrainOverlay />
      <div className="max-w-6xl mx-auto px-8 lg:px-16 pt-28 pb-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-center">
          {/* Left: copy */}
          <div>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="badge badge-outline gap-1.5 py-3 px-3 text-xs font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                HIPAA-aligned &amp; encrypted
              </span>
              <span className="badge badge-outline gap-1.5 py-3 px-3 text-xs font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                1,300+ insurances connected
              </span>
              <span className="badge badge-outline gap-1.5 py-3 px-3 text-xs font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.9 on App Store
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-base-content mb-4">
              {BRAND_NAME} lowers your medical bills
            </h1>
            <p className="text-lg text-base-content/70 leading-relaxed mb-8 max-w-lg">
              Save money, time, and energy with a healthcare assistant powered by AI and real experts.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="btn btn-primary btn-lg">
                Get started — it's free
              </a>
              <span className="text-sm text-base-content/50">Available on iOS and Web</span>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[520px]">
            <img
              src="/hero.jpeg"
              alt="Healthcare management made easy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-8 right-6">
              <FlowCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

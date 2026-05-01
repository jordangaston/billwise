import { useState, useEffect, useRef } from 'react'
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

function BillUploadZone({ onFileChosen }) {
  const [dragging, setDragging] = useState(false)
  const [file, setFile] = useState(null)
  const inputRef = useRef(null)

  function handleFiles(files) {
    if (files && files[0]) {
      setFile(files[0])
      onFileChosen?.()
    }
  }

  return (
    <div
      className="w-full flex flex-col items-center justify-center text-center px-10 py-16 rounded-3xl"
      style={{
        border: `2px dashed ${dragging ? colors.primary : colors.glassBorderActive}`,
        background: dragging ? colors.glassActive : 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
        transition: 'background 0.2s, border-color 0.2s',
        minHeight: '420px',
      }}
      onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files) }}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept=".pdf,.jpg,.jpeg,.heic,.png"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {file ? (
        <>
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
            style={{ background: colors.tint300 }}
          >
            <svg className="w-8 h-8" style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-base-content mb-1">{file.name}</p>
          <p className="text-sm text-base-content/50 mb-6">{(file.size / 1024).toFixed(0)} KB · ready to analyze</p>
          <button
            className="btn btn-primary btn-md"
            style={{ background: colors.primary, color: colors.primaryContent, border: 'none' }}
          >
            Analyze my bill →
          </button>
          <button
            className="text-xs text-base-content/40 mt-4 hover:text-base-content/60 transition-colors"
            onClick={() => { setFile(null); inputRef.current.value = '' }}
          >
            Choose a different file
          </button>
        </>
      ) : (
        <>
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 cursor-pointer"
            style={{ background: colors.tint300 }}
            onClick={() => inputRef.current.click()}
          >
            <svg className="w-8 h-8" style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-base-content mb-1">Upload a medical bill to start</p>
          <p className="text-sm text-base-content/50 mb-6">Drag and drop, or click to browse</p>
          <button
            className="btn btn-primary btn-md"
            style={{ background: colors.primary, color: colors.primaryContent, border: 'none' }}
            onClick={() => inputRef.current.click()}
          >
            Upload your bill
          </button>
          <p className="text-xs text-base-content/40 mt-4">Supports PDF, JPG, HEIC, PNG</p>
        </>
      )}
    </div>
  )
}

export default function Hero({ onFileChosen }) {
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
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-base-content mb-4">
              {BRAND_NAME} lowers your medical bills
            </h1>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                '70% savings for our average customer.',
                '100% free unless we win.',
                'HIPAA-aligned. We guard your data like it\'s ours.',
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: colors.primary }}>
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base font-semibold text-base-content">{point}</span>
                </li>
              ))}
            </ul>

            <label
              className="btn btn-primary btn-lg cursor-pointer"
              style={{ background: colors.primary, color: colors.primaryContent, border: 'none', boxShadow: `0 4px 16px rgba(100, 60, 180, 0.35), 0 1px 3px rgba(0,0,0,0.12)` }}
            >
              Upload your bill →
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.heic,.png"
                onChange={(e) => { if (e.target.files?.[0]) onFileChosen?.() }}
              />
            </label>
          </div>

          {/* Right: bill upload */}
          <BillUploadZone onFileChosen={onFileChosen} />
        </div>
      </div>
    </section>
  )
}

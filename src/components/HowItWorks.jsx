import { useState, useEffect } from 'react'
import { BRAND_AI } from '../constants'
import GridOverlay from './GridOverlay'
import GrainOverlay from './GrainOverlay'

const STEP_DURATION = 3800

const steps = [
  {
    number: '1',
    title: 'Upload your medical bill',
    description: 'Connect your insurance or upload a medical bill or EOB (explanation of benefits) to get started.',
  },
  {
    number: '2',
    title: `${BRAND_AI} reviews your bill`,
    description: 'Our AI instantly scans for incorrect charges, duplicate line items, up-coding errors, and other issues.',
  },
  {
    number: '3',
    title: 'A health advocate takes action',
    description: 'A real expert negotiates on your behalf with insurers and providers to reduce what you owe.',
  },
]

function ProgressBar({ stepKey, duration }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setWidth(100), 50)
    return () => clearTimeout(t)
  }, [stepKey])
  return (
    <div className="w-full bg-base-200 rounded-full h-0.5 mt-4 overflow-hidden">
      <div
        className="h-0.5 bg-base-content/40 rounded-full ease-linear"
        style={{ width: `${width}%`, transition: `width ${duration - 100}ms linear` }}
      />
    </div>
  )
}

function PhoneScreen1() {
  return (
    <>
      <div className="px-3 py-2 border-b border-base-200">
        <p className="text-[11px] font-semibold text-base-content">New Case</p>
      </div>
      <div className="flex-1 px-3 py-2.5 flex flex-col gap-2.5 overflow-hidden">
        <p className="text-[10px] text-base-content/50">Upload a bill or EOB to get started</p>
        <div className="border-2 border-dashed border-base-300 rounded-lg p-3 flex flex-col items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-base-200 flex items-center justify-center">
            <svg className="w-3 h-3 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </div>
          <p className="text-[10px] text-base-content/40 text-center">Tap to upload or take a photo</p>
        </div>
        <div className="flex items-center gap-2 bg-base-200 rounded-lg px-2.5 py-2">
          <svg className="w-3 h-3 text-base-content/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-medium text-base-content truncate">EOB_March2024.pdf</p>
            <p className="text-[10px] text-base-content/40">2.3 MB · Ready</p>
          </div>
          <svg className="w-3 h-3 text-base-content/60" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="mt-auto bg-base-content rounded-lg py-2 text-center">
          <p className="text-[10px] font-semibold text-base-100">Continue</p>
        </div>
      </div>
    </>
  )
}

function PhoneScreen2() {
  const [checked, setChecked] = useState(0)
  const items = ['Summarizing document', 'Checking for denials', 'Scanning for errors', 'Verifying insurance rates']
  useEffect(() => {
    if (checked >= items.length) return
    const t = setTimeout(() => setChecked((c) => c + 1), 650)
    return () => clearTimeout(t)
  }, [checked])
  return (
    <>
      <div className="px-3 py-2 border-b border-base-200 flex items-center justify-between">
        <p className="text-[11px] font-semibold text-base-content">AI Analysis</p>
        <span className="loading loading-dots loading-xs text-base-content/30"></span>
      </div>
      <div className="flex-1 px-3 py-2.5 flex flex-col gap-2.5 overflow-hidden">
        <div className="bg-base-200 rounded-lg px-2.5 py-2">
          <p className="text-[10px] text-base-content/40 mb-0.5">Labcorp · Mar 2024</p>
          <p className="text-[10px] font-semibold text-base-content">Amount due: $3,500</p>
        </div>
        <p className="text-[10px] font-semibold text-base-content">Reviewing your bill…</p>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-200 ${i < checked ? 'bg-base-content/80' : 'bg-base-200'}`}>
                {i < checked && (
                  <svg className="w-2 h-2 text-base-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className={`text-[10px] transition-colors duration-200 ${i < checked ? 'text-base-content' : 'text-base-content/30'}`}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function PhoneScreen3() {
  return (
    <>
      <div className="px-3 py-2 border-b border-base-200 flex items-center justify-between">
        <p className="text-[11px] font-semibold text-base-content">Case #1042</p>
        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded" style={{ background: 'oklch(91% 0.03 48)', color: 'oklch(30% 0 0)' }}>Resolved</span>
      </div>
      <div className="flex-1 px-3 py-2.5 flex flex-col gap-2.5 overflow-hidden">
        <div className="flex gap-1.5">
          <div className="flex-1 bg-base-200 rounded-lg p-2 text-center">
            <p className="text-[9px] text-base-content/40 mb-0.5">Was</p>
            <p className="text-[10px] font-mono font-semibold text-base-content/40 line-through">$3,500</p>
          </div>
          <div className="flex-1 rounded-lg p-2 text-center" style={{ background: 'oklch(91% 0.03 48)' }}>
            <p className="text-[9px] text-base-content/40 mb-0.5">Now</p>
            <p className="text-[10px] font-mono font-bold text-base-content">$2,520</p>
          </div>
        </div>
        <div className="flex items-start gap-1.5">
          <div className="w-5 h-5 rounded-full bg-base-300 flex items-center justify-center text-[8px] font-bold text-base-content flex-shrink-0 mt-0.5">SA</div>
          <div className="bg-base-200 rounded-xl rounded-tl-sm px-2 py-1.5 flex-1">
            <p className="text-[10px] text-base-content/70 leading-relaxed">Successfully reduced your bill by $980. The provider removed the duplicate charges.</p>
          </div>
        </div>
        <div className="flex items-start gap-1.5 justify-end">
          <div className="bg-base-content rounded-xl rounded-tr-sm px-2 py-1.5">
            <p className="text-[10px] text-base-100 leading-relaxed">Amazing, thank you!</p>
          </div>
        </div>
      </div>
    </>
  )
}

const phoneScreens = [PhoneScreen1, PhoneScreen2, PhoneScreen3]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const [screenKey, setScreenKey] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => {
      setActive((i) => (i + 1) % steps.length)
      setScreenKey((k) => k + 1)
    }, STEP_DURATION)
    return () => clearTimeout(t)
  }, [active])

  const PhoneScreen = phoneScreens[active]

  return (
    <section className="border-t border-base-200">
      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-base-content/50 mb-3">How it works</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-base-content leading-tight max-w-xl mx-auto">
            Upload your bill and we'll review it for errors and help reduce what you owe
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 items-stretch">
          {/* Steps */}
          <div className="space-y-3">
            {steps.map((step, i) => {
              const isActive = i === active
              return (
                <button
                  key={step.number}
                  onClick={() => { setActive(i); setScreenKey((k) => k + 1) }}
                  className="w-full text-left card border transition-all duration-300 cursor-pointer"
                  style={isActive ? {
                    background: 'rgba(210, 100, 30, 0.12)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    borderColor: 'rgba(210, 100, 30, 0.25)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 20px rgba(0,0,0,0.06)',
                  } : {
                    background: 'rgba(210, 100, 30, 0.05)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    borderColor: 'rgba(210, 100, 30, 0.12)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
                  }}
                >
                  <div className="card-body p-6 gap-0">
                    <div className="flex items-start gap-5">
                      <span className={`text-sm font-semibold w-5 shrink-0 pt-0.5 transition-colors duration-300 ${isActive ? 'text-base-content/60' : 'text-base-content/25'}`}>
                        {step.number}
                      </span>
                      <div className="flex-1">
                        <h3 className={`font-semibold transition-colors duration-300 ${isActive ? 'text-base-content' : 'text-base-content/40'}`}>
                          {step.title}
                        </h3>
                        <div
                          className="overflow-hidden transition-all duration-300 ease-in-out"
                          style={{ maxHeight: isActive ? '60px' : '0px', opacity: isActive ? 1 : 0 }}
                        >
                          <p className="text-sm text-base-content/60 leading-relaxed mt-2">{step.description}</p>
                        </div>
                        {isActive && <ProgressBar key={screenKey} stepKey={screenKey} duration={STEP_DURATION} />}
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Partial phone — bleeds off the bottom */}
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{ background: 'linear-gradient(170deg, oklch(89% 0.06 48) 0%, oklch(95% 0.03 48) 50%, oklch(98% 0.008 80) 100%)' }}
          >
            <GridOverlay />
            <GrainOverlay />
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: '28px' }}
            >
              <div
                className="relative rounded-[2rem] shadow-2xl overflow-hidden"
                style={{ width: '210px', height: '430px', border: '7px solid oklch(20% 0 0)' }}
              >
                {/* Dynamic island */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 z-10 rounded-full"
                  style={{ top: '10px', width: '56px', height: '16px', background: 'oklch(12% 0 0)' }}
                />
                {/* Screen */}
                <div className="absolute inset-0 bg-base-100 flex flex-col overflow-hidden" style={{ paddingTop: '34px' }}>
                  <PhoneScreen key={screenKey} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

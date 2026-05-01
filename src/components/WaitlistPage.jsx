import { useState } from 'react'
import { BRAND_NAME } from '../constants'
import { colors, gradients } from '../theme'
import GridOverlay from './GridOverlay'
import GrainOverlay from './GrainOverlay'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-8"
      style={{ background: gradients.hero }}
    >
      <GridOverlay />
      <GrainOverlay />

      <div className="relative z-10 max-w-lg w-full text-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md"
          style={{ background: colors.primary }}
        >
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold text-base-content mb-3">
          You're on the list!
        </h1>

        <p className="text-base-content/70 leading-relaxed mb-3">
          We're not open yet — but you'll be first to know when we launch.
        </p>

        <div
          className="rounded-2xl px-5 py-4 mb-8 text-sm text-base-content/60 text-left flex gap-3 items-start"
          style={{ background: colors.glassActive, border: `1px solid ${colors.glassBorderActive}` }}
        >
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            <strong className="text-base-content/80">Heads up:</strong> your bill was not uploaded or stored. Nothing left your device — we aren't ready to process bills yet.
          </span>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: colors.tint300 }}
            >
              <svg className="w-6 h-6" style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold text-base-content">We've got your email!</p>
            <p className="text-sm text-base-content/50">We'll reach out when {BRAND_NAME} is ready for you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered flex-1"
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ background: colors.primary, color: colors.primaryContent, border: 'none' }}
            >
              Subscribe to updates
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

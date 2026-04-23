import { useState } from 'react'
import { colors, glass } from '../theme'

export default function Pricing() {
  const [billAmount, setBillAmount] = useState(3500)
  const discountRate = 0.28
  const savings = Math.round(billAmount * discountRate)
  const fee = Math.min(Math.round(savings * 0.1), 200)
  const netSavings = savings - fee
  const youPay = billAmount - savings

  return (
    <section className="border-t border-base-200">
      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-base-content/50 mb-3">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-base-content leading-tight mb-3">
            You only pay if we lower your bill
          </h2>
          <p className="text-base text-base-content/60">
            No upfront fees. We take 10% of what we save you, capped at $200 per bill.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-base-200 grid grid-cols-1 lg:grid-cols-2">
          {/* Left: social proof on subtle gradient */}
          <div
            className="relative p-10 lg:p-12 flex flex-col justify-end min-h-72 overflow-hidden"
          >
            <img
              src="/ron.jpeg"
              alt="Ron G"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${colors.darkOverlay} 0%, transparent 60%)` }} />
            <div className="card bg-base-100/80 backdrop-blur border border-base-200 p-5 self-start relative">
              <div className="flex items-start gap-4">
                <div className="avatar">
                  <div className="rounded-full w-10 h-10 overflow-hidden">
                    <img src="/ron.jpeg" alt="Ron G" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-base-content/50 mb-0.5">Ron G</p>
                  <p className="text-xs text-base-content/60 mb-1">Successfully saved</p>
                  <p className="text-2xl font-bold text-base-content">$980</p>
                  <p className="text-xs text-base-content/50 mt-1">Healthwise earned $98</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: calculator */}
          <div className="p-8 lg:p-10 border-l border-base-200 bg-base-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-base-100 border border-base-300 flex items-center justify-center">
                <svg className="w-5 h-5 text-base-content/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-base-content">Calculate your savings</h3>
            </div>

            <div className="space-y-5">
              <div>
                <label className="label pb-1">
                  <span className="label-text text-sm text-base-content/60">Your bill amount</span>
                </label>
                <label className="input input-bordered bg-base-100 flex items-center gap-2 text-base-content font-medium">
                  <span className="text-base-content/50">$</span>
                  <input
                    type="number"
                    value={billAmount}
                    onChange={(e) => setBillAmount(Math.max(0, Number(e.target.value)))}
                    className="grow"
                  />
                </label>
              </div>

              <div className="rounded-xl p-4 bg-base-200">
                <div className="flex justify-between text-xs text-base-content/50 mb-2">
                  <span>Target discount</span>
                  <span className="font-semibold text-base-content">{Math.round(discountRate * 100)}%</span>
                </div>
                <div className="flex gap-2">
                  {[20, 28, 40, 60].map((pct) => (
                    <button key={pct} className={`btn btn-xs flex-1 ${pct === 28 ? 'btn-primary' : 'btn-ghost'}`}>
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              <div className="divider my-0"></div>

              <dl className="space-y-3">
                <div className="flex justify-between text-sm">
                  <dt className="text-base-content/60">You save</dt>
                  <dd className="font-semibold text-base-content">${savings.toLocaleString()}.00</dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-base-content/60">Our 10% success fee</dt>
                  <dd className="font-semibold text-base-content">−${fee}.00</dd>
                </div>
                <div className="flex justify-between text-sm border-t border-base-200 pt-3">
                  <dt className="text-base-content/60">You'd pay</dt>
                  <dd className="text-base-content">
                    <span className="line-through text-base-content/30 mr-2">${billAmount.toLocaleString()}.00</span>
                    <span className="font-semibold">${youPay.toLocaleString()}.00</span>
                  </dd>
                </div>
                <div className="flex justify-between font-bold text-base rounded-lg px-3 py-3 bg-base-200">
                  <dt>Your net savings</dt>
                  <dd>${netSavings.toLocaleString()}.00</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

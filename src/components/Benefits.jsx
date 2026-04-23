import { BRAND_AI } from '../constants'

export default function Benefits() {
  return (
    <section className="border-t border-base-200">
      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-base-200">
          {/* Left panel — diagonal gradient */}
          <div
            className="p-10 lg:p-12 flex flex-col justify-between min-h-80"
            style={{
              background: 'linear-gradient(135deg, oklch(91% 0 0) 0%, oklch(96% 0 0) 50%, oklch(93% 0 0) 100%)',
            }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-base-content/50 mb-3">Insurance intelligence</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-base-content leading-tight mb-5">
                Uncover insights that maximize your benefits
              </h2>
              <p className="text-base text-base-content/60 leading-relaxed mb-8">
                We uncover unused benefits, highlight them for you, and answer any coverage questions at lightning speed.
              </p>
            </div>
            <a href="#" className="btn btn-primary self-start">Get started</a>
          </div>

          {/* Right panel — chat demo */}
          <div className="bg-base-100 p-8 lg:p-10 border-l border-base-200 flex flex-col gap-4">
            <div className="flex items-center gap-3 pb-4 border-b border-base-200">
              <div className="badge badge-outline gap-1.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Mental health benefits
              </div>
              <span className="badge badge-outline badge-sm">Free</span>
            </div>

            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-neutral text-sm">
                How much does my plan cover for my child's pediatric dental care?
              </div>
            </div>

            <div className="chat chat-start">
              <div className="chat-image avatar placeholder">
                <div className="bg-base-300 text-base-content rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">G</div>
              </div>
              <div className="chat-header text-xs text-base-content/50 mb-1">{BRAND_AI}</div>
              <div className="chat-bubble bg-base-200 text-base-content text-sm">
                You have a <strong>$40 copay</strong> for virtual therapy sessions.
              </div>
            </div>

            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-neutral text-sm">
                Will Aetna cover my child's knee surgery?
              </div>
            </div>

            <div className="chat chat-start">
              <div className="chat-image avatar placeholder">
                <div className="bg-base-300 text-base-content rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">G</div>
              </div>
              <div className="chat-header text-xs text-base-content/50 mb-1">{BRAND_AI}</div>
              <div className="chat-bubble bg-base-200 text-base-content text-sm">
                Yes — your Aetna plan covers your child's knee surgery under <strong>Section 5: Pediatric Orthopedic &amp; Surgical Services</strong> when medically necessary.
              </div>
            </div>

            <div className="divider my-0 text-xs text-base-content/30">Connect another account</div>
            <button className="btn btn-outline btn-sm w-full">Connect now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

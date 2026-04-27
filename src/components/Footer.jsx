import { BRAND_NAME, BRAND_LEGAL } from '../constants'
import GridOverlay from './GridOverlay'
import GrainOverlay from './GrainOverlay'
import { gradients } from '../theme'

export default function Footer() {
  return (
    <footer
    className="relative overflow-hidden"
    style={{ background: gradients.footer }}
  >
    <GridOverlay direction="to top" />
    <GrainOverlay fadeDirection="to top" />
      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <p className="text-5xl lg:text-6xl font-bold text-base-content mb-4 tracking-tight">{BRAND_NAME}</p>
            <p className="text-sm text-base-content/60 leading-relaxed max-w-xs">
              Save money, time, and energy with a healthcare assistant powered by AI and real experts.
            </p>
            <div className="flex gap-3 mt-6">
              <label className="btn btn-outline btn-sm cursor-pointer">
                Upload your bill
                <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.heic,.png" />
              </label>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-base-content/50 mb-4">Product</p>
            <ul className="space-y-3 text-sm text-base-content/60">
              <li><a href="#" className="hover:text-base-content transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-base-content transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-base-content transition-colors">Insurance coverage</a></li>
              <li><a href="#" className="hover:text-base-content transition-colors">Family plans</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-base-content/50 mb-4">Company</p>
            <ul className="space-y-3 text-sm text-base-content/60">
              <li><a href="#" className="hover:text-base-content transition-colors">About</a></li>
              <li><a href="#" className="hover:text-base-content transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-base-content transition-colors">Privacy policy</a></li>
              <li><a href="#" className="hover:text-base-content transition-colors">Terms of service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <p className="text-xs text-base-content/40">© 2024 {BRAND_LEGAL}. All rights reserved.</p>
          <p className="text-xs text-base-content/40">HIPAA-compliant · Encrypted · Secure</p>
        </div>
      </div>
    </footer>
  )
}

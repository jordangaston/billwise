import { BRAND_NAME } from '../constants'
import GrainOverlay from './GrainOverlay'

export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 pointer-events-none">
      <nav className="max-w-6xl mx-auto pointer-events-auto">
        <div
          className="relative overflow-hidden flex items-center justify-between px-6 py-3 bg-base-100 border border-base-200 shadow-sm rounded-full"
        >
          <GrainOverlay opacity={0.15} fadeDirection="to bottom" />
          <a href="/" className="text-lg font-bold tracking-tight text-base-content">
            {BRAND_NAME}
          </a>
          <div className="flex items-center gap-2">
            <a href="#" className="btn btn-ghost btn-sm font-medium">
              Log in
            </a>
            <a href="#" className="btn btn-primary btn-sm">
              Get started
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

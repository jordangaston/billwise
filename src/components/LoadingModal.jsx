import { colors } from '../theme'

export default function LoadingModal({ visible }) {
  if (!visible) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
    >
      <div className="card bg-base-100 shadow-2xl w-80">
        <div className="card-body p-8 items-center text-center gap-4">
          <span className="loading loading-spinner loading-lg" style={{ color: colors.primary }} />
          <div>
            <p className="font-semibold text-base-content">Uploading your bill…</p>
            <p className="text-sm text-base-content/50 mt-1">Hang tight, this will just take a moment.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

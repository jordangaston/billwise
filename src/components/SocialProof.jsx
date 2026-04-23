const savings = [
  { name: 'Jenny O', amount: '$454' },
  { name: 'Naomi M', amount: '$219' },
  { name: 'Ron J', amount: '$1,421' },
  { name: 'Luke R', amount: '$864' },
  { name: 'Sara K', amount: '$612' },
  { name: 'James T', amount: '$378' },
]

export default function SocialProof() {
  return (
    <section className="border-t border-base-200">
      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-16">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          <div className="lg:shrink-0">
            <p className="text-3xl font-bold text-base-content leading-tight">
              We save customers an<br />average of <span className="underline decoration-2 underline-offset-4">70%</span> on their<br />medical bills
            </p>
            <p className="mt-3 text-sm text-base-content/60">100% free to use. Pay only if we save you money.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {savings.map((s) => (
              <div key={s.name} className="card bg-base-100 border border-base-200 shadow-sm">
                <div className="card-body p-4">
                  <p className="text-xs text-base-content/50 mb-1">{s.name}</p>
                  <p className="text-xs text-base-content/60 mb-1">Successfully saved</p>
                  <p className="text-xl font-bold text-base-content">{s.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

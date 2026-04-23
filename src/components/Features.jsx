const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'We detect and correct issues',
    description: 'We use AI to uncover incorrect charges, duplicate line items, up-coding errors, and other issues instantly.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'We secure financial aid',
    description: 'We find unadvertised financial assistance programs based on household income that can dramatically lower your bills.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'We negotiate discounts',
    description: "We secure lower balances whether you're paying early, paying in full, or self-paying without insurance.",
  },
]

export default function Features() {
  return (
    <section className="border-t border-base-200">
      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20">
        <div
          className="rounded-2xl p-8 lg:p-12 border border-base-200"
          style={{
            background: 'linear-gradient(160deg, oklch(97% 0 0) 0%, oklch(94% 0 0) 100%)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-base-100 border border-base-300 flex items-center justify-center text-base-content/70">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base-content mb-2">{feature.title}</h3>
                  <p className="text-sm text-base-content/60 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

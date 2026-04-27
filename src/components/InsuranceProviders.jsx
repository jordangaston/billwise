const LOGOS = [
  { src: 'https://billshield.app/insurance/humana.png',       alt: 'Humana' },
  { src: 'https://billshield.app/insurance/unitedhealth.png', alt: 'UnitedHealthcare' },
  { src: 'https://billshield.app/insurance/cigna.png',        alt: 'Cigna' },
  { src: 'https://billshield.app/insurance/aetna.png',        alt: 'Aetna' },
]

export default function InsuranceProviders() {
  const items = [...LOGOS, ...LOGOS, ...LOGOS]

  return (
    <section className="border-t border-base-200">
      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20">
        <div className="card rounded-3xl bg-base-100 border border-base-300 flex flex-col sm:flex-row sm:items-center gap-8 px-8 py-6 overflow-hidden">

          <div className="shrink-0 sm:max-w-[40%]">
            <p className="text-2xl font-bold text-base-content leading-tight">We securely connect with 1,300+ insurances and patient portals</p>
            <p className="text-xs text-base-content/40 mt-2 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              HIPAA-aligned &amp; encrypted for privacy
            </p>
          </div>

          <div className="overflow-x-hidden flex-1 min-w-0 mask-fade-x">
            <ul
              className="flex items-center gap-10 w-max"
              style={{ animation: 'marquee 18s linear infinite' }}
            >
              {items.map((logo, i) => (
                <li key={i} className="shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-7 w-auto object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

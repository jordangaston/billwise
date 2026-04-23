const reviews = [
  { name: 'Jenny O',  initials: 'JO', amount: '$454'   },
  { name: 'Naomi M',  initials: 'NM', amount: '$219'   },
  { name: 'Ron J',    initials: 'RJ', amount: '$1,421' },
  { name: 'Luke R',   initials: 'LR', amount: '$864'   },
  { name: 'Sara K',   initials: 'SK', amount: '$612'   },
  { name: 'James T',  initials: 'JT', amount: '$378'   },
]

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.1L6 8.02 3.22 9.56l.53-3.1L1.5 4.27l3.11-.45L6 1z" />
    </svg>
  )
}

function ReviewCard({ name, initials, amount }) {
  return (
    <li
      className="flex flex-col justify-center gap-3 pl-8 border-l border-base-300 shrink-0"
      style={{ height: 110 }}
    >
      <div className="flex items-center gap-2" style={{ width: 188 }}>
        <div className="w-[34px] h-[34px] rounded-full bg-base-200 flex items-center justify-center shrink-0">
          <span className="text-[10px] font-semibold text-base-content/60">{initials}</span>
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-sm font-medium text-base-content leading-none">{name}</span>
          <div className="flex items-center gap-0.5 text-amber-400">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1" style={{ width: 190 }}>
        <span className="text-sm text-base-content/60">Successfully saved</span>
        <span className="text-xs font-semibold text-primary-content bg-primary rounded-full px-2.5 py-0.5">{amount}</span>
      </div>
    </li>
  )
}

export default function SocialProof() {
  const items = [...reviews, ...reviews]

  return (
    <section className="py-16 border-t border-base-200">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="card rounded-3xl bg-base-100 border border-base-300 flex flex-row items-center gap-10 px-8 py-6 overflow-hidden">
          <div className="shrink-0 flex flex-col gap-2.5" style={{ maxWidth: '30%' }}>
            <p className="text-2xl font-bold text-base-content leading-tight">
              We save customers an average of{' '}
              <span className="underline decoration-2 underline-offset-4">70%</span> on their medical bills
            </p>
            <p className="text-sm text-base-content/60">100% free to use. Pay only if we save you money.</p>
          </div>

          <div className="overflow-x-hidden flex-1 min-w-0">
            <ul
              role="group"
              className="flex gap-10 w-max"
              style={{ animation: 'marquee 28s linear infinite' }}
            >
              {items.map((r, i) => (
                <ReviewCard key={i} {...r} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

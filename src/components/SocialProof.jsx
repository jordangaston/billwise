const reviews = [
  { name: 'Jenny O',  avatar: 'https://i.pravatar.cc/150?img=20', amount: '$454'   },
  { name: 'Naomi M',  avatar: 'https://i.pravatar.cc/150?img=44', amount: '$219'   },
  { name: 'Ron J',    avatar: 'https://i.pravatar.cc/150?img=52', amount: '$1,421' },
  { name: 'Luke R',   avatar: 'https://i.pravatar.cc/150?img=13', amount: '$864'   },
  { name: 'Sara K',   avatar: 'https://i.pravatar.cc/150?img=47', amount: '$612'   },
  { name: 'James T',  avatar: 'https://i.pravatar.cc/150?img=3',  amount: '$378'   },
]

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.1L6 8.02 3.22 9.56l.53-3.1L1.5 4.27l3.11-.45L6 1z" />
    </svg>
  )
}

function ReviewCard({ name, avatar, amount }) {
  return (
    <li
      className="flex flex-col justify-center gap-3 pl-8 border-l border-base-300 shrink-0"
      style={{ height: 110 }}
    >
      <div className="flex items-center gap-2" style={{ width: 188 }}>
        <img
          src={avatar}
          alt={name}
          className="w-[34px] h-[34px] rounded-full object-cover shrink-0"
        />
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
    <section className="border-t border-base-200">
      <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20">
        <div className="card rounded-3xl bg-base-100 border border-base-300 flex flex-row items-center gap-10 px-8 py-6 overflow-hidden">
          <div className="shrink-0 flex flex-col gap-2.5" style={{ maxWidth: '30%' }}>
            <p className="text-2xl font-bold text-base-content leading-tight">
              Don't take our word for it
            </p>
            <p className="text-sm text-base-content/60">Hear it from people who've saved.</p>
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

import { Check } from 'lucide-react'
import RRMark from './RRMark'

const FEATURES = [
  'Up to 25 active job posts',
  'Premium Placement & Visibility',
  'Messaging anyone, unlimited',
  'Unlimited invites',
  'View all applicants',
  'Unlimited invites to jobseekers',
]

export default function MembershipMockup() {
  return (
    <div className="relative w-full max-w-[360px] mx-auto pt-6 pb-6">
      <span
        className="absolute left-2 top-0 w-3.5 h-3.5 rounded-full bg-brand-light z-10"
        aria-hidden="true"
      />
      <RRMark size={70} className="absolute right-2 top-10 z-10" />

      <div className="relative rounded-[28px] border border-[#F6F4FF] bg-white px-7 py-7 shadow-[14px_30px_70px_rgba(49,89,211,0.12)]">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-quiet">
          Your Membership Tier
        </p>
        <p className="mt-1 text-2xl font-semibold text-brand-light">Premium</p>

        <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-ink/50">Features</p>
        <ul className="mt-3 flex flex-col gap-3">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-ink-soft/90">
              <span
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)]"
                aria-hidden="true"
              >
                <Check size={10} className="text-white" strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-[14px_10px_30px_rgba(49,89,211,0.12)] border border-[#F6F4FF]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(235,237,255,0.7)_0%,rgba(173,184,255,0.7)_100%)] text-[#253D80] font-bold text-xs">
            PP
          </div>
          <div>
            <p className="text-[11px] font-semibold text-brand-dark">Upcoming Payment In&hellip;</p>
            <p className="text-sm font-medium text-ink">14 Days &mdash; $79.99</p>
          </div>
        </div>
      </div>
    </div>
  )
}

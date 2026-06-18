import { Check, X, Feather } from 'lucide-react'
import Reveal from './Reveal'

const FREE_FEATURES = [
  { label: '1 Active Job', included: true },
  { label: 'Basic List Placement', included: true },
  { label: 'Unlimited Job Applicants', included: false },
  { label: 'Invite Anyone to Apply to Your Jobs', included: false },
]

const PREMIUM_FEATURES = [
  { label: 'Unlimited Job Posts', included: true },
  { label: 'Instant Job Post Approval', included: true },
  { label: 'Premium List Placement', included: true },
  { label: 'Unlimited Job Applicants', included: true },
]

function FeatureRow({ label, included }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-base text-ink-soft">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          included
            ? 'bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.16%)] text-white'
            : 'bg-[linear-gradient(132.56deg,#A2A3B8_5.63%,#808191_106.16%)] text-white'
        }`}
        aria-hidden="true"
      >
        {included ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
      </span>
      <span className={included ? '' : 'text-ink-quiet'}>{label}</span>
    </li>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white pt-16 pb-32 sm:pt-24 sm:pb-40">
      <Reveal>
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-ink">Help Is One Click Away</h2>
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-[1040px] px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Free plan */}
        <Reveal className="relative rounded-[28px] bg-white p-8 sm:p-10 shadow-[-15px_50px_150px_rgba(49,89,211,0.12)]">
          <div className="flex flex-col items-center gap-1 rounded-2xl bg-[#ECF2FF] py-7">
            <span className="text-3xl font-semibold text-brand-light">Free</span>
            <span className="text-lg font-medium text-ink/40">Basic</span>
          </div>
          <ul className="mt-7 flex flex-col gap-4">
            {FREE_FEATURES.map((f) => (
              <FeatureRow key={f.label} {...f} />
            ))}
          </ul>
          <a
            href="#signup"
            className="mt-8 block rounded-2xl border-2 border-brand-dark py-3.5 text-center text-lg font-semibold text-brand-dark transition-colors hover:bg-brand-dark/5"
          >
            Get Started
          </a>
        </Reveal>

        {/* Premium plan */}
        <Reveal
          delay={120}
          className="relative rounded-[28px] bg-white p-8 sm:p-10 shadow-[-15px_50px_150px_rgba(49,89,211,0.16)] ring-1 ring-brand-light/20"
        >
          <span className="absolute -top-5 left-8 flex items-center gap-2 rounded-full bg-brand-ice px-4 py-2 text-sm font-semibold text-ink shadow-sm">
            <Feather size={16} className="text-brand-dark" aria-hidden="true" />
            Premium
          </span>
          <div className="flex flex-col items-center gap-1 rounded-2xl bg-[#ECF2FF] py-7">
            <span className="bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.16%)] bg-clip-text text-3xl font-semibold text-transparent">
              $79.99
            </span>
            <span className="text-lg font-medium text-ink/40">Per Month</span>
          </div>
          <ul className="mt-7 flex flex-col gap-4">
            {PREMIUM_FEATURES.map((f) => (
              <FeatureRow key={f.label} {...f} />
            ))}
          </ul>
          <a
            href="#signup"
            className="mt-8 block rounded-2xl bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] py-3.5 text-center text-lg font-semibold text-white shadow-[10px_0_50px_rgba(49,89,211,0.28)] transition-opacity hover:opacity-90"
          >
            Get Started
          </a>
        </Reveal>
      </div>

      {/* bottom wave into footer */}
      <svg
        className="absolute bottom-0 left-0 w-full translate-y-px"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,60 C320,0 600,100 900,50 C1150,10 1300,70 1440,40 L1440,120 L0,120 Z"
          fill="#1E3E85"
        />
      </svg>
    </section>
  )
}

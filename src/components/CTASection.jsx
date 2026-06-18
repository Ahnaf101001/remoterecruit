import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import DashboardMockup from './DashboardMockup'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FF] py-20 sm:py-28">
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-white/40 blur-2xl" aria-hidden="true" />
      <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-white/40 blur-2xl" aria-hidden="true" />
      <div
        className="absolute left-[12%] bottom-10 hidden sm:block h-20 w-20 rounded-full bg-[linear-gradient(132.56deg,#FFED43_5.63%,#F29939_106.18%)]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[14%] bottom-1/4 hidden sm:block h-7 w-7 rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <DashboardMockup />
        </Reveal>

        <Reveal delay={150}>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">Are you ready?</p>
          <h2 className="mt-3 text-3xl sm:text-[44px] font-semibold leading-tight text-ink">
            Help is only a few clicks away!
          </h2>
          <p className="mt-5 max-w-md text-base sm:text-lg leading-relaxed text-ink-faint">
            Click below to get set up super quickly and find help now!
          </p>
          <a
            href="#signup"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-light/[0.16] px-2 py-2 pr-7 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-light/25"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-white">
              <ArrowRight size={18} aria-hidden="true" />
            </span>
            Get Started
          </a>
        </Reveal>
      </div>
    </section>
  )
}

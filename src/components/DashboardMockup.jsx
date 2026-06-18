import { Bell, Search, Star, MoreHorizontal } from 'lucide-react'
import Logo from './Logo'

const JOBS = [
  {
    company: 'Bungie',
    tag: 'HOURLY',
    meta: 'Full Time · 3 Months · English · 12h',
    title: 'Senior UI/UX Designer needed for ongoing support',
    applied: true,
    highlight: false,
  },
  {
    company: 'The Vanguard',
    tag: '$2,000',
    meta: '1 Month · English · 12h',
    title: 'Senior UI/UX Designer needed for ongoing support',
    applied: false,
    highlight: true,
  },
  {
    company: 'New Monarchy',
    tag: 'HOURLY',
    meta: 'Full Time · 3 Months · English · 12h',
    title: 'Senior UI/UX Designer needed for ongoing support',
    applied: false,
    highlight: false,
  },
]

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[700px] rounded-[28px] bg-white p-2 shadow-[15px_44px_108px_rgba(49,89,211,0.18)] overflow-hidden">
      <div className="flex rounded-2xl overflow-hidden border border-[#EEF1FB]">
        {/* sidebar */}
        <aside className="hidden sm:flex w-40 shrink-0 flex-col gap-6 bg-[linear-gradient(160deg,#1E3E85,#336DA6)] p-5">
          <Logo className="text-sm" />
          <nav aria-label="Dashboard" className="mt-2 flex flex-col gap-1 text-[11px] text-white/70">
            <span className="rounded-lg bg-white/15 px-3 py-2 font-medium text-white">Find Work</span>
            <span className="px-3 py-2">Your Jobs</span>
            <span className="px-3 py-2">Settings</span>
          </nav>
        </aside>

        {/* main */}
        <div className="flex-1 min-w-0 bg-[#FAFBFF] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] text-ink-quiet">Welcome Max</p>
              <h3 className="text-lg font-semibold text-ink">Let&rsquo;s Find Work</h3>
            </div>
            <span className="relative text-ink-quiet">
              <Bell size={18} aria-hidden="true" />
              <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-brand-light text-[8px] font-bold text-white flex items-center justify-center">
                2
              </span>
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <select
              aria-label="Sort jobs"
              className="rounded-lg border border-[#E7EAF5] bg-white px-3 py-2 text-[11px] text-ink-quiet"
              defaultValue="recent"
            >
              <option value="recent">Most Recent Jobs</option>
              <option value="oldest">Oldest Jobs</option>
            </select>
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#E7EAF5] bg-white px-3 py-2 text-[11px] text-ink-quiet">
              <Search size={12} aria-hidden="true" />
              <span>Search</span>
            </div>
          </div>

          <div className="mt-3 flex gap-2 overflow-x-auto text-[10px] font-medium">
            {['UI/UX', 'Front End', 'Back End', 'Data Science', 'Sales'].map((tab, i) => (
              <span
                key={tab}
                className={`shrink-0 rounded-md px-2.5 py-1.5 ${
                  i === 0 ? 'bg-brand-dark text-white' : 'border border-[#E7EAF5] bg-white text-ink-quiet'
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          <p className="mt-4 text-[11px] font-semibold text-ink-quiet">Recent Jobs</p>
          <ul className="mt-2 flex flex-col gap-2">
            {JOBS.map((job) => (
              <li
                key={job.company}
                className={`rounded-xl p-3 ${
                  job.highlight ? 'bg-brand-dark text-white' : 'bg-white border border-[#E7EAF5]'
                }`}
              >
                <p
                  className={`text-[10px] font-semibold ${
                    job.highlight ? 'text-white/90' : 'text-brand-dark'
                  }`}
                >
                  {job.company} &middot; {job.tag} &middot; {job.meta}
                  {job.applied && (
                    <span className="ml-2 rounded bg-brand-light/20 px-1.5 py-0.5 text-[9px]">Applied</span>
                  )}
                </p>
                <p className={`mt-1 text-xs font-medium ${job.highlight ? 'text-white' : 'text-ink'}`}>
                  {job.title}
                </p>
                <div
                  className={`mt-2 flex items-center gap-3 ${
                    job.highlight ? 'text-white/70' : 'text-ink-quiet'
                  }`}
                >
                  <Star size={12} aria-hidden="true" />
                  <MoreHorizontal size={12} aria-hidden="true" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* filter panel */}
        <aside className="hidden md:block w-44 shrink-0 border-l border-[#EEF1FB] bg-white p-4">
          <p className="text-[11px] font-semibold text-ink">Filter</p>
          <div className="mt-3 flex flex-col gap-2 text-[11px] text-ink-quiet">
            {['Full Time', 'Part Time', 'Hourly', 'Fixed Rate', 'Worldwide', 'Important'].map((f, i) => (
              <label key={f} className="flex items-center gap-2">
                <input type="checkbox" defaultChecked={i === 1 || i === 3} readOnly className="accent-brand-dark" />
                {f}
              </label>
            ))}
          </div>
          <div className="mt-4 flex gap-2 text-[10px] font-semibold">
            <span className="rounded-md bg-brand-dark px-2 py-1 text-white">Unselect all</span>
            <span className="px-2 py-1 text-brand-dark">Select All</span>
          </div>
          <p className="mt-4 text-[11px] font-semibold text-ink">Language</p>
          <div className="mt-2 flex flex-col gap-2 text-[11px] text-ink-quiet">
            <label className="flex items-center gap-2">
              <input type="radio" name="lang" defaultChecked readOnly className="accent-brand-dark" />
              English
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="lang" readOnly className="accent-brand-dark" />
              Anything
            </label>
          </div>
          <p className="mt-4 text-[10px] font-semibold text-brand-dark">Reset all filters</p>
        </aside>
      </div>
    </div>
  )
}

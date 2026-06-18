import { Play } from 'lucide-react'
import Avatar from './Avatar'

const TAGS = ['Python Dev', 'Javascript', 'Front End', 'Back End', 'iOS Development', '+12']

export default function ProfileMockup() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto pb-16 pt-6">
      <span
        className="absolute left-1 top-0 w-3.5 h-3.5 rounded-full bg-brand-light z-10"
        aria-hidden="true"
      />

      <div className="relative rounded-[28px] border border-[#F6F4FF] bg-white p-3 shadow-[14px_30px_70px_rgba(49,89,211,0.12)]">
        <div className="overflow-hidden rounded-2xl bg-[linear-gradient(150deg,#1E3E85_0%,#8E80FC_100%)] px-4 pt-4 pb-12">
          <p className="text-xs font-semibold text-white">102 Jobs Completed!</p>
          <p className="text-[10px] text-white/70">$100,000 Earned over 12 Months</p>

          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/95 px-3 py-2.5">
            <Avatar name="Dylan Foster" size={36} paletteIndex={2} />
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">Dylan</p>
              <p className="text-[10px] text-ink-quiet">Front End Dev</p>
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-light text-white">
              <Play size={12} fill="currentColor" aria-hidden="true" />
            </span>
            <span className="rounded-full bg-brand-light/10 px-2 py-1 text-[9px] font-semibold text-brand-dark">
              Edit Profile
            </span>
          </div>
        </div>

        <div className="-mt-8 mx-2 rounded-2xl bg-white p-3 shadow-[0_10px_30px_rgba(49,89,211,0.1)]">
          <div className="flex gap-4 text-[10px] font-semibold text-ink-quiet">
            <span className="text-brand-dark border-b-2 border-brand-dark pb-1">About</span>
            <span className="pb-1">Reviews</span>
            <span className="pb-1">Portfolio</span>
          </div>
          <p className="mt-2 text-[10px] leading-snug text-ink-quiet">
            Hello, my name is Dylan and I&rsquo;m a self-taught developer who&rsquo;s
            obsessed with clean, accessible interfaces.
          </p>
        </div>
      </div>

      {/* floating feedback pill */}
      <div className="absolute -bottom-2 left-6 right-6 sm:right-auto flex items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-[14px_10px_30px_rgba(49,89,211,0.15)] border border-[#F6F4FF] max-w-[260px]">
        <Avatar name="Best Developer" size={42} ring paletteIndex={0} />
        <div>
          <p className="text-[11px] font-semibold text-brand-dark">Past Client Feedback</p>
          <p className="text-sm font-medium text-ink">Best Developer Ever!</p>
        </div>
      </div>

      {/* tags */}
      <div className="mt-7 flex flex-wrap gap-2">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="rounded-lg bg-[linear-gradient(132.56deg,rgba(87,153,235,0.1)_5.63%,rgba(159,116,251,0.1)_106.18%)] px-3 py-1.5"
          >
            <span className="text-xs font-medium bg-[linear-gradient(131.63deg,#336DA6_6.87%,#1E3E85_106.04%)] bg-clip-text text-transparent">
              {tag}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

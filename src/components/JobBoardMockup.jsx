import { Search } from 'lucide-react'
import Avatar from './Avatar'
import RRMark from './RRMark'

export default function JobBoardMockup() {
  return (
    <div className="relative w-full max-w-[410px] mx-auto pb-16 pr-4">
      <RRMark
        size={64}
        className="absolute -right-2 top-[34%] z-10 hidden sm:flex"
      />
      <span
        className="absolute -left-2 -top-2 w-4 h-4 rounded-full bg-brand-light z-10"
        aria-hidden="true"
      />

      {/* main card */}
      <div className="relative rounded-[28px] border border-[#F6F4FF] bg-white p-3 shadow-[14px_30px_70px_rgba(49,89,211,0.12)]">
        <div className="flex overflow-hidden rounded-2xl">
          <div className="w-9 shrink-0 bg-[linear-gradient(160deg,#1E3E85,#336DA6)]" aria-hidden="true" />
          <div className="flex-1 bg-[#FAFBFF] p-4">
            <p className="text-[11px] text-ink-quiet">Welcome Max</p>
            <h3 className="text-base font-semibold text-ink">Let&rsquo;s Find Work</h3>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 rounded-lg border border-[#E7EAF5] bg-white px-2 py-1.5 text-[10px] text-ink-quiet">
                Most Recent Jobs
              </div>
              <div className="flex items-center gap-1 rounded-lg border border-[#E7EAF5] bg-white px-2 py-1.5 text-[10px] text-ink-quiet">
                <Search size={10} aria-hidden="true" />
                Search
              </div>
            </div>

            <div className="mt-3 flex gap-1.5 text-[9px]">
              <span className="rounded-md bg-brand-dark px-2 py-1 font-medium text-white">UI/UX</span>
              <span className="rounded-md bg-white border border-[#E7EAF5] px-2 py-1 text-ink-quiet">Front End</span>
              <span className="rounded-md bg-white border border-[#E7EAF5] px-2 py-1 text-ink-quiet">Sales</span>
            </div>

            <p className="mt-3 text-[10px] font-semibold text-ink-quiet">Recent Jobs</p>
            <div className="mt-2 rounded-lg bg-white border border-[#E7EAF5] p-2">
              <p className="text-[9px] font-semibold text-brand-dark">Bungie · Hourly · Full Time</p>
              <p className="text-[10px] font-medium text-ink">Senior UI/UX Designer needed</p>
            </div>
          </div>
        </div>
      </div>

      {/* floating testimonial pills */}
      <div className="mt-4 ml-6 flex flex-col gap-3">
        <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-[14px_10px_30px_rgba(49,89,211,0.12)] border border-[#F6F4FF] max-w-[270px]">
          <Avatar name="Felonious Gru" size={42} ring paletteIndex={0} />
          <div>
            <p className="text-[11px] font-semibold text-brand-dark">Python Developer</p>
            <p className="text-sm font-medium text-ink">Felonious Gru</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-[14px_10px_30px_rgba(49,89,211,0.12)] border border-[#F6F4FF] max-w-[290px] ml-6">
          <Avatar name="Mel Muselphiem" size={42} ring paletteIndex={1} />
          <div>
            <p className="text-[11px] font-semibold text-brand-light">Front End Wizard</p>
            <p className="text-sm font-medium text-ink">Mel Muselphiem</p>
          </div>
        </div>
      </div>
    </div>
  )
}

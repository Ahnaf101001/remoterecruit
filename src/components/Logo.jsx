/**
 * The RemoteRecruit logotype: "Remote" in brand blue stacked over
 * "Recruit" in white, used on dark backgrounds throughout the design
 * (header over the hero, and the footer).
 */
export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex flex-col leading-none select-none ${className}`}>
      <span className="font-bold text-brand-light tracking-tight">Remote</span>
      <span className="font-bold text-white tracking-tight -mt-1 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-light inline-block" aria-hidden="true" />
        Recruit
      </span>
    </span>
  )
}

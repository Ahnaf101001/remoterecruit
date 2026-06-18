/**
 * The curved wave shape that blends the hero's dark gradient into the
 * white page background beneath it.
 */
export default function WaveDivider({ className = '' }) {
  return (
    <svg
      className={`absolute bottom-0 left-0 w-full translate-y-px ${className}`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0,40 C240,110 480,0 720,40 C960,80 1200,10 1440,50 L1440,120 L0,120 Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

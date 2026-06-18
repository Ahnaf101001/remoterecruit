/**
 * The small circular gradient badge with the "RR" monogram that floats
 * on top of the mockup graphics in the feature sections.
 */
export default function RRMark({ size = 64, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] shadow-[14px_24px_40px_rgba(49,89,211,0.25)] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 40"
        width={size * 0.5}
        height={size * 0.42}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H14C20 0 24 4 24 9C24 13 21.5 16 18 17.5L25 40H16L10.5 19H8V40H0V0Z"
          fill="white"
        />
        <path
          d="M40 0C44.5 0 48 4 48 9C48 13 45.5 16 42 17.5L48 40H40L34.5 19H32V40H24V0H40ZM38 12C39.5 12 40.5 10.8 40.5 9.2C40.5 7.5 39.5 6.3 38 6.3H32V12H38Z"
          fill="#50C0E3"
        />
      </svg>
    </div>
  )
}

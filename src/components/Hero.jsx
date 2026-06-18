import Reveal from './Reveal'
import WaveDivider from './WaveDivider'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] pt-36 pb-44 sm:pt-44 sm:pb-56"
    >
      {/* second gradient layer for the richer two-tone look from the design */}
      <div className="absolute inset-0 bg-[linear-gradient(131.63deg,#1E3E85_6.87%,#336DA6_106.04%)] opacity-60" />

      {/* decorative ellipses */}
      <div
        className="absolute -right-10 top-[28%] w-[420px] h-[420px] sm:w-[524px] sm:h-[524px] rounded-full bg-white/5"
        aria-hidden="true"
      />
      <div
        className="absolute -left-10 -top-40 w-[420px] h-[420px] sm:w-[524px] sm:h-[524px] rounded-full bg-white/[0.02]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1040px] px-6 text-center">
        <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-[53px] font-bold leading-tight text-white">
          RemoteRecruit&rsquo;s Difference
        </Reveal>
        <Reveal
          delay={120}
          className="mx-auto mt-6 max-w-[860px] text-base sm:text-lg leading-relaxed text-white/80"
        >
          <p>
            RemoteRecruit is connecting the world with an easy-to-use platform that lets
            full-time, part-time, and freelance workers showcase their talents to businesses
            that need them. With no paywalls, no fees, and no barriers, there&rsquo;s nothing
            but you, your talents, and the next step in your career.
          </p>
        </Reveal>
      </div>

      <WaveDivider />
    </section>
  )
}

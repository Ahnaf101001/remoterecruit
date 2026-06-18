import Reveal from './Reveal'

export default function FeatureSection({ id, eyebrow, title, body, mockup, reverse = false }) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <div
        className={`mx-auto max-w-[1240px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <Reveal>
          <span className="inline-block rounded-2xl bg-brand-ice px-4 py-2 text-xs font-semibold tracking-wide text-ink/80">
            {eyebrow}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-medium leading-tight text-ink">{title}</h2>
          <p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-ink/65">{body}</p>
        </Reveal>

        <Reveal delay={150}>{mockup}</Reveal>
      </div>
    </section>
  )
}

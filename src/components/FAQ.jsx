import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Reveal from './Reveal'

const QUESTIONS = [
  {
    q: 'Do I have to sign a long-term contract?',
    a: 'No. You can use RemoteRecruit month-to-month, with no minimum commitment. Upgrade, downgrade, or cancel your plan at any time from your account settings.',
  },
  {
    q: 'Can I pay for a whole year?',
    a: 'Yes. Premium is available as an annual plan at a discount versus paying monthly. Switch billing cycles at any time from your settings.',
  },
  {
    q: 'What if I need help?',
    a: 'Our support team is reachable from inside the app and typically responds within a few hours. We also keep a growing help center for self-serve answers.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1040px] px-6">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-medium text-ink">Common Questions</h2>
        </Reveal>

        <dl className="mt-10 divide-y divide-ink/10">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal as="div" key={item.q} delay={i * 80} className="py-6">
                <dt>
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span className="text-lg sm:text-xl font-medium text-ink transition-colors group-hover:text-brand-dark">
                      {item.q}
                    </span>
                    <span className="shrink-0 text-brand-dark transition-transform group-hover:scale-110">
                      {isOpen ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'mt-4 max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-ink-muted">{item.a}</p>
                </dd>
              </Reveal>
            )
          })}
        </dl>

        <Reveal delay={250}>
          <a
            href="#more-questions"
            className="mt-8 inline-block rounded-2xl border-2 border-brand-light/70 px-7 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-light/10"
          >
            More Questions
          </a>
        </Reveal>
      </div>
    </section>
  )
}

import { Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react'
import Logo from './Logo'
import RRMark from './RRMark'

const SOCIALS = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Github, label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(131.63deg,#336DA6_6.87%,#1E3E85_106.04%)] pt-16 pb-10">
      <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/5" aria-hidden="true" />
      <div className="absolute -left-10 bottom-0 h-[300px] w-[300px] rounded-full bg-white/[0.02]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1240px] px-6">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <Logo className="text-xl" />

          <ul className="flex items-center gap-3">
            {SOCIALS.map(({ Icon, label }) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  aria-label={`RemoteRecruit on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(235,237,255,0.15)_0%,rgba(173,184,255,0.15)_100%)] text-[#DCDEF1] transition-colors hover:bg-white/20"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 h-px w-full bg-[#8BA3CC]/50" />

        <div className="mt-8 flex justify-center">
          <RRMark size={40} />
        </div>
      </div>
    </footer>
  )
}

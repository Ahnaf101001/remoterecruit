import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = ['Home', 'Features', 'Pricing', 'F.A.Q']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1E3E85]/85 backdrop-blur-md shadow-lg shadow-brand-dark/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav
        className="mx-auto max-w-[1240px] flex items-center justify-between px-6"
        aria-label="Primary"
      >
        <a href="#top" className="shrink-0" aria-label="RemoteRecruit home">
          <Logo className="text-base sm:text-lg" />
        </a>

        <ul className="hidden lg:flex items-center gap-9 text-sm font-medium text-white/80">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\./g, '').replace(' ', '-')}`}
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex items-center gap-6">
          <a href="#signin" className="text-sm font-semibold text-white hover:text-white/80 transition-colors">
            Sign In
          </a>
          <a
            href="#signup"
            className="rounded-2xl bg-[#4DA8CC]/90 hover:bg-[#4DA8CC] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#F5F7FE] transition-colors"
          >
            Sign Up
          </a>
        </div>

        <button
          type="button"
          className="sm:hidden text-white p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="sm:hidden mt-4 px-6 pb-4 flex flex-col gap-4 bg-[#1E3E85]/95 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\./g, '').replace(' ', '-')}`}
              className="text-white/80 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <a href="#signin" className="text-sm font-semibold text-white" onClick={() => setOpen(false)}>
              Sign In
            </a>
            <a
              href="#signup"
              className="rounded-2xl bg-[#4DA8CC] px-5 py-2.5 text-sm font-semibold text-[#F5F7FE]"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

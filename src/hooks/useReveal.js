import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref to attach to an element and a boolean for whether
 * that element has scrolled into view. Used to drive fade-in /
 * slide-up reveal animations without pulling in an animation library.
 */
export default function useReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If the browser doesn't support IntersectionObserver, just show it.
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isVisible]
}

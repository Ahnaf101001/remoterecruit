import useReveal from '../hooks/useReveal'

/**
 * Wraps any block of content and fades/slides it up into view the
 * first time it crosses into the viewport. `delay` is in milliseconds
 * and is useful for staggering a group of siblings.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }) {
  const [ref, isVisible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}

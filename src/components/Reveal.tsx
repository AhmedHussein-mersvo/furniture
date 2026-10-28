import { type ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Delay = 0 | 1 | 2 | 3 | 4 | 5

interface RevealProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'li' | 'p' | 'h1' | 'h2' | 'h3' | 'span'
  delay?: Delay
  /** Once visible, keep revealed (default true) */
  threshold?: number
}

const delayClass: Record<Delay, string> = {
  0: '',
  1: 'reveal-delay-1',
  2: 'reveal-delay-2',
  3: 'reveal-delay-3',
  4: 'reveal-delay-4',
  5: 'reveal-delay-5',
}

export default function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  threshold = 0.12,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>(threshold)

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${delayClass[delay]} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}

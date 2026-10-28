import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import logoOnDark from '../assets/logo-on-dark.png'

interface LogoProps {
  className?: string
  /** Use on black/dark surfaces — yellow mark + light wordmark */
  onDark?: boolean
  /** Compact size for scrolled/minimized header */
  compact?: boolean
}

export default function Logo({
  className = '',
  onDark = false,
  compact = false,
}: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Visual Furniture home"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src={onDark ? logoOnDark : logo}
        alt="Visual Furniture"
        className={`w-auto max-w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          onDark
            ? 'h-11 sm:h-12'
            : compact
              ? 'h-8 sm:h-9'
              : 'h-10 sm:h-11'
        }`}
      />
    </Link>
  )
}

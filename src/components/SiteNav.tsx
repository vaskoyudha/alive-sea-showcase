import { useEffect, useState } from 'react'
import { Icon, type IconName } from './Icon'

const showcaseNavLinks: Array<{ href: string; label: string; icon: IconName }> = [
  { href: '/', label: 'Homepage', icon: 'lifebuoy' },
  { href: '/sections/design', label: 'Design', icon: 'layers' },
  { href: '/sections/documentation-testing', label: 'Field', icon: 'waves' },
  { href: '/sections/object-detection', label: 'Vision AI', icon: 'target' },
  { href: '/sections/functional-testing', label: 'Performance', icon: 'gauge' },
  { href: '/sections/basic-safety', label: 'Safety', icon: 'shield' },
  { href: '/view-360', label: '360', icon: 'compass' },
]

const compactScrollTrigger = 2

type SiteNavProps = {
  ariaLabel: string
  logoSrc: string
  sourceDriveUrl: string
  brandHref?: string
  className?: string
}

export function ShowcaseNavLinks() {
  return (
    <div className="nav-links nav-links-showcase">
      {showcaseNavLinks.map((item) => (
        <a href={item.href} key={item.href}>
          <Icon name={item.icon} />
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  )
}

export function SiteNav({ ariaLabel, logoSrc, sourceDriveUrl, brandHref = '/', className = '' }: SiteNavProps) {
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    let frame = 0

    const updateNavState = () => {
      frame = 0
      const nextIsCompact = window.scrollY > compactScrollTrigger

      setIsCompact((current) => (current === nextIsCompact ? current : nextIsCompact))
    }

    const requestUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateNavState)
    }

    updateNavState()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  const stateClass = isCompact ? 'topbar-is-compact' : 'topbar-is-expanded'

  return (
    <nav className={['topbar', stateClass, className].filter(Boolean).join(' ')} aria-label={ariaLabel}>
      <a className="brand" href={brandHref} aria-label="ALIVE home">
        <img src={logoSrc} alt="ALIVE logo" width={224} height={92} fetchPriority="high" />
      </a>
      <ShowcaseNavLinks />
      <a className="nav-cta" href={sourceDriveUrl} target="_blank" rel="noreferrer">
        <Icon name="external" />
        <span>Source Drive</span>
      </a>
    </nav>
  )
}

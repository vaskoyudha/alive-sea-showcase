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

type ShowcaseNavLinksProps = {
  id?: string
  onNavigate?: () => void
}

export function ShowcaseNavLinks({ id, onNavigate }: ShowcaseNavLinksProps) {
  return (
    <div className="nav-links nav-links-showcase" id={id}>
      {showcaseNavLinks.map((item) => (
        <a href={item.href} key={item.href} onClick={onNavigate}>
          <Icon name={item.icon} />
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  )
}

export function SiteNav({ ariaLabel, logoSrc, sourceDriveUrl, brandHref = '/', className = '' }: SiteNavProps) {
  const [isCompact, setIsCompact] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
  const menuStateClass = isMenuOpen ? 'topbar-is-menu-open' : 'topbar-is-menu-closed'

  return (
    <nav className={['topbar', stateClass, menuStateClass, className].filter(Boolean).join(' ')} aria-label={ariaLabel}>
      <a className="brand" href={brandHref} aria-label="ALIVE home" onClick={() => setIsMenuOpen(false)}>
        <img src={logoSrc} alt="ALIVE logo" width={224} height={92} fetchPriority="high" />
      </a>
      <ShowcaseNavLinks id="showcase-nav-links" onNavigate={() => setIsMenuOpen(false)} />
      <a className="nav-cta" href={sourceDriveUrl} target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
        <Icon name="external" />
        <span>Source Drive</span>
      </a>
      <button
        type="button"
        className="nav-menu-toggle"
        aria-controls="showcase-nav-links"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Close mobile navigation menu' : 'Open mobile navigation menu'}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </nav>
  )
}

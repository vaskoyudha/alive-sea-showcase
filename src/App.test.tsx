import { act } from 'react'
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import cssText from './App.css?raw'
import { aliveMedia, aliveMediaTotals, aliveSections, getSectionByPath } from './data/aliveMedia'
import vercelConfigText from '../vercel.json?raw'
import './setupTests'

describe('ALIVE project showcase', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    window.history.pushState({}, '', '/')
  })

  it('presents the ALIVE flood-rescue mission in English in the hero', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /ALIVE \(Advanced Lifeboat for Flood Evacuation\): Smart Lifeboat Based on Object Detection for Flood Evacuation/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Faster Evacuation, More Lives Safely/i)).toBeInTheDocument()
    expect(screen.getByText(/object-detection lifeboat prototype/i)).toBeInTheDocument()
  })

  it('shows an English navbar that follows scroll', () => {
    render(<App />)

    const nav = screen.getByRole('navigation', { name: /Primary navigation/i })
    expect(within(nav).getByRole('link', { name: /Homepage/i })).toHaveAttribute('href', '/')
    expect(within(nav).getByRole('link', { name: /^Design$/i })).toHaveAttribute('href', '/sections/design')
    expect(within(nav).getByRole('link', { name: /^Field$/i })).toHaveAttribute(
      'href',
      '/sections/documentation-testing',
    )
    expect(within(nav).getByRole('link', { name: /^Vision AI$/i })).toHaveAttribute(
      'href',
      '/sections/object-detection',
    )
    expect(within(nav).getByRole('link', { name: /^Performance$/i })).toHaveAttribute(
      'href',
      '/sections/functional-testing',
    )
    expect(within(nav).getByRole('link', { name: /^Safety$/i })).toHaveAttribute('href', '/sections/basic-safety')
    expect(within(nav).getByRole('link', { name: /^360$/i })).toHaveAttribute('href', '/view-360')

    expect(cssText).toMatch(/\.topbar\s*\{[\s\S]*position:\s*fixed/)
    expect(cssText).toMatch(/\.topbar\s*\{[\s\S]*top:\s*0/)
    expect(cssText).toMatch(/\.topbar\s*\{[\s\S]*width:\s*100%/)
    expect(cssText).toMatch(/\.topbar\s*\{[\s\S]*border-radius:\s*0\s*0\s*28px\s*28px/)
    expect(cssText).toMatch(/backdrop-filter:\s*blur\(28px\)\s*saturate\(1\.55\)/)
    expect(cssText).toMatch(/\.topbar\s*\{[\s\S]*inset\s+0\s+1px\s+0\s+rgba\(205,\s*245,\s*255,\s*0\.16\)/)
    expect(cssText).toMatch(/\.topbar-is-compact\s*\{[\s\S]*width:\s*min\(calc\(100vw - 64px\),\s*1080px\)/)
    expect(cssText).toMatch(/\.topbar-is-compact\s*\{[\s\S]*border-radius:\s*999px/)
    expect(cssText).not.toMatch(/nav-float-toggle/)
    expect(cssText).not.toMatch(/topbar-is-floating-open/)
    expect(cssText).toMatch(/scroll-margin-top:\s*156px/)
  })

  it('turns the navbar into a floating pill after the first few pixels of scroll', async () => {
    render(<App />)

    const nav = screen.getByRole('navigation', { name: /Primary navigation/i })
    const expandedZone = document.querySelector<HTMLElement>('[data-nav-expanded-zone]')

    expect(nav).toHaveClass('topbar-is-expanded')
    expect(expandedZone).not.toBeNull()
    vi.spyOn(expandedZone!, 'getBoundingClientRect').mockReturnValue({
      bottom: 900,
      height: 900,
      left: 0,
      right: 1440,
      top: 0,
      width: 1440,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    })

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 4 })
    fireEvent.scroll(window)

    await waitFor(() => expect(nav).toHaveClass('topbar-is-compact'))
  })

  it('exposes every single showcase page directly from the primary navbar', () => {
    render(<App />)

    const nav = screen.getByRole('navigation', { name: /Primary navigation/i })
    const hasNavLink = (name: RegExp, href: string) =>
      within(nav).getAllByRole('link', { name }).some((link) => link.getAttribute('href') === href)

    expect(hasNavLink(/Homepage/i, '/')).toBe(true)
    expect(hasNavLink(/^Design$/i, '/sections/design')).toBe(true)
    expect(hasNavLink(/^Field$/i, '/sections/documentation-testing')).toBe(true)
    expect(hasNavLink(/^Vision AI$/i, '/sections/object-detection')).toBe(true)
    expect(hasNavLink(/Performance/i, '/sections/functional-testing')).toBe(true)
    expect(hasNavLink(/^Safety$/i, '/sections/basic-safety')).toBe(true)
    expect(hasNavLink(/360/i, '/view-360')).toBe(true)
  })

  it('shows system, testing, vision AI, and impact sections in English', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /How ALIVE Works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Validated in the Water/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Object Detection Results/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Aligned with SDG 3 and SDG 11/i })).toBeInTheDocument()
    expect(screen.getByAltText(/Open ALIVE electronics bay/i)).toHaveAttribute(
      'src',
      '/alive/drive-sections/documentation-testing/uji-coba-1/documentation-testing-014-20250909-163753.jpg',
    )
    expect(screen.getAllByText(/Internal electronics bay/i).length).toBeGreaterThan(0)
  })

  it('keeps a comfortable mobile layout for navigation and the 360 viewer', () => {
    expect(cssText).toMatch(/@media\s*\(max-width:\s*520px\)/)
    expect(cssText).toMatch(/\.topbar\s*\{[\s\S]*bottom:\s*14px/)
    expect(cssText).toMatch(/@media\s*\(max-width:\s*900px\)[\s\S]*\.nav-menu-toggle\s*\{[\s\S]*display:\s*flex/)
    expect(cssText).toMatch(/@media\s*\(max-width:\s*900px\)[\s\S]*\.nav-links\s*\{[\s\S]*grid-row:\s*2/)
    expect(cssText).toMatch(/\.topbar-is-menu-open\s+\.nav-links\s*\{[\s\S]*display:\s*grid/)
    expect(cssText).toMatch(/@media\s*\(max-width:\s*520px\)[\s\S]*\.topbar-is-menu-open\s+\.brand,\s*[\s\S]*\.topbar-is-menu-open\s+\.nav-cta,\s*[\s\S]*\.topbar-is-menu-open\s+\.nav-menu-toggle\s*\{[\s\S]*grid-row:\s*2/)
    expect(cssText).toMatch(/@media\s*\(max-width:\s*520px\)[\s\S]*\.nav-links\s*\{[\s\S]*grid-row:\s*1[\s\S]*grid-template-columns:\s*1fr[\s\S]*overflow-y:\s*auto[\s\S]*scroll-snap-type:\s*y proximity/)
    expect(cssText).toMatch(/@media\s*\(max-width:\s*520px\)[\s\S]*\.topbar-is-menu-open\s+\.nav-links\s*\{[\s\S]*display:\s*grid/)
    expect(cssText).toMatch(/@media\s*\(max-width:\s*520px\)[\s\S]*\.nav-links a\s*\{[\s\S]*grid-template-columns:\s*24px minmax\(0,\s*1fr\)[\s\S]*min-height:\s*42px/)
    expect(cssText).toMatch(/\.site-shell\s*\{[\s\S]*padding-bottom:\s*172px/)
    expect(cssText).toMatch(/scroll-padding-bottom:\s*calc\(172px \+ env\(safe-area-inset-bottom\)\)/)
    expect(cssText).toMatch(/\.panorama-window\s*\{[\s\S]*min-height:\s*clamp\(240px,\s*68vw,\s*330px\)/)
    expect(cssText).toMatch(/\.scene-strip\s*\{[\s\S]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)[\s\S]*scroll-margin-bottom:\s*calc\(172px \+ env\(safe-area-inset-bottom\)\)/)
  })

  it('keeps mobile navbar links behind a toggleable menu state', () => {
    render(<App />)

    const nav = screen.getByRole('navigation', { name: /Primary navigation/i })
    const toggle = nav.querySelector<HTMLButtonElement>('.nav-menu-toggle')

    expect(toggle).not.toBeNull()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(nav).toHaveClass('topbar-is-menu-closed')

    fireEvent.click(toggle!)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(nav).toHaveClass('topbar-is-menu-open')

    const designLink = within(nav).getByRole('link', { name: /^Design$/i })
    designLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(designLink)

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(nav).toHaveClass('topbar-is-menu-closed')
  })

  it('renders the project showcase metrics from the Drive assets', () => {
    render(<App />)

    const metrics = screen.getByTestId('evidence-metrics')
    expect(within(metrics).getByText('97.6%')).toBeInTheDocument()
    expect(within(metrics).getByText(/best mAP50/i)).toBeInTheDocument()
    expect(within(metrics).getByText('60.8%')).toBeInTheDocument()
    expect(within(metrics).getByText(/mAP50-95/i)).toBeInTheDocument()
  })

  it('adds a deep dive page with analyzed project showcase context', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /Project Deep Dive/i })).toBeInTheDocument()
    expect(screen.getByText(/November 2025 to March 2026/i)).toBeInTheDocument()
    expect(screen.getByText(/0\.998 m\/s/i)).toBeInTheDocument()
    expect(screen.getByText(/YOLOv8n 640x640/i)).toBeInTheDocument()
    expect(screen.getAllByText('87%').length).toBeGreaterThan(0)
    expect(screen.getByText(/wide-angle or thermal cameras/i)).toBeInTheDocument()
  })

  it('defines a complete Drive media manifest for the detail pages', () => {
    const uniqueSources = new Set(aliveMedia.map((item) => item.src))
    const uniqueSourcePaths = new Set(aliveMedia.map((item) => item.sourcePath))

    expect(aliveMediaTotals.total).toBe(100)
    expect(aliveMediaTotals.images).toBe(89)
    expect(aliveMediaTotals.videos).toBe(11)
    expect(uniqueSources.size).toBe(100)
    expect(uniqueSourcePaths.size).toBe(100)
    expect(getSectionByPath('/sections/design')?.id).toBe('design')
    expect(aliveSections.find((section) => section.id === 'documentation-testing')?.mediaCount).toBe(77)
  })

  it('adds homepage buttons that route into the Drive section detail pages', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /Browse showcase pages/i })).toHaveAttribute('href', '/sections/evidence')
    expect(screen.getByRole('link', { name: /View design details/i })).toHaveAttribute('href', '/sections/design')
    expect(screen.getByRole('link', { name: /View testing details/i })).toHaveAttribute(
      'href',
      '/sections/documentation-testing',
    )
    expect(screen.getByRole('link', { name: /View AI testing/i })).toHaveAttribute(
      'href',
      '/sections/object-detection',
    )
    expect(screen.getAllByRole('link', { name: /View speed results/i })[0]).toHaveAttribute(
      'href',
      '/sections/functional-testing',
    )
    expect(screen.getByRole('link', { name: /View safety results/i })).toHaveAttribute(
      'href',
      '/sections/basic-safety',
    )
    expect(screen.getByRole('link', { name: /Open full 360 page/i })).toHaveAttribute('href', '/view-360')
  })

  it('renders each Drive section detail route with explanatory copy and media counts', () => {
    const routes = [
      { path: '/sections/design', heading: /ALIVE Design System/i, count: '6' },
      { path: '/sections/documentation-testing', heading: /Field Testing Showcase/i, count: '77' },
      { path: '/sections/object-detection', heading: /Vision AI Testing Showcase/i, count: '2' },
      { path: '/sections/functional-testing', heading: /Performance Testing Showcase/i, count: '5' },
      { path: '/sections/basic-safety', heading: /Safety Validation Showcase/i, count: '4' },
    ]

    for (const route of routes) {
      window.history.pushState({}, '', route.path)
      const { unmount } = render(<App />)

      expect(screen.getByRole('heading', { level: 1, name: route.heading })).toBeInTheDocument()
      expect(screen.getAllByText(route.count).length).toBeGreaterThan(0)
      expect(screen.getAllByText(/Showcase focus/i).length).toBeGreaterThan(0)
      expect(screen.getByText(/What to look for/i)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /Homepage/i })).toHaveAttribute('href', '/')

      unmount()
    }
  }, 15_000)

  it('renders the documentation testing route with all five Uji Coba groups', () => {
    window.history.pushState({}, '', '/sections/documentation-testing')

    render(<App />)

    expect(screen.getByRole('heading', { name: 'Uji Coba 1' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Uji Coba 2' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Uji Coba 3' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Uji Coba 4' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Uji Coba 5' })).toBeInTheDocument()
  })

  it('renders object-detection videos with controls on the detail route', () => {
    window.history.pushState({}, '', '/sections/object-detection')

    const { container } = render(<App />)

    expect(container.querySelectorAll('video[controls]').length).toBe(2)
    expect(screen.getByText(/runtime behavior/i)).toBeInTheDocument()
  })

  it('renders a showcase index for all Drive section pages', () => {
    window.history.pushState({}, '', '/sections/evidence')

    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /ALIVE Showcase Collection/i })).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View safety results/i })).toHaveAttribute('href', '/sections/basic-safety')
    expect(screen.getByRole('link', { name: /Explore 360/i })).toHaveAttribute('href', '/view-360')
  })

  it('styles detail page media to show whole images without forced cropping', () => {
    expect(cssText).toMatch(/\.section-media-frame img,\s*\.section-media-frame video\s*\{[\s\S]*object-fit:\s*contain/)
    expect(cssText).toMatch(/\.section-media-frame\s*\{[\s\S]*aspect-ratio:\s*4\s*\/\s*3/)
    expect(cssText).toMatch(/\.section-media-card-video \.section-media-frame\s*\{[\s\S]*aspect-ratio:\s*16\s*\/\s*9/)
  })

  it('adds a real Photo Sphere 360 viewer from the Drive panorama folder', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /^360$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /360° Product View/i })).toBeInTheDocument()
    expect(screen.getByTestId('boat-photo-sphere-viewer')).toHaveAttribute(
      'data-panorama-src',
      '/alive/360/scene-01.webp',
    )
    expect(screen.getByTestId('boat-photo-sphere-viewer')).toHaveAccessibleName(/ALIVE boat 360 viewer/i)
    expect(screen.getByRole('button', { name: /rotate 360 camera left/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /rotate 360 camera right/i })).toBeInTheDocument()
  })

  it('lets visitors rotate the boat 360 camera and switch panorama scenes', () => {
    render(<App />)

    const viewer = screen.getByTestId('boat-photo-sphere-viewer')
    expect(viewer).toHaveAttribute('data-panorama-src', '/alive/360/scene-01.webp')
    expect(screen.getByText(/209° camera heading/i)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /rotate 360 camera right/i }))
    expect(screen.getByText(/237° camera heading/i)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Scene 03' }))
    expect(viewer).toHaveAttribute('data-panorama-src', '/alive/360/scene-03.webp')
    expect(screen.getByText(/209° camera heading/i)).toBeInTheDocument()
  })

  it('exposes a fullscreen control for the 360 viewer', async () => {
    const requestFullscreen = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(HTMLElement.prototype, 'requestFullscreen', {
      configurable: true,
      value: requestFullscreen,
    })
    Object.defineProperty(document, 'fullscreenEnabled', {
      configurable: true,
      value: true,
    })

    render(<App />)

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /enter fullscreen 360 viewer/i }))
    })

    expect(requestFullscreen).toHaveBeenCalledTimes(1)
  })

  it('renders a dedicated 360 viewer page route', () => {
    window.history.pushState({}, '', '/view-360')

    const { container } = render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /360° Command View/i })).toBeInTheDocument()
    expect(screen.getAllByText(/fullscreen rescue cockpit/i).length).toBeGreaterThan(0)
    expect(container.querySelector('.view360-cockpit')).toBeInTheDocument()
    expect(container.querySelector('.view360-page-hero')).not.toBeInTheDocument()
    expect(screen.getByTestId('boat-photo-sphere-viewer')).toHaveAttribute(
      'data-panorama-src',
      '/alive/360/scene-01.webp',
    )
    expect(screen.getByRole('link', { name: /Homepage/i })).toHaveAttribute('href', '/')
    expect(screen.queryByRole('button', { name: /enter fullscreen 360 viewer/i })).not.toBeInTheDocument()
    expect(screen.queryByText(/Fullscreen page/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/ALIVE \/ BOAT 360/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Drag to explore the real 360° scene/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/without triggering browser fullscreen overlays/i)).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /Open 360° source folder/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /Smart Lifeboat Based on Object Detection/i })).not.toBeInTheDocument()
  })

  it('styles the dedicated 360 route as a fullscreen cockpit', () => {
    expect(cssText).toMatch(/\.view360-page-shell\s*\{[\s\S]*width:\s*100%[\s\S]*min-height:\s*100svh/)
    expect(cssText).toMatch(/\.view360-cockpit\s*\{[\s\S]*min-height:\s*100svh[\s\S]*border-radius:\s*0/)
    expect(cssText).toMatch(/\.view360-cockpit\s+\.panorama-window\s*\{[\s\S]*height:\s*100svh/)
    expect(cssText).toMatch(/\.view360-cockpit\s+\.view360-copy\s*\{[\s\S]*position:\s*fixed/)
    expect(cssText).toMatch(/\.view360-cockpit\s+\.scene-strip\s*\{[\s\S]*position:\s*fixed/)
    expect(cssText).toMatch(/\.view360-cockpit\s*\{[\s\S]*--cockpit-top:\s*clamp\(128px,\s*15svh,\s*156px\)/)
    expect(cssText).toMatch(/\.view360-cockpit\s+\.view360-copy\s*\{[\s\S]*width:\s*min\(280px,\s*calc\(100vw - 36px\)\)/)
    expect(cssText).toMatch(/\.view360-cockpit\s+\.view360-copy h1\s*\{[\s\S]*font-size:\s*clamp\(1\.8rem,\s*2\.9vw,\s*3\.2rem\)/)
    expect(cssText).toMatch(/\.view360-cockpit\s+\.scene-strip\s*\{[\s\S]*top:\s*calc\(var\(--cockpit-top\) \+ 106px\)[\s\S]*bottom:\s*calc\(var\(--cockpit-info-bottom\) \+ 8px\)/)
    expect(cssText).toMatch(/\.view360-cockpit\s+\.scene-strip\s*\{[\s\S]*width:\s*var\(--cockpit-scene-rail\)[\s\S]*grid-template-columns:\s*1fr/)
    expect(cssText).toMatch(/\.view360-cockpit\s+\.scene-caption\s*\{[\s\S]*right:\s*calc\(var\(--cockpit-edge\) \+ var\(--cockpit-scene-rail\) \+ var\(--cockpit-scene-gap\)\)/)
    expect(cssText).toMatch(/\.view360-cockpit\s+\.scene-strip img\s*\{[\s\S]*max-height:\s*48px/)
    expect(cssText).toMatch(/@media\s*\(max-width:\s*740px\)[\s\S]*\.view360-cockpit\s+\.scene-strip\s*\{[\s\S]*grid-template-columns:\s*repeat\(6,\s*minmax\(0,\s*1fr\)\)[\s\S]*overflow-x:\s*hidden/)
    expect(cssText).toMatch(/@media\s*\(max-width:\s*520px\)[\s\S]*\.view360-page-shell\s+\.view360-route-nav:not\(\.topbar-is-menu-open\)\s+\.nav-links\s*\{[\s\S]*display:\s*none/)
    expect(cssText).toMatch(/@media\s*\(max-width:\s*520px\)[\s\S]*\.view360-cockpit\s+\.view360-copy h1\s*\{[\s\S]*max-width:\s*none[\s\S]*font-size:\s*clamp\(1\.72rem,\s*8\.4vw,\s*2\.35rem\)/)
    expect(cssText).toMatch(/@media\s*\(max-width:\s*520px\)[\s\S]*\.view360-cockpit\s+\.view360-copy \.eyebrow\s*\{[\s\S]*font-size:\s*clamp\(0\.56rem,\s*2\.15vw,\s*0\.66rem\)/)
    expect(cssText).toMatch(/@media\s*\(max-width:\s*520px\)[\s\S]*\.view360-cockpit\s+\.scene-strip\s*\{[\s\S]*left:\s*10px[\s\S]*bottom:\s*calc\(166px \+ env\(safe-area-inset-bottom\)\)[\s\S]*grid-template-columns:\s*repeat\(6,\s*minmax\(0,\s*1fr\)\)/)
    expect(cssText).toMatch(/@media\s*\(max-width:\s*520px\)[\s\S]*\.view360-cockpit\s+\.scene-strip span\s*\{[\s\S]*font-size:\s*clamp\(0\.48rem,\s*1\.75vw,\s*0\.56rem\)/)
  })

  it('does not invoke native browser fullscreen from the dedicated 360 route', async () => {
    const requestFullscreen = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(HTMLElement.prototype, 'requestFullscreen', {
      configurable: true,
      value: requestFullscreen,
    })
    Object.defineProperty(document, 'fullscreenEnabled', {
      configurable: true,
      value: true,
    })
    window.history.pushState({}, '', '/view-360')

    render(<App />)

    expect(screen.queryByRole('button', { name: /enter fullscreen 360 viewer/i })).not.toBeInTheDocument()
    expect(requestFullscreen).not.toHaveBeenCalled()
  })

  it('configures Vercel to serve client-side routes through the app shell', () => {
    const vercelConfig = JSON.parse(vercelConfigText) as {
      rewrites?: Array<{ source: string; destination: string }>
    }

    expect(vercelConfig.rewrites).toContainEqual({
      source: '/(.*)',
      destination: '/index.html',
    })
  })
})

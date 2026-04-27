import { act } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import cssText from './App.css?raw'
import './setupTests'

describe('ALIVE project showcase', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('presents the ALIVE flood-rescue mission in English in the hero', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /ALIVE: Advanced Lifeboat for Flood Evacuation/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Faster Evacuation, More Lives Safely/i)).toBeInTheDocument()
    expect(screen.getByText(/object-detection lifeboat prototype/i)).toBeInTheDocument()
  })

  it('shows an English navbar that follows scroll', () => {
    render(<App />)

    const nav = screen.getByRole('navigation', { name: /Primary navigation/i })
    expect(within(nav).getByRole('link', { name: /System/i })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: /View 360/i })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: /Testing/i })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: /Impact/i })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: /Deep Dive/i })).toBeInTheDocument()

    expect(cssText).toMatch(/\.topbar\s*\{[\s\S]*position:\s*fixed/)
    expect(cssText).toMatch(/backdrop-filter:\s*blur\(28px\)\s*saturate\(1\.8\)/)
    expect(cssText).toMatch(/scroll-margin-top:\s*156px/)
  })

  it('shows system, testing, vision AI, and impact sections in English', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /How ALIVE Works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Validated in the Water/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Object Detection Results/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Aligned with SDG 3 and SDG 11/i })).toBeInTheDocument()
  })

  it('keeps a comfortable mobile layout for navigation and the 360 viewer', () => {
    expect(cssText).toMatch(/@media\s*\(max-width:\s*520px\)/)
    expect(cssText).toMatch(/\.topbar\s*\{[\s\S]*bottom:\s*14px/)
    expect(cssText).toMatch(/\.nav-links\s*\{[\s\S]*display:\s*grid[\s\S]*grid-template-columns:\s*repeat\(6,\s*minmax\(0,\s*1fr\)\)/)
    expect(cssText).toMatch(/\.site-shell\s*\{[\s\S]*padding-bottom:\s*172px/)
    expect(cssText).toMatch(/scroll-padding-bottom:\s*calc\(172px \+ env\(safe-area-inset-bottom\)\)/)
    expect(cssText).toMatch(/\.panorama-window\s*\{[\s\S]*min-height:\s*clamp\(240px,\s*68vw,\s*330px\)/)
    expect(cssText).toMatch(/\.scene-strip\s*\{[\s\S]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)[\s\S]*scroll-margin-bottom:\s*calc\(172px \+ env\(safe-area-inset-bottom\)\)/)
  })

  it('renders the project evidence metrics from the Drive assets', () => {
    render(<App />)

    const metrics = screen.getByTestId('evidence-metrics')
    expect(within(metrics).getByText('97.6%')).toBeInTheDocument()
    expect(within(metrics).getByText(/best mAP50/i)).toBeInTheDocument()
    expect(within(metrics).getByText('60.8%')).toBeInTheDocument()
    expect(within(metrics).getByText(/mAP50-95/i)).toBeInTheDocument()
  })

  it('adds a deep dive page with analyzed project evidence', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /Project Deep Dive/i })).toBeInTheDocument()
    expect(screen.getByText(/November 2025 to March 2026/i)).toBeInTheDocument()
    expect(screen.getByText(/0\.998 m\/s/i)).toBeInTheDocument()
    expect(screen.getByText(/YOLOv8n 640x640/i)).toBeInTheDocument()
    expect(screen.getAllByText('87%').length).toBeGreaterThan(0)
    expect(screen.getByText(/wide-angle or thermal cameras/i)).toBeInTheDocument()
  })

  it('adds a real Photo Sphere 360 viewer from the Drive panorama folder', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /View 360/i })).toBeInTheDocument()
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
})

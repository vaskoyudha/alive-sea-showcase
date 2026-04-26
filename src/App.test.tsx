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

  it('menyajikan misi ALIVE dalam Bahasa Indonesia di hero', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /ALIVE: Sekoci Pintar untuk Evakuasi Banjir/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Evakuasi Lebih Cepat, Lebih Banyak Nyawa Selamat/i)).toBeInTheDocument()
    expect(screen.getByText(/prototipe sekoci pintar berbasis deteksi objek/i)).toBeInTheDocument()
  })

  it('menampilkan navbar Bahasa Indonesia yang mengikuti scroll', () => {
    render(<App />)

    const nav = screen.getByRole('navigation', { name: /Navigasi utama/i })
    expect(within(nav).getByRole('link', { name: /Sistem/i })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: /Panorama 360/i })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: /Pengujian/i })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: /Dampak/i })).toBeInTheDocument()

    expect(cssText).toMatch(/\.topbar\s*\{[\s\S]*position:\s*fixed/)
    expect(cssText).toMatch(/backdrop-filter:\s*blur\(28px\)\s*saturate\(1\.8\)/)
    expect(cssText).toMatch(/scroll-margin-top:\s*156px/)
  })

  it('menampilkan bagian sistem, pengujian, visi AI, dan dampak dalam Bahasa Indonesia', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /Cara Kerja ALIVE/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Tervalidasi di Air/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Hasil Deteksi Objek/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Selaras dengan SDG 3 dan SDG 11/i })).toBeInTheDocument()
  })

  it('menyediakan layout mobile yang nyaman untuk navigasi dan viewer 360', () => {
    expect(cssText).toMatch(/@media\s*\(max-width:\s*520px\)/)
    expect(cssText).toMatch(/\.topbar\s*\{[\s\S]*bottom:\s*14px/)
    expect(cssText).toMatch(/\.nav-links\s*\{[\s\S]*display:\s*grid[\s\S]*grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/)
    expect(cssText).toMatch(/\.site-shell\s*\{[\s\S]*padding-bottom:\s*172px/)
    expect(cssText).toMatch(/scroll-padding-bottom:\s*calc\(172px \+ env\(safe-area-inset-bottom\)\)/)
    expect(cssText).toMatch(/\.panorama-window\s*\{[\s\S]*min-height:\s*clamp\(240px,\s*68vw,\s*330px\)/)
    expect(cssText).toMatch(/\.scene-strip\s*\{[\s\S]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)[\s\S]*scroll-margin-bottom:\s*calc\(172px \+ env\(safe-area-inset-bottom\)\)/)
  })

  it('renders the project evidence metrics from the Drive assets', () => {
    render(<App />)

    const metrics = screen.getByTestId('evidence-metrics')
    expect(within(metrics).getByText('97.6%')).toBeInTheDocument()
    expect(within(metrics).getByText(/mAP50 terbaik/i)).toBeInTheDocument()
    expect(within(metrics).getByText('60.8%')).toBeInTheDocument()
    expect(within(metrics).getByText(/mAP50-95/i)).toBeInTheDocument()
  })

  it('adds an interactive 360 degree panorama view from the Drive panorama folder', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /Panorama 360/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Panorama 360° ALIVE/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /tampilan panorama 360 derajat/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /putar panorama 360 ke kiri/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /putar panorama 360 ke kanan/i })).toBeInTheDocument()
  })

  it('lets visitors drag the 360 viewer without requiring pointer-capture support', () => {
    render(<App />)

    const viewer = screen.getByRole('img', { name: /tampilan panorama 360 derajat/i })
    expect(screen.getByText(/209° arah/i)).toBeInTheDocument()

    fireEvent.pointerDown(viewer, { clientX: 220, pointerId: 1 })
    fireEvent.pointerMove(viewer, { clientX: 120, pointerId: 1 })
    fireEvent.pointerUp(viewer, { pointerId: 1 })

    expect(screen.getByText(/238° arah/i)).toBeInTheDocument()
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
      fireEvent.click(screen.getByRole('button', { name: /masuk mode layar penuh viewer 360/i }))
    })

    expect(requestFullscreen).toHaveBeenCalledTimes(1)
  })
})

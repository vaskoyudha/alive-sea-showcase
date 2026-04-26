import { act } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import './setupTests'

describe('ALIVE project showcase', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('presents the ALIVE flood-rescue mission in the hero', () => {
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

  it('shows engineering, testing, and SDG proof sections', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /How ALIVE Works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Validated in the Water/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Object Detection Results/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Aligned with SDG 3 and SDG 11/i })).toBeInTheDocument()
  })

  it('renders the project evidence metrics from the Drive assets', () => {
    render(<App />)

    const metrics = screen.getByTestId('evidence-metrics')
    expect(within(metrics).getByText('97.6%')).toBeInTheDocument()
    expect(within(metrics).getByText(/best mAP50/i)).toBeInTheDocument()
    expect(within(metrics).getByText('60.8%')).toBeInTheDocument()
    expect(within(metrics).getByText(/mAP50-95/i)).toBeInTheDocument()
  })

  it('adds an interactive 360 degree product view from the Drive panorama folder', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /View 360/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /360° Product View/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /interactive 360 degree view/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /rotate 360 view left/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /rotate 360 view right/i })).toBeInTheDocument()
  })

  it('lets visitors drag the 360 viewer without requiring pointer-capture support', () => {
    render(<App />)

    const viewer = screen.getByRole('img', { name: /interactive 360 degree view/i })
    expect(screen.getByText(/209° heading/i)).toBeInTheDocument()

    fireEvent.pointerDown(viewer, { clientX: 220, pointerId: 1 })
    fireEvent.pointerMove(viewer, { clientX: 120, pointerId: 1 })
    fireEvent.pointerUp(viewer, { pointerId: 1 })

    expect(screen.getByText(/238° heading/i)).toBeInTheDocument()
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

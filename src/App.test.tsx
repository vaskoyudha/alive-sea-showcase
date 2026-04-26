import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import './setupTests'

describe('ALIVE project showcase', () => {
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
})

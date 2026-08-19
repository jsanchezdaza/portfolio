import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GlassCard } from './GlassCard'

describe('GlassCard', () => {
  it('renders without the liquid lens that extends beyond the card', () => {
    const { container } = render(
      <GlassCard>
        <article>Card content</article>
      </GlassCard>
    )

    expect(screen.getByText('Card content')).toBeInTheDocument()
    expect(container.querySelector('.glass-lens')).not.toHaveAttribute(
      'data-liquid-glass'
    )
  })
})

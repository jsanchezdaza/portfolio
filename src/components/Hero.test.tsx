import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LanguageProvider } from '../contexts/LanguageContext'
import { Hero } from './Hero'

describe('Hero', () => {
  it('does not render a profile portrait', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    )

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('does not repeat the name above the job title', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    )

    expect(screen.queryByText('Javier Sanchez Daza')).not.toBeInTheDocument()
  })

  it('shows the job title followed by a decorative terminal cursor', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    )

    const heading = screen.getByRole('heading', {
      name: 'Product-focused Software Engineer',
    })

    expect(heading).toBeInTheDocument()
    expect(heading.querySelector('.terminal-cursor')).toBeInTheDocument()
  })

  it('does not display an availability-for-work message', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    )

    expect(screen.queryByText('Available for work')).not.toBeInTheDocument()
  })
})

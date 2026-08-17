import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LanguageProvider } from '../contexts/LanguageContext'
import { Hero } from './Hero'

describe('Hero', () => {
  it('does not display an availability-for-work message', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    )

    expect(screen.queryByText('Available for work')).not.toBeInTheDocument()
  })
})

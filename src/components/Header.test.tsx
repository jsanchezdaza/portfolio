import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { LanguageProvider } from '../contexts/LanguageContext'
import { Header } from './Header'

describe('Header', () => {
  it('exposes and controls an accessible mobile navigation', async () => {
    const user = userEvent.setup()

    render(
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    )

    const trigger = screen.getByRole('button', { name: 'Open menu' })

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByRole('navigation', { name: 'Mobile navigation' })
    ).not.toBeInTheDocument()

    await user.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(trigger).toHaveAccessibleName('Close menu')
    expect(
      screen.getByRole('navigation', { name: 'Mobile navigation' })
    ).toBeVisible()
  })
})

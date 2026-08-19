import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { LanguageSelector } from './LanguageSelector'
import { LanguageProvider } from '../contexts/LanguageContext'
import { localStorageMock } from '../test/setup'

function renderWithProvider() {
  return render(
    <LanguageProvider>
      <LanguageSelector />
    </LanguageProvider>
  )
}

describe('LanguageSelector', () => {
  beforeEach(() => {
    localStorageMock.clear()
    vi.clearAllMocks()
  })

  it('renders the language selector button', () => {
    renderWithProvider()
    expect(
      screen.getByRole('button', { name: /select language/i })
    ).toBeInTheDocument()
  })

  it('shows only the current language code', () => {
    renderWithProvider()
    const trigger = screen.getByRole('button', { name: /select language/i })

    expect(within(trigger).getByText('EN')).toBeInTheDocument()
    expect(within(trigger).queryByText('🇺🇸')).not.toBeInTheDocument()
  })

  it('dropdown is closed by default', () => {
    renderWithProvider()
    expect(
      screen.queryByRole('button', { name: 'English' })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Español' })
    ).not.toBeInTheDocument()
  })

  describe('when dropdown is opened', () => {
    it('shows language options on click', async () => {
      const user = userEvent.setup()
      renderWithProvider()

      await user.click(screen.getByRole('button', { name: /select language/i }))

      const englishOption = screen.getByRole('button', { name: 'English' })
      const spanishOption = screen.getByRole('button', { name: 'Español' })

      expect(within(englishOption).getByText('EN')).toBeInTheDocument()
      expect(within(spanishOption).getByText('ES')).toBeInTheDocument()
      expect(screen.queryByText('🇺🇸')).not.toBeInTheDocument()
      expect(screen.queryByText('🇪🇸')).not.toBeInTheDocument()
    })

    it('closes dropdown when clicking outside', async () => {
      const user = userEvent.setup()
      renderWithProvider()

      await user.click(screen.getByRole('button', { name: /select language/i }))
      expect(
        screen.getByRole('button', { name: 'English' })
      ).toBeInTheDocument()

      await user.click(
        screen.getByRole('button', { name: /close language selector/i })
      )

      expect(
        screen.queryByRole('button', { name: 'English' })
      ).not.toBeInTheDocument()
    })

    it('closes dropdown after selecting a language', async () => {
      const user = userEvent.setup()
      renderWithProvider()

      await user.click(screen.getByRole('button', { name: /select language/i }))
      await user.click(screen.getByRole('button', { name: 'Español' }))

      expect(
        screen.queryByRole('button', { name: 'English' })
      ).not.toBeInTheDocument()
    })
  })

  describe('language selection', () => {
    it('changes language when option is clicked', async () => {
      const user = userEvent.setup()
      renderWithProvider()

      await user.click(screen.getByRole('button', { name: /select language/i }))
      await user.click(screen.getByRole('button', { name: 'Español' }))

      const trigger = screen.getByRole('button', { name: /select language/i })
      expect(within(trigger).getByText('ES')).toBeInTheDocument()
    })

    it('persists language to localStorage', async () => {
      const user = userEvent.setup()
      renderWithProvider()

      await user.click(screen.getByRole('button', { name: /select language/i }))
      await user.click(screen.getByRole('button', { name: 'Español' }))

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'portfolio-language',
        'es'
      )
    })
  })
})

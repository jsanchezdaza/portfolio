import { render, screen } from '@testing-library/react'
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
    expect(screen.getByRole('button', { name: /select language/i })).toBeInTheDocument()
  })

  it('shows current language flag', () => {
    renderWithProvider()
    expect(screen.getByText('🇺🇸')).toBeInTheDocument()
  })

  it('dropdown is closed by default', () => {
    renderWithProvider()
    expect(screen.queryByText('English')).not.toBeInTheDocument()
    expect(screen.queryByText('Español')).not.toBeInTheDocument()
  })

  describe('when dropdown is opened', () => {
    it('shows language options on click', async () => {
      const user = userEvent.setup()
      renderWithProvider()

      await user.click(screen.getByRole('button', { name: /select language/i }))

      expect(screen.getByText('English')).toBeInTheDocument()
      expect(screen.getByText('Español')).toBeInTheDocument()
    })

    it('closes dropdown when clicking outside', async () => {
      const user = userEvent.setup()
      renderWithProvider()

      await user.click(screen.getByRole('button', { name: /select language/i }))
      expect(screen.getByText('English')).toBeInTheDocument()

      const backdrop = document.querySelector('.fixed.inset-0')
      if (backdrop) {
        await user.click(backdrop)
      }

      expect(screen.queryByText('English')).not.toBeInTheDocument()
    })

    it('closes dropdown after selecting a language', async () => {
      const user = userEvent.setup()
      renderWithProvider()

      await user.click(screen.getByRole('button', { name: /select language/i }))
      await user.click(screen.getByText('Español'))

      expect(screen.queryByText('English')).not.toBeInTheDocument()
    })
  })

  describe('language selection', () => {
    it('changes language when option is clicked', async () => {
      const user = userEvent.setup()
      renderWithProvider()

      await user.click(screen.getByRole('button', { name: /select language/i }))
      await user.click(screen.getByText('Español'))

      expect(screen.getByText('🇪🇸')).toBeInTheDocument()
    })

    it('persists language to localStorage', async () => {
      const user = userEvent.setup()
      renderWithProvider()

      await user.click(screen.getByRole('button', { name: /select language/i }))
      await user.click(screen.getByText('Español'))

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'portfolio-language',
        'es'
      )
    })
  })
})

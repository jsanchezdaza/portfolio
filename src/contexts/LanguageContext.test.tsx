import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { LanguageProvider, useLanguage } from './LanguageContext'
import { localStorageMock } from '../test/setup'

function wrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorageMock.clear()
    vi.clearAllMocks()
  })

  describe('useLanguage hook', () => {
    it('throws error when used outside provider', () => {
      expect(() => renderHook(() => useLanguage())).toThrow(
        'useLanguage must be used within a LanguageProvider'
      )
    })

    it('provides default language as english', () => {
      const { result } = renderHook(() => useLanguage(), { wrapper })
      expect(result.current.language).toBe('en')
    })

    it('reads stored language from localStorage', () => {
      localStorageMock.getItem.mockReturnValueOnce('es')
      const { result } = renderHook(() => useLanguage(), { wrapper })
      expect(result.current.language).toBe('es')
    })

    it('ignores invalid stored language values', () => {
      localStorageMock.getItem.mockReturnValueOnce('invalid')
      const { result } = renderHook(() => useLanguage(), { wrapper })
      expect(result.current.language).toBe('en')
    })
  })

  describe('setLanguage', () => {
    it('updates language state', () => {
      const { result } = renderHook(() => useLanguage(), { wrapper })

      act(() => {
        result.current.setLanguage('es')
      })

      expect(result.current.language).toBe('es')
    })

    it('persists language to localStorage', () => {
      const { result } = renderHook(() => useLanguage(), { wrapper })

      act(() => {
        result.current.setLanguage('es')
      })

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'portfolio-language',
        'es'
      )
    })
  })

  describe('t (translation function)', () => {
    it('retrieves simple keys', () => {
      const { result } = renderHook(() => useLanguage(), { wrapper })
      const value = result.current.t('profile.name')
      expect(value).toBe('Javier Sanchez Daza')
    })

    it('provides the English product and AI positioning', () => {
      const { result } = renderHook(() => useLanguage(), { wrapper })

      expect(result.current.t('profile.role')).toBe(
        'Product-focused Software Engineer'
      )
      expect(result.current.t('profile.bio')).toBe(
        'Building reliable products and AI-enabled systems through product thinking, Lean principles, and Extreme Programming practices.'
      )
    })

    it('invites English readers to discuss engineering, product, and AI', () => {
      const { result } = renderHook(() => useLanguage(), { wrapper })

      expect(result.current.t('contact.subtitle')).toBe(
        "Let's talk about software engineering, product, and AI."
      )
    })

    it('retrieves nested keys with dot notation', () => {
      const { result } = renderHook(() => useLanguage(), { wrapper })
      const value = result.current.t('skills.title')
      expect(value).toBe('Skills')
    })

    it('returns key when translation is not found', () => {
      const { result } = renderHook(() => useLanguage(), { wrapper })
      const value = result.current.t('nonexistent.key.here')
      expect(value).toBe('nonexistent.key.here')
    })

    it('returns translated value for spanish language', () => {
      const { result } = renderHook(() => useLanguage(), { wrapper })

      act(() => {
        result.current.setLanguage('es')
      })

      const esValue = result.current.t('skills.title')
      expect(esValue).toBeDefined()
      expect(typeof esValue).toBe('string')
    })

    it('provides the Spanish product and AI positioning', () => {
      const { result } = renderHook(() => useLanguage(), { wrapper })

      act(() => {
        result.current.setLanguage('es')
      })

      expect(result.current.t('profile.role')).toBe(
        'Ingeniero de Software con enfoque en Producto'
      )
      expect(result.current.t('profile.bio')).toBe(
        'Desarrollo productos fiables y sistemas potenciados por IA mediante pensamiento de producto, principios Lean y prácticas de Extreme Programming.'
      )
    })

    it('invites Spanish readers to discuss engineering, product, and AI', () => {
      const { result } = renderHook(() => useLanguage(), { wrapper })

      act(() => {
        result.current.setLanguage('es')
      })

      expect(result.current.t('contact.subtitle')).toBe(
        'Hablemos de ingeniería de software, producto e IA.'
      )
    })
  })
})

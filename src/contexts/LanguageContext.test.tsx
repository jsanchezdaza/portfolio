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
  })
})

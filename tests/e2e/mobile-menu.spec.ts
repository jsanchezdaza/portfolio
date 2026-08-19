import { test, expect } from '@playwright/test'

const isMobile = { width: 390, height: 844 }

test.describe('mobile navigation', () => {
  test.use({ viewport: isMobile })

  test('opens and closes when tapping outside', async ({ page }) => {
    await page.goto('/')
    const trigger = page.locator('#menuBtn')
    await expect(trigger).toBeVisible()
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await trigger.click()
    const panel = page.locator('#mobile-navigation')
    await expect(panel).toBeVisible()
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')

    await page.mouse.click(10, 10)
    await expect(panel).toBeHidden({ timeout: 10000 })
  })

  test('selecting an option closes panel and navigates', async ({ page }) => {
    await page.goto('/')
    const trigger = page.locator('#menuBtn')
    await trigger.click()

    const link = page
      .locator('#mobile-navigation a', { hasText: 'Projects' })
      .first()
    await link.click()

    await expect(page.locator('#projects')).toBeVisible()
    await expect(page.locator('#mobile-navigation')).toBeHidden()
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  test('hides an open mobile panel when the viewport becomes desktop', async ({
    page,
  }) => {
    await page.goto('/')
    await page.locator('#menuBtn').click()
    await expect(page.locator('#mobile-navigation')).toBeVisible()

    await page.setViewportSize({ width: 1000, height: 844 })

    await expect(page.locator('#mobile-navigation')).toBeHidden()
    await expect(
      page.getByRole('navigation', { name: 'Primary navigation' })
    ).toBeVisible()
    await expect(page.locator('#menuBtn')).toHaveAttribute(
      'aria-expanded',
      'false'
    )

    await page.setViewportSize(isMobile)
    await expect(page.locator('#mobile-navigation')).toBeHidden()
    await expect(page.locator('#menuBtn')).toHaveAttribute(
      'aria-expanded',
      'false'
    )
  })

  test('shows the localized job title in the hero heading', async ({
    page,
  }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Select language' }).click()
    await page.getByRole('button', { name: /Español/ }).click()

    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'Ingeniero de Software con enfoque en Producto'
    )
    await expect(page.locator('.terminal-cursor')).toHaveCount(1)
    await expect(page.locator('.developer-badge')).toHaveCount(0)
  })
})

import { test, expect } from '@playwright/test'

const isMobile = { width: 390, height: 844 }

test.describe('mobile menu (FAB)', () => {
  test.use({ viewport: isMobile })

  test('opens and closes when tapping outside', async ({ page }) => {
    await page.goto('/')
    const fab = page.locator('#menuBtn')
    await expect(fab).toBeVisible()

    await fab.click()
    const panel = page.locator('#mobilePanel')
    await expect(panel).toBeVisible()

    await page.mouse.click(10, 10)
    await expect(panel).toBeHidden()
  })

  test('selecting an option closes panel and navigates', async ({ page }) => {
    await page.goto('/')
    const fab = page.locator('#menuBtn')
    await fab.click()

    const link = page.locator('#mobilePanel a', { hasText: 'Projects' }).first()
    await link.click()

    await expect(page.locator('#projects')).toBeVisible()
    await expect(page.locator('#mobilePanel')).toBeHidden()
  })
})

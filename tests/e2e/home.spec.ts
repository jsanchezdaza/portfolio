import { test, expect } from '@playwright/test'

test('home loads and shows navbar links', async ({ page }) => {
  await page.goto('/')
  const nav = page.getByRole('navigation')
  await expect(nav.getByRole('link', { name: 'Projects' })).toBeVisible()
  await expect(nav.getByRole('link', { name: 'Experience' })).toBeVisible()
  await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible()
})

test('scroll to skills', async ({ page }) => {
  await page.goto('/')
  await page.getByText('Skills').first().click()
  await expect(page.locator('#skills')).toBeVisible()
})

test('projects cards visible', async ({ page }) => {
  await page.goto('/')
  await page.locator('#projects').scrollIntoViewIfNeeded()
  const cards = page.locator('#projects .card')
  await expect(cards.first()).toBeVisible()
})

test('external links opened in a new tab isolate the opener', async ({
  page,
}) => {
  await page.goto('/')
  const externalLinks = page.locator('a[target="_blank"]')

  await expect(externalLinks).not.toHaveCount(0)
  const unsafeLinks = await externalLinks.evaluateAll((links) =>
    links
      .filter(
        (link) => !/noreferrer|noopener/.test(link.getAttribute('rel') ?? '')
      )
      .map((link) => link.getAttribute('href'))
  )

  expect(unsafeLinks).toEqual([])
})

test('page exposes its primary content to assistive technology', async ({
  page,
}) => {
  await page.goto('/')

  await expect(page.getByRole('main')).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  await expect(page.locator('img:not([alt])')).toHaveCount(0)

  const unnamedButtons = await page
    .getByRole('button')
    .evaluateAll((buttons) =>
      buttons
        .filter(
          (button) =>
            !button.textContent?.trim() && !button.getAttribute('aria-label')
        )
        .map((button) => button.id || button.outerHTML)
    )

  expect(unnamedButtons).toEqual([])
})

test('terminal cursor blinks', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/')

  const cursor = page.locator('.terminal-cursor')
  await expect(cursor).toHaveCSS('animation-name', 'cursor-blink')

  const opacitySamples: number[] = []
  for (let sample = 0; sample < 10; sample += 1) {
    opacitySamples.push(
      await cursor.evaluate((element) =>
        Number.parseFloat(getComputedStyle(element).opacity)
      )
    )
    await page.waitForTimeout(125)
  }

  expect(Math.max(...opacitySamples)).toBeGreaterThan(0.5)
  expect(Math.min(...opacitySamples)).toBeLessThan(0.5)
})

test('terminal cursor respects reduced motion preferences', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')

  await expect(page.locator('.terminal-cursor')).toHaveCSS(
    'animation-name',
    'none'
  )
})

test('terminal cursor has breathing room after the title', async ({ page }) => {
  await page.goto('/')

  const gap = await page
    .locator('.terminal-cursor')
    .evaluate((cursor) =>
      Number.parseFloat(getComputedStyle(cursor).marginLeft)
    )

  expect(gap).toBeGreaterThanOrEqual(10)
})

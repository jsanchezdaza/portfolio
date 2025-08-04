import { test, expect } from '@playwright/test'

test('home loads and shows navbar links', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Projects')).toBeVisible()
  await expect(page.getByText('Experience')).toBeVisible()
  await expect(page.getByText('Contact')).toBeVisible()
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

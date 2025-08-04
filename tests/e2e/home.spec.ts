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

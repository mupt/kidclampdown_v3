import { test, expect } from '@playwright/test'

test('homepage details', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('kidclampdown')
  //await expect(page.locator('h2').first()).toHaveText('Hello World Component')
})

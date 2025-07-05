import { expect, test } from "@playwright/test"

test("has correct title", async ({ page }) => {
  await page.goto("./")

  await expect(page).toHaveTitle(/Whisperly/)
})

test("navigates to pricing page", async ({ page }) => {
  await page.goto("./")
  await page.click('a[href="/pricing"]')
  await expect(page).toHaveURL(/.*pricing/)
})

test("navigates to download page", async ({ page }) => {
  await page.goto("./")
  await page.click('a[href="/download"]')
  await expect(page).toHaveURL(/.*download/)
})

test("contact form loads correctly", async ({ page }) => {
  await page.goto("./contact")
  await expect(page.locator('input[name="name"]')).toBeVisible()
  await expect(page.locator('input[name="email"]')).toBeVisible()
  await expect(page.locator('select[name="subject"]')).toBeVisible()
  await expect(page.locator('textarea[name="message"]')).toBeVisible()
})

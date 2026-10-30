import { test } from "@playwright/test"

test.only("horizontal", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
    await page.waitForTimeout(2000)
    await page.mouse.wheel(2000, 0)
    await page.waitForTimeout(2000)
    await page.mouse.wheel(-2000, 0)
    await page.waitForTimeout(2000)
})

test("", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    let checkbox = await page.locator("//input[@type='checkbox']")
    await checkbox.scrollIntoViewIfNeeded()
    await checkbox.click()
    await expect(checkbox).toBechecked()
    await page.waitForTimeout(2000)
})
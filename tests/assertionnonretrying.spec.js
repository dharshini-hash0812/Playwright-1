import { expect, test } from "@playwright/test"

test("left click", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.getByRole('button', { name: "yes" }).click()
    await execPath(page.locator("text-green-600 p-1 px-2 ms-2 rounded-md").toHaveText('yes'))

})

test.only("double click", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    await page.getByRole('button', { name: "no" }).dblclick
    await expect(page.locator(".p-2.px-1")).toHaveText('you selected "no"')

})


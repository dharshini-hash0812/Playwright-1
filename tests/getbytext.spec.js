import { test } from "@playwright/test"
test("getbytittle", async ({ page }) => {
    await page.goto("https://www.w3schools.com/java/default.asp")
    await page.getByTitle(" Java Tutorial").first().click()

})
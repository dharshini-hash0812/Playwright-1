import { test } from "@playwright/test"

test("searchaProduct", async ({ page }) => {
    await page.goto("https://www.shoppersstack.com/")
    await page.getByRole('button', { name: "Login" }).click()
    await page.getByRole('textbox', { name: "Email" }).fill("miceleven5@gmail.com")
    await page.getByRole('textbox', { name: "Password" }).fill("Dharshini@08")
    await page.getByRole('button', { name: "Login" }).click()
    await page.getByRole('link', { name: 'Electronic', exact: true }).click();
    await page.getByRole('link', { name: 'Watch', exact: true }).click();
    await page.getByAltText('fastrack watch').click();
    await page.getByRole('button', { name: 'add to cart', exact: true }).click();
    await page.waitForTimeout(3000)
    await page.locator("#cart").click();
    await page.waitForTimeout(3000)
    await page.locator("#increase").click();

})

test("increaseaProduct", async ({ page }) => {
    await page.goto("https://www.shoppersstack.com/")
    await page.getByRole('button', { name: "Login" }).click()
    await page.getByRole('textbox', { name: "Email" }).fill("miceleven5@gmail.com")
    await page.getByRole('textbox', { name: "Password" }).fill("Dharshini@08")
    await page.getByRole('button', { name: "Login" }).click()
    await page.getByRole('link', { name: 'Electronic', exact: true }).click();
    await page.getByRole('link', { name: 'Watch', exact: true }).click();
    await page.getByAltText('fastrack watch').click();
    await page.getByRole('button', { name: 'add to cart', exact: true }).click();
    await page.waitForTimeout(3000)
    await page.locator("#cart").click();
    await page.waitForTimeout(3000)
    await page.locator("#increase").click();

})
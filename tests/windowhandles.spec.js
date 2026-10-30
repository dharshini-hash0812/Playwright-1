import { test } from "@playwright/test"
test("new tab", async ({ browser }) => {

    await browser.newContext()
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.amazon.in/")
    await page.getByRole('searchbox', { name: "Search Amazon.in" }).fill("kurta sets for woman")
    await page.keyboard.press('Enter')
    let url = await page.url()
    await page.waitForURL(url)
    console.log(await page.url());
    let [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("a-size-large product-title-word-break").first().click()
    ])
    console.log(await newTab.url())
    await newTab.getByTitle("Add to Shopping Cart").click()
    await page.waitForTimeout(5000)


})

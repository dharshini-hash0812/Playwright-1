import {expect, test} from "@playwright/test"


test.beforeEach("before and every test", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator(".ico-login").click()
    await page.locator("#Email").fill("mpaditya55@gmail.com")
    await page.locator("#Password").fill("Aditya@8989")
    await page.locator(".button-1.login-button").click()
})

test.afterEach("executer after each test", async ({page}) => {
    await page.locator('.ico-logout').click()
})



test("search valid", async ({page}) => {
     await page.locator("#small-searchterms").fill("Laptop")
    await page.locator(".button-1.search-box-button").click()
    await expect(page.getByRole('heading',{ name:"Search" })).toBeVisible()
    
})
test("invalid valid", async ({page}) => {
     await page.locator("#small-searchterms").fill("sdfghjkl")
    await page.locator(".button-1.search-box-button").click()
    await expect(page.locator(".search-results")).toBeVisible()
})
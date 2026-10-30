import {test} from "@playwright/test"

test("search product", async({pag})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator(".ico-login").click()
    await page.locator("#Email").fill("shiniyy6@gmail.com")
    await page.locator("#Password").fill("Shiny0812")
    await page.locator(".button-1.login-button").click()
    await page.locator("#small-searchterms.")
})
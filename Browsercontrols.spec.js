import { test } from "@playwright/test";

// test("Browsercontrol", async ({ page }) => {

// await page.goto("https://demowebshop.tricentis.com/");
// await page.waitForTimeout(3000);
// let size = await page.viewportSize();
// console.log(size);
// //    await page.setViewportSize({width:2340,hieght:1000});
// await page.waitForTimeout(3000);


// await page.locator(".ico-register").click()
// let registerurl = await page.url();
// let title = await page.title();
// console.log(registerurl, title);
// })

test.only("Browser controls", async ({ }) => {
    let browser = await chromium.launch();
    let context = await browser.newContext();
    let page = await page.newpage(browser)
    await page.goto("https://demowebshop.tricentis.com/");
    await page.screenshot({ page: '.Screenshot/demowebpage.png' });
})
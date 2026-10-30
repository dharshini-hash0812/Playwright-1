import { test } from "@playwright/test"
import { locks } from "worker_threads";
test("InnerText", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").first().fill("laptop")
    await page.getByRole('button', { name: "Search" }).click()
    let ptext = await page.locator(".product-title").innerText()
    await page.waitForTimeout(2000)
    console.log(ptext);

})
test("Inner Text", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").first().fill("laptop")
    await page.getByRole('button', { name: "Search" }).click()
    let ptext = await page.locator(".product-title").textContent()
    await page.waitForTimeout(2000)
    console.log(ptext);

})

test("Click", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
    await page.getByRole('button', { name: "yes" }).click()
    await page.waitForTimeout(2000)
})


test("Right click", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1");
    await page.getByText("Right Click", { exact: true }).click()
    await page.getByRole('button', { name: "Right Click" }).click({ button: "right" })

})

test("Double click", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2");
    await page.getByText("Double Click", { exact: true }).click({ button: "right" })

})

test("Disable click", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4");
    await page.getByText("Disabled", { exact: true }).click();
    await page.getByRole('button', { name: "Submit" }).click({ force: true })


})

test("Input Value", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.getByRole('textbox', { name: 'Email:' }).fill("santhoshdharshini858@gmail.com")
    let inputVal = await page.getByRole('textbox', { name: 'Email:' }).inputValue()
    console.log(inputV);

})

test("getAttribute", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login")

    const email = await page.getByRole('textbox', { name: 'Email:' })

    let id = await email.getAttribute('id')
    let auto = await email.getAttribute('autofocus')
    console.log(id, auto)

})

test.only("All", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.getByRole('textbox', { name: 'Search Amazon.in' })
    let loc = await page.locator('.a-truncate-cut').all() 
    console.log(loc)


})


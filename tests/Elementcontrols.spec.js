import { test } from "@playwright/test"

test("Element controls", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.getByLabel("Name").fill("Dharshini")
    await page.waitForTimeout(3000)
    await page.getByLabel("Name").type("Shiny")
    await page.waitForTimeout(3000)
    await page.getByLabel("Email Id").type("santhoshdharshini858@gmail.com")
    let input = await page.getByLabel("Email Id").inputValue()
    console.log(input)
    await page.waitForTimeout(2000)

    await page.getByLabel("Password").fill("dharshini@08")

    // await page.getByRole('button', { name: 'Register' }).click()
    // let a = await page.getByRole('button', { name: 'Register' }).textContent()
    // console.log(a)
    let a = await page.getByRole('button', { name: 'Register' })()

})
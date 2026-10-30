import { test } from "@playwright/test"
import RegisterPage from "../../pom/RegisterPage.js"

test("Register", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/")
    let register = new RegisterPage(page)
    await register.RegisterLink.click()
    await register.GenderRadioBtn.click()
    await register.First_NameTxt.fill("Dhar")
    await register.Last_Name_Txt.fill("shini")
    await register.EmailTxt.fill("shiniyy6@gmailcom")
    await page.waitForTimeout(3000)
})
import { test } from "@playwright/test"
import Loginpage from "../../POM/Loginpage"
test("Login", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/")
    let login = new Loginpage(page)
    await login.LoginTDemo();




})
import { test } from "@playwright/test"
import fs from "fs"
let data = fs.readFileSync("C:/Users/acer/Desktop/Playwright offline 12pm/ Test-results/singledata.json")
data = JSON.parse(data)
let url = data.url;
let username = data.Username;
let password = data.Password;

test(" single data from json", async ({ page }) => {
    await page.goto(data.url)
    await page.locator("#username").fill(data.Username)
    await page.locator("#Password").fill(data.Password)
    await page.locator("#submit").click()
    await page.waitForTimeout(3000)

})
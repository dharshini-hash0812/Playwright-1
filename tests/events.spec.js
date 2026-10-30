import { test } from "@playwright/test"
import { promises } from "node:dns"
test('Download', async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.locator("#writeArea").fill("This method waits for actionability")
    let [downloadfile] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click
    ])
    const p = await downloadfile.path()
    console.log(p);

})
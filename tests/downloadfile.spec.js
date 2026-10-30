import { test } from "@playwright/test"
import path from "path/win32"

test("Screenshot", async ({ browser }) => {

    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.locator(".w-full.h-40.p-2.border.rounded-lg.mb-4").fill("Iam Downloading the file")

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: "Download" }).click()
    ])

    let downloadFolder = "C:/Users/Admin/OneDrive/Desktop/Playwright_Class/Screenshot"
    let fileName = await download.suggestedFilename()
    await download.saveAs(await path.join(downloadFolder, fileName))


}
)
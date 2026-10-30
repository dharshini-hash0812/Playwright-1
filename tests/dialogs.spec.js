import { expect, test } from "@playwright/test"

test("Dialogs", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole('button', { name: "Simple Alert" }).click()
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: "Confirmation Alert" }).click()
    //await expect(await page.locator("#demo")).toHaveText("You pressed Cancel!")
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: "Prompt Alert" }).click()
    //await expect(await page.locator("#demo")).toHaveText("User cancelled the prompt.")
    await page.waitForTimeout(3000)
})

test("using pageon", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.on('dialog', async (dialog) => {
        await console.log("Type:" + dialog.type())
        await console.log("Message:" + dialog.message())
        await dialog.accept("Harry Poter")
        //await dialog.dismiss()
        await console.log(dialog.defaultValue())
    })
    await page.getByRole('button', { name: "Simple Alert" }).click()
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: "Confirmation Alert" }).click()
    //await expect(await page.locator("#demo")).toHaveText("You pressed Cancel!")
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: "Prompt Alert" }).click()
    //await expect(await page.locator("#demo")).toHaveText("User cancelled the prompt.")
    await page.waitForTimeout(3000)
})

test.only("using pageon 1", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.on('dialog', async (dialog) => {
        if (dialog.type() == 'Alert') {
            await dialog.accept();
        }
        else if (dialog.type() == 'Confirm') {
            await dialog.dismiss();
        }
        else if (dialog.type() == 'Prompt') {
            await dialog.accept();
        }
    })
    await page.getByRole('button', { name: "Simple Alert" }).click()
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: "Confirmation Alert" }).click()
    //await expect(await page.locator("#demo")).toHaveText("You pressed Cancel!")
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: "Prompt Alert" }).click()
    //await expect(await page.locator("#demo")).toHaveText("User cancelled the prompt.")
    await page.waitForTimeout(3000)
})

import { test } from "@playwright/test"
test("isvisible", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.waitForTimeout(2000);
    let boolean = await page.locator("//span[contains(text(),'Write')]").isVisible();

    await page.waitForTimeout(2000);
    console.log(boolean);
})

test("isenable", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4");
    await page.waitForTimeout(2000);
    let boolean = await page.locator("#submit").isDisabled();
    let dis = await page.getByLabel("submit").isEditable();
    await page.waitForTimeout(2000);
    console.log(boolean);
    console.log(dis);
})

test.only("ischecked", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
    await page.waitForTimeout(2000);
    await page.locator("#domain_a").click()
    let chec = await page.locator("#domain_a").isChecked();
    await page.waitForTimeout(2000);
    console.log(chec);
})


import { test } from "@playwright/test"
// custom dropdown
// approach 1

test("custom dropdown 1", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("shoes");
    await page.keyboard.press('Enter');
    await page.locator('#a-autoid-0-announce').click({ force: true });
    await page.locator(".a-dropdown-link").nth(4).click();
    await page.waitForTimeout(3000);
});

// 2nd approach
test("custom dropdown 2", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("shoes");
    await page.keyboard.press('Enter');
    await page.locator('#a-autoid-0-announce').click({ force: true });
    let text = 'Best Sellers';
    await page.locator(`//a[.='${text}']`).click();
    await page.waitForTimeout(3000);
});

// 3rd approach
test("custom dropdown 3", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("shoes");
    await page.keyboard.press('Enter');
    await page.locator('#a-autoid-0-announce').click({ force: true });
    let filter = await page.locator('.a-dropdown-link').all();
    console.log(filter);
    for (let loc of filter) {
        let text = await loc.innerText();
        console.log(text);
        if (text.includes("Bes")) {
            await loc.click();
            break;
        }
    }
    await page.waitForTimeout(3000);
});


//autosuggestivedropdown

// makemytrip
test("makemytrip autosuggest", async ({ page }) => {
    await page.goto("https://www.makemytrip.com/flights/")
    await page.locator("span.commonModal__close").click()

    //from
    await page.locator("label[for='fromCity']").click()
    await page.locator("input[placeholder='From']").fill("Coim")
    await page.waitForTimeout(3000)
    let filter = await page.locator("ul[role='listbox'] li").all()
    console.log(filter);
    for (let loc of filter) {
        let text = await loc.innerText()
        console.log(text);
        if (text.includes("Coimbatore")) {
            await loc.click()
            break;
        }
    }

    //to
    await page.locator("input[placeholder='To']").fill("Chen")
    await page.waitForTimeout(3000)
    let filter1 = await page.locator("ul[role='listbox'] li").all()
    console.log(filter1);
    for (let loc of filter1) {
        let text = await loc.innerText()
        console.log(text);
        if (text.includes("Chennai")) {
            await loc.click()
            break;
        }
    }
    await page.waitForTimeout(3000)
})

//spicejet
test("spicejet autosuggest", async ({ page }) => {
    await page.goto("https://www.spicejet.com/")

    //from
    await page.locator("div[data-testid='to-testID-origin'] input").fill("Coim")
    await page.waitForTimeout(3000)
    let filter = await page.locator("div[data-testid='to-testID-origin'] ~ div div[dir='auto']").all()
    console.log(filter);
    for (let loc of filter) {
        let text = await loc.innerText()
        console.log(text);
        if (text.includes("Coimbatore")) {
            await loc.click()
            break;
        }
    }

    //to
    await page.locator("div[data-testid='to-testID-destination'] input").fill("Chen")
    await page.waitForTimeout(3000)
    let filter1 = await page.locator("div[data-testid='to-testID-destination'] ~ div div[dir='auto']").all()
    console.log(filter1);
    for (let loc of filter1) {
        let text = await loc.innerText()
        console.log(text);
        if (text.includes("Chennai")) {
            await loc.click()
            break;
        }
    }
    await page.waitForTimeout(3000)
})
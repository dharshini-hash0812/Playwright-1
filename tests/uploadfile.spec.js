import {test} from"@playwright/test"
test("upload file",aysnc({page})=>{
    await page.goto("https://testautomationpractice blogspot.com/")
    const uploadSingleFile= await page.locator("#SingleFileInput")
    await uploadSingleFile.waitFor();
    
})

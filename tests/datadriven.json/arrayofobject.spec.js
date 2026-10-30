import { test } from "@playwright/test"
import fs from "fs"
let data = fs.readFileSync("C:/Users/acer/Desktop/playwright/test-results/arrayofobject.json")
let data1 = JSON.parse(data)


test("array of object", async ({ page }) => {
    for (let ele of data) {
        console.log(ele.Greet);
    }
})
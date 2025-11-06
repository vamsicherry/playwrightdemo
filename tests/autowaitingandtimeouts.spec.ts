import {test,expect} from "@playwright/test";
import { TIMEOUT } from "dns";

test("Autowaiting",async ({page})=>{


    //test.setTimeout(50000);  30 milisec
    test.slow();
    await page.goto('https://testautomationpractice.blogspot.com/')

    //autowaiting,.... in fill or click {force:true}

    await page.locator('#Wikipedia1_wikipedia-search-input').fill("Playwright Automation",{force:true});

    await page.locator('.wikipedia-search-button').click({force:true});

    const titles=await page.title();
     expect(titles).toContain("Automation Testing Practice");

     await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/',{timeout:10000});  //5 milli sec
     
})
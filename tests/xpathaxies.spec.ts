//
import {test,expect,Locator}  from "@playwright/test";
import { text } from "stream/consumers";

test("Xpath Axies",async ({page})=>{
         
      await page.goto("https://www.w3schools.com/html/html_tables.asp",{waitUntil:"domcontentloaded",timeout:3000})

      //1)Self -- Used for verification or testing, when you want to explicitly refer to itself.

       const textv:Locator= page.locator("//td[text()='Germany']/self::td")
       await  expect(textv).toHaveText("Germany");  //toBeVisible

       //2)parent -- used Used when you found a child but need to go one level up
       //by using child element and need to find the parent elemet 

       const parentloc:Locator=page.locator("//td[text()='Germany']/parent::tr");
       await expect(parentloc).toContainText("Alfreds Futterkiste Maria Anders Germany");
       console.log()
       //conainstext will get all the values

       //3.child — Used when the element is directly inside another tag
       //When the child element is directly under the parent (no other tags in between).

       //Example: In automation, when you want all direct <span> tags inside a <div>.

       const childel:Locator= page.locator("//table[@id='customers']//tr/child::td");

        let  allchild:string[]= await childel.allTextContents();
        for(let v of allchild)
        {
             console.log(v)
        }
          //  tohave count assertion
        await expect(childel).toHaveCount(18);
            //4.anserstor --Used when you want to go multiple levels up (not just one parent)
              //tohaveattribute
            const anc:Locator=page.locator("//td[text()='Italy']/ancestor::table");
            await expect(anc).toHaveAttribute('class','ws-table-all');
           //5 following sibling
           const flp:Locator=page.locator("//td[text()='Magazzini Alimentari Riuniti']/following-sibling::td")
            
           expect(flp).toHaveCount(2);
           // precedingsibling
           const ps:Locator=page.locator("//td[text()='Giovanni Rovelli']/preceding-sibling::td");
           await expect(ps).toHaveText('Magazzini Alimentari Riuniti');

           //preceding
           const preced:Locator=page.locator("//td[text()='Germany']/preceding::td");
           await expect(preced).toHaveCount(2);

           //following,,,,,
           const follw:Locator=page.locator("//td[text()='Germany']/following::td");
           await expect(follw).toHaveCount(35);



})
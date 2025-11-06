import {test,expect,Locator} from "@playwright/test";

test("Multi select dropdown",async ({page})=>{

         await page.goto("https://testautomationpractice.blogspot.com/")

         //1.)select drop down by 4 ways
        //await  page.locator("#colors").selectOption(['Red','Green','Blue']); //select by visible text
        //await  page.locator("#colors").selectOption(['red','blue','green']); // select by value
        //await  page.locator("#colors").selectOption([{index:0},{index:1},{index:2}]); //select by index
        //await  page.locator("#colors").selectOption([{label:'Red'},{label:'Green'}]); //select by label


        //2)count the drop down
         const multiselectdrop:Locator= page.locator("#colors option");
         await expect(multiselectdrop).toHaveCount(7);


         //3 print all elemet is dropdown

           const alldropvalues:string[]=await multiselectdrop.allTextContents();
           const  orgvalue:string[]=alldropvalues.map(value =>value.trim());
           for(const value of orgvalue)
           {
              console.log(value);
           }

           //4 value present in dropdown

           expect(orgvalue).toContain('Green');
         // await page.waitForTimeout(4000);



})
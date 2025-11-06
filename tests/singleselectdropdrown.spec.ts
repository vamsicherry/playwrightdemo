import {test,expect,Locator}  from "@playwright/test";

test("select dropdown",async ({page})=>{

      
        await page.goto("https://testautomationpractice.blogspot.com/")
        //1.)single dropDown
        //await page.locator("#country").selectOption('Germany'); //by visible text
        // await page.locator("#country").selectOption({index:1}); //by index
         // await page.locator("#country").selectOption({value:'france'});//by value 
        await page.locator("#country").selectOption({label:'India'});
        await page.waitForTimeout(4000);

        //2.)dropdown count
          const dropdownOption:Locator=page.locator('#country>option');
          await expect(dropdownOption).toHaveCount(10);
        
        //3)check option preset in drop down
           const multipdropvalues:string[]=await dropdownOption.allTextContents();
            
           const orgvalue:string[]= multipdropvalues.map(value =>value.trim());
           for(const value of orgvalue)
           {
                
                console.log(value)
           }
            expect(orgvalue).toContain("India");

        //


})
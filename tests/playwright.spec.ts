import {test,expect,Locator}  from "@playwright/test";

test("Verify Locators",async ({page})=>{

       await page.goto("https://tutorialsninja.com/demo/")

       //1.getByRole
       await expect(page.getByRole('link',{name:'Qafox.com'})).toBeVisible();
        await page.pause(); // Add before or after any action

       await page.locator('#top-links').getByRole('link',{name:'My Account'}).click();
       await page.pause(); // Add before or after any action

       await page.getByRole('link',{name:'Register'}).click();
       await page.pause(); // Add before or after any action

       //Register

       //2.getByplaceholder

       await page.getByPlaceholder('First Name').fill("vamsi");
       await page.pause(); // Add before or after any action

       await page.getByPlaceholder('Last Name').fill("G");
       await page.pause(); // Add before or after any action

       await page.getByPlaceholder('E-Mail').fill("vamsi@gmail.com");
       await page.pause(); // Add before or after any action

       await page.getByPlaceholder('Telephone').fill('1234567890');
       await page.pause(); // Add before or after any action

        await page.getByPlaceholder('Password',{exact:true}).fill('Vamsi@123');
        await page.pause(); // Add before or after any action

         await page.getByPlaceholder('Password Confirm').fill('Vamsi@123');

         //3)//getByTitle()

         await page.getByTitle('My Account').click();
         await page.locator('#top-links').getByRole('link',{name:'Login'}).click();
          
         await page.getByTestId('input-email').fill("vamsicherry100@gmail.com");





})
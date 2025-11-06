import {test,expect}  from  "@playwright/test";


test("Hard vs Softassertions",async ({page})=>{

     //hard assertions
       /* await page.goto('https://demowebshop.tricentis.com/');

       await expect(page).toHaveURL('https://demowebshop.tricentis.com/');

       await expect(page).toHaveTitle('Demo Web Shop');

       const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
       await expect(logo).toBeVisible();
 */

       //softassertions  --   

       await page.goto('https://demowebshop.tricentis.com/');

       await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/');

       await expect.soft(page).toHaveTitle('Demo Web Shop1');

       const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
       await expect.soft(logo).toBeVisible();
       

})
import {test,expect} from "@playwright/test";

import fs from 'fs';



const filepath='testdata/data.json'

const datafile:any=JSON.parse(fs.readFileSync(filepath,'utf-8'));

 test.describe(`Login data driven`,async()=>{
for(const [email,password,validaty] of datafile )
{


 

     test(`test data ${email} and ${password}`,async ({page})=>{

          await page.goto('https://demowebshop.tricentis.com/login');

          await page.locator('#Email').fill(email);
          await page.locator('#Password').fill(password);
          await page.locator("input[value='Log in']").click();

          if(validaty === 'valid')
          {
              const logoutpage=page.locator('.ico-logout');
              await expect(logoutpage).toBeVisible({timeout:1000});

          }else{

              const errormessage=page.locator('.validation-summary-errors');
              await expect(errormessage).toBeVisible({timeout:1000});

              //
              await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
          }

})

}
 })
 
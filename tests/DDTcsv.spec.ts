import {test,expect} from "@playwright/test";

import fs from 'fs';
import {parse} from 'csv-parse/sync';
const jsonpath='testdata/data1.csv'
const filecontent:any=fs.readFileSync(jsonpath,'utf-8');
const value:any=parse(filecontent,{columns:true,skip_empty_lines:true})
test.describe("data driven testing",async ()=>{

    for(let data of value)
    {

         test(`login data ${data.email} and ${data.password}`,async ({page})=>{

            await page.goto('https://demowebshop.tricentis.com/login');

          await page.locator('#Email').fill(data.email);
          await page.locator('#Password').fill(data.password);
          await page.locator("input[value='Log in']").click();

          if(data.validaty === 'valid')
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
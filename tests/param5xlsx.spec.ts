import {test,expect} from "@playwright/test";

import fs from 'fs';
import {parse} from 'csv-parse/sync';
import  * as XLSL from 'xlsx';





const filepath='testdata/data.xlsx'
const workbook=XLSL.readFile(filepath);
const sheetname=workbook.SheetNames[0];
const worksheet=workbook.Sheets[sheetname];

const  records:any=     XLSL.utils.sheet_to_json(worksheet);

test.describe(`Login data driven`,async()=>{
for(const {email,password,validaty} of records )
{
 test(`test data ${email} and ${password}`,async ({page})=>{

          await page.goto('https://demowebshop.tricentis.com/login');

          await page.locator('#Email').fill(email);
          await page.locator('#Password').fill(password);
          await page.locator("input[value='Log in']").click();
           page.setDefaultTimeout(2000);

          if(validaty === 'valid')
          {
              const logoutpage=page.locator('.ico-logout');
              await expect(logoutpage).toBeVisible({timeout:3000});

          }else{

              const errormessage=page.locator('.validation-summary-errors');
              await expect(errormessage).toBeVisible({timeout:3000});

              //
              await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
          }

})

}

})
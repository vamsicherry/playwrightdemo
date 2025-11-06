import {test,expect} from "@playwright/test";

import fs from 'fs';
import * as XLSX from 'xlsx';
const jsonpath='testdata/data.xlsx'

const workbook=XLSX.readFile(jsonpath);
const sheetnames=workbook.SheetNames[0];
const worksheeet=workbook.Sheets[sheetnames];

const filecontent:any=XLSX.utils.sheet_to_json(worksheeet);
test.describe("data driven testing",async ()=>{

    for(let {email,password,validaty} of filecontent)
    {

         test(`login data ${email} and ${password}`,async ({page})=>{

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
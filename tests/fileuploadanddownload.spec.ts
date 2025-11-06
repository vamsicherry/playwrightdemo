import {test,expect} from "@playwright/test";

import fs from 'fs';
import { execPath } from "process";


test("File Upload....",async ({page})=>{


    
     await page.goto('https://testautomationpractice.blogspot.com/');

     const files=page.locator('#singleFileInput');
     await files.setInputFiles('uploads/1756063214262.pdf');

     await page.locator("button:has-text('Upload Single File')").click();

     const text=await page.locator('#singleFileStatus').textContent();

     await page.waitForTimeout(4000);

      expect(text).toContain('1756063214262.pdf');
     

})

test("MultiFile Upload....",async ({page})=>{


    
     await page.goto('https://testautomationpractice.blogspot.com/');

     const files=page.locator('#multipleFilesInput');
     await files.setInputFiles(['uploads/1756063214262.pdf','uploads/1756796833980.pdf']);

     await page.locator("button:has-text('Upload Multiple Files')").click();

     const text=await page.locator('#multipleFilesStatus').textContent();

     await page.waitForTimeout(4000);

      expect(text).toContain('1756063214262.pdf');
      expect(text).toContain('1756796833980.pdf');
     

})



test("File Download  for text file...",async ({page})=>{


    
     await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');

     await page.locator('#inputText').first().fill("typescript");
      await page.locator('#generateTxt').first().click();

     const [download]=await Promise.all([
      page.waitForEvent('download'),
      page.locator('#txtDownloadLink').first().click()]);


      //To Verify the download file

      const downloadpath='downloads/first1.txt';
      await download.saveAs(downloadpath);

    //check if download file exists in path
    //using existssync(downloadpath)
      const pathexists=fs.existsSync(downloadpath);
      expect(pathexists).toBeTruthy();


      // if file exist the delete the file from the path using unlinksync(downloadpath)
      if(pathexists)
      {
          fs.unlinkSync(downloadpath);
      }
     await page.waitForTimeout(5000);

     
     

})

test.only("File Upload for pdf files",async ({page})=>{


       await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');

       await page.locator('#inputText').first().fill("typescript");
       await page.locator('#generatePdf').first().click();

       const [download]=await Promise.all([page.waitForEvent('download'),page.locator('#pdfDownloadLink').first().click()]);
       

       const downloadpa='downloads/vamsi.pdf';
       await download.saveAs(downloadpa);

       const pdfexist=fs.existsSync(downloadpa);

       expect(pdfexist).toBeTruthy();

       if(pdfexist)
       {
           fs.unlinkSync(downloadpa);
       }

})
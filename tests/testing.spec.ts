import { test, expect, chromium } from '@playwright/test';
import fs from 'fs';

test("End to End testing", async ({ page }) => {

      await page.goto('https://testautomationpractice.blogspot.com/')


      //InputText

      await page.locator('#name').fill('vamsi');


      //radiobutton

      await page.locator('#male').click();

      //checkbox

      await page.locator('#sunday').click();



      //file upload

      const singlefile = page.locator('#singleFileInput');
      await singlefile.setInputFiles('uploads/1756063214262.pdf');

      const singleupload = page.getByRole('button', { name: 'Upload Single File' });
      await singleupload.click();

      //multifile upload

      const multifile = page.locator('#multipleFilesInput');
      await multifile.setInputFiles(['uploads/1756063214262.pdf', 'uploads/1756796833980.pdf']);

      await page.locator("button:has-text('Upload Multiple Files')").click();



      //simple alert  








})


test("Handling dialog using alert", async ({ page }) => {

      await page.goto('https://testautomationpractice.blogspot.com/');

      page.on('dialog', async (dialog) => {
            console.log('dialog type', dialog.type())
            expect(dialog.type()).toContain('alert')
            console.log(`the message ${dialog.message()}`)
            expect(dialog.message()).toContain('I am an alert box!')
            await dialog.accept();
      })
      await page.locator('#alertBtn').first().click();;

})

test("Handling dialog using confirm alert", async ({ page }) => {

      await page.goto('https://testautomationpractice.blogspot.com/');

      await page.waitForTimeout(7000);

      //cofirm altert
      page.on('dialog', async (dialog) => {
            console.log('dialog type', dialog.type())
            expect(dialog.type()).toContain('confirm')
            console.log(`the message ${dialog.message()}`)
            expect(dialog.message()).toContain('Press a button!')
            await dialog.dismiss();
      })
      await page.locator('#confirmBtn').first().click();
      const text = await page.locator('#demo').innerText();
      expect(text).toContain('You pressed Cancel!');
})

test("Handling dialog using prompt alert", async ({ page }) => {

      await page.goto('https://testautomationpractice.blogspot.com/');

      page.on('dialog', async (dialog) => {
            console.log(`the dialog is${dialog.message()}`)
            expect(dialog.message()).toContain('Please enter your name:');
            console.log("Default value", dialog.defaultValue())
            expect(dialog.defaultValue()).toContain('Harry Potter');
            await dialog.accept('vamsi');

      })
      await page.locator("button[onclick='myFunctionPrompt()']").click();
      const text = await page.locator('#demo').innerText();
      expect(text).toContain('Hello vamsi! How are you today?');



})

test("Handling Tabs in playwright", async () => {
      const browser = await chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto('https://testautomationpractice.blogspot.com/')




      const [newtab] = await Promise.all([context.waitForEvent('page'), page.getByRole('button', { name: 'New Tab' }).click()]);

      const [newtab1] = await Promise.all([context.waitForEvent('page'), page.getByRole('link', { name: 'merrymoonmary' }).last().click()])
      await newtab1.waitForLoadState('domcontentloaded');

      //get title of page
      const totalpages = context.pages();
      console.log(`total page`, totalpages.length);
      console.log("parent title:", await totalpages[0].title());
      console.log('child title:', await totalpages[1].title());
      console.log('subchild:', await totalpages[2].title());

      //2nd way to get title
      console.log("ParentTitle:", await page.title());
      console.log("Child title:", await newtab.title());
      console.log("Child1 title:", await newtab1.title());


      for (const value of totalpages) {
            const title = await value.title();
            console.log(`Checking tab: ${title}`);
            if (title === "merrymoonmary Stock Image and Video Portfolio - iStock") {
                  console.log('Found target tab. Performing actions...');
                  await value.getByRole('link', { name: 'Sign in' }).click();
                  await value.locator('text="Create an account"').click();
                  await value.locator('#register_email').fill('vams@123');
                  await value.waitForTimeout(5000);
            }
      }

      await newtab1.waitForTimeout(5000);
      console.log('Test complete. Closing browser...');


})



test('Handling Popups ', async ({ browser }) => {

      const context = await browser.newContext();
      const page = await context.newPage();

      await page.goto('https://testautomationpractice.blogspot.com/');

      await page.getByRole('button', { name: 'Popup Windows' }).click();

      const [newpopups] = await Promise.all([page.waitForEvent('popup'), page.getByRole('button', { name: 'Popup Windows' }).click()]);

      await page.waitForTimeout(4000);
      const allpages = context.pages();
      console.log("total length ofpages", allpages.length);

      for (const title of allpages) {
            console.log("All titlse of page:", await title.title())
            const mt = await title.title();

            if (mt.toLowerCase().includes('Playwright')) {
                  //await title.close();
                  await title.locator('.getStarted_Sjon').click(); // validate selector
                  await page.waitForTimeout(5000);
            }

            if (mt.toLowerCase().includes('selenium')) {
                  await title.getByRole('link', { name: 'About Selenium' }).click();
                  await title.waitForTimeout(5000);
                  await title.close();


            }
      }
      await page.waitForTimeout(7000);


})


test("File downolad", async ({ page }) => {

      await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');

      await page.locator('textarea[id=inputText]').fill("handy");

      await page.locator('button[id=generatePdf]').click();


      const [down] = await Promise.all([page.waitForEvent('download'), page.locator('a[id=pdfDownloadLink]').click()]);

      const downloadpath = 'downloads/handyss.txt'

      //to save the downloadpath to location
      await down.saveAs(downloadpath);

      //tovery tin that path file exists
      const fileexists = fs.existsSync(downloadpath);
      expect(fileexists).toBeTruthy();



      //toremove the file frompath
      if (fileexists) {
            fs.unlinkSync(downloadpath);

      }






})

test("Mouse over actions", async () => {

      const browser = await chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      const page1 = await context.newPage();
      await page.goto('https://testautomationpractice.blogspot.com/');

      await page.getByRole('button', { name: 'Point Me' }).hover();
      await page.getByRole('link', { name: 'Laptops' }).hover();
      //Mobiles


      //drag and drop

      const dragp = page.locator('div[id=draggable]');
      const dropp = page.locator('div[id=droppable]')

      await dragp.dragTo(dropp);




      //doubleclick
      const text = page.locator('#field1');
      await text.clear();
      await text.fill('vamsi');
      const va = await page.locator('#field1').innerText();
      // console.log(`the value is ${text}`)

      await page.getByRole('button', { name: 'Copy Text' }).dblclick();

      const val = await page.locator('#field2').innerText();
      console.log(val);
      expect(va).toContain(val)
      await page.waitForTimeout(2000);


      //rightclick

      await page1.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

      await page1.locator("span[class*='context-menu']").click({ button: 'right' });


      page1.on('dialog', async (dialog) => {
            console.log(dialog.message());
            expect(dialog.message()).toContain('clicked: paste');
            await dialog.accept();
      })


      await page1.locator("ul[class*='context-menu'] li:nth-child(4)").click();





})
test.only("KeyBoardActions",async ({page})=>{
      
      await page.goto('https://testautomationpractice.blogspot.com/');

       await page.locator('#name').focus();

       await page.keyboard.insertText('helloworld!');

       await page.keyboard.down('Control');
       await page.keyboard.press('A');
       await page.keyboard.up('Control');


       await page.keyboard.down('Control');
       await page.keyboard.press('C');
       await page.keyboard.up('Control');

       await page.keyboard.press('Tab');
       await page.keyboard.press('Tab');


       await page.keyboard.down('Control');

       await page.keyboard.press('V');
       await page.keyboard.up('Control');


       await page.waitForTimeout(5000)

      /* await page.keyboard.insertText("Typescript")
   await page.keyboard.press('Control+A');
   await page.keyboard.press('Control+C');


   await page.keyboard.press('Tab');
   await page.keyboard.press('Tab');


   await page.keyboard.press('Control+V');

   await page.keyboard.press('Tab');
   await page.keyboard.press('Tab');


   await page.keyboard.press('Control+V'); */



})












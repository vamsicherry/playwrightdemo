import {test,expect,Locator}  from "@playwright/test";


test("Handling frames",async ({page})=>{
   
        await page.goto('https://ui.vision/demo/webtest/frames/');
        //Frame we need use use if condion becasue fames can be null in typescipt 
        //type inference so need to specify


        //1.) using page.frame  we can use oonly name and url 

        /*  const frame= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

         if(frame)
         {
            //   await frame.locator('input[name=mytext1]').fill('vamsi');
            //    await page.waitForTimeout(3000);

              await frame.fill('input[name=mytext1]','vamsikrishna')
         }
         else{
            console.log("Frame is not available")
         }
 */

          //2)using framelocator we can pass any frame locator with locatore name

       const loc=   page.frameLocator('[src="frame_1.html"]').locator('input[name=mytext1]');
       await loc.fill("rock");

       await page.waitForTimeout(3000);



})



test("Handling inner/child frames",async ({page})=>{
   
        await page.goto('https://ui.vision/demo/webtest/frames/');
       const framecount= page.frames();
       console.log("Frame Count:",framecount.length)
        
     const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

     if(frame3)
     {

      const fr= frame3.locator('input[name=mytext3]');
       await fr.fill('rockrocky');
       const childframess=   frame3.childFrames();
       console.log("ChildFrames:",childframess.length);

       const cd=childframess[0].locator('div[role=checkbox]').last();
       await cd.click();


     }else{
        console.log("Frame not found.....")
     }

       await page.waitForTimeout(3000);



})



test.only("multifarmes",async ({page})=>{


        await page.goto('https://ui.vision/demo/webtest/frames/');
        // const frame5=page.frameLocator('[src="frame_5.html"]').locator('input[name=mytext5]');
        // await frame5.fill("cherryboy");
        // await page.waitForTimeout(3000);
        // const link=page.locator('center  a');
        // await link.click();

        // const logo=page.locator('#logo');
        // await expect(logo).toBeVisible();

        // await page.waitForTimeout(3000);

        const frame5=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'});

     if(frame5)
     {

      const fr= frame5.locator('input[name=mytext5]');
       await fr.fill('rockrocky');
       const childframess=   frame5.childFrames();
       console.log("ChildFrames:",childframess.length);
      const link= frame5.locator('center  a');
      await link.click();
      await page.waitForTimeout(3000);
       const logo=frame5.locator('#logo');
        await expect(logo).toBeVisible();


     }else{
        console.log("Frame not found.....")
     }

       await page.waitForTimeout(3000);



        


})
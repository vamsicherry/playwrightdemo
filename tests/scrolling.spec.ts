import {test,expect,Page}  from "@playwright/test";
import { cpuUsage } from "process";


test("Infinite scrolling over action",async ({page})=>{

        await page.goto('https://www.booksbykilo.in/new-books');
        test.slow();//set time out for asingle test easy way to trible the default time 3000sec to 9000
        let previousheight=0;

        while(true)
        {
        //scroll down the page 
          await page.evaluate(()=>
          {
            window.scrollTo(0,document.body.scrollHeight);
          })

        await page.waitForTimeout(2000);
        //caputure the current height of the page not scroll
        const currentheight=await page.evaluate(()=>
        {
            return document.body.scrollHeight;
        })

        console.log("previousHeight:",previousheight)
        console.log("currentheight",currentheight);
        if(currentheight===previousheight)
        {
            break;
        }
        previousheight=currentheight;

        }
        
        console.log("reached end of page");
        //await page.waitForTimeout(5000);


})
async function scrolloption(page:Page,delay =2000)
{
    let prevheight=0;
    let bookfound=false;
    while(true)
    {
      const text=await page.locator('#productsDiv h3').allInnerTexts();
      if(text.includes('Snowman'))
      {
          console.log("Bookfound")
          bookfound=true;
          expect(text).toBeTruthy();
          break;
      }
      await page.evaluate(()=>window.scrollBy(0,document.body.scrollHeight));
      await page.waitForTimeout(delay);
      const currheight=await page.evaluate(()=>document.body.scrollHeight);
      console.log("PreviousBook",prevheight)
      console.log("cureentheight",currheight)
      if(currheight===prevheight) break;
      prevheight=currheight;

      
}
if(!bookfound)
      {
        console.log("Book not found,,,")
      }
}
test.only("Scrolling and find book",async ({page})=>{
        await page.goto('https://www.booksbykilo.in/new-books');
        test.slow();
       await scrolloption(page);
        
      
})
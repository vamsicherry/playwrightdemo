import {test,expect}  from "@playwright/test";

test.only("Handling Popups using playwright",async ({browser})=>{

      const context= await browser.newContext();
      const page=   await context.newPage();
      
     await page.goto('https://testautomationpractice.blogspot.com/');
 
     
     
     
    await Promise.all([page.waitForEvent('popup'), await page.locator('#PopUp').click()]);
    await page.waitForTimeout(4000);
    const allpages=  context.pages();
    console.log("Pages:",allpages.length)
      console.log(allpages[0].url());
      console.log(allpages[1].url());
      console.log(allpages[2].url());

      for(let va of allpages)
      {
          const currenttitle= await va.title();
          if(currenttitle.toLowerCase().includes('playwright'))
          {
                  await va.locator('.getStarted_Sjon').click();
                  console.log('Clicked About playwright link');
                  await page.waitForTimeout(5000);
                  await va.close();
                   
          }

          if(currenttitle.toLowerCase().includes('selenium'))
          {
               await  va.locator("a:has-text('About Selenium')").last().click();
               console.log('Clicked About Selenium link');
               await page.waitForTimeout(5000);
          }

      } 

     await page.waitForTimeout(5000);
     




})


test('Handling Popups', async ({ browser }) => {
  // Step 1: Create a new browser context and page
  const context = await browser.newContext();
  const page = await context.newPage();

  // Step 2: Navigate to the popup demo page
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Step 3: Click the popup button and wait for popups to open
  await Promise.all([
    page.waitForEvent('popup'), // waits for at least one popup
    page.locator('#PopUp').click()
  ]);

  // Step 4: Wait for all tabs to load
  await page.waitForTimeout(4000);

  // Step 5: Get all open pages (tabs)
  const allPages = context.pages();
  console.log('Pages:', allPages.length);
  allPages.forEach((p, i) => console.log(`Page[${i}]: ${p.url()}`));

  // Step 6: Iterate through each tab and perform actions based on title
  for (const tab of allPages) {
    const currentTitle = await tab.title();
    console.log(`Tab Title: ${currentTitle}`);

    if (currentTitle.toLowerCase().includes('playwright')) {
      try {
        await tab.locator('.getStarted_Sjon').click(); // validate selector
        await page.waitForTimeout(5000);
        await tab.close();
        console.log('Closed Playwright tab after clicking Get Started');
      } catch (e) {
        console.log('Playwright tab error:', e.message);
      }
    }

    if (currentTitle.toLowerCase().includes('selenium')) {
      try {
        await tab.locator("a:has-text('About Selenium')").last().click();
        await page.waitForTimeout(5000);
        console.log('Clicked About Selenium link');
      } catch (e) {
        console.log('Selenium tab error:', e.message);
      }
    }
  }

  // Step 7: Final wait for visual confirmation
  await page.waitForTimeout(5000);
});

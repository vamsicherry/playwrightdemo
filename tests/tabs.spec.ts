import {test,expect,chromium}  from "@playwright/test";


test("Handling Multiple Tabs",async ()=>{

        const browser=await chromium.launch();
        const context=await browser.newContext();
        const parent=await context.newPage();

        await parent.goto('https://testautomationpractice.blogspot.com/');

        /* context.waitForEvent('page');
        page.locator("button:has-text('New Tab')").click();
 */
       const [child]= await Promise.all([context.waitForEvent('page'),parent.locator("button:has-text('New Tab')").click()]);

      
        //1)Approach 1 get title of the pages
            const totalpages= context.pages();
            console.log("Total Pages:",totalpages.length);

             const  parenttitle= totalpages[0].title();
             const  childtitle=totalpages[1].title();

             console.log("ParentTitle:",await parenttitle);
             console.log("Child title:",await childtitle);



        //2)way to get titles
        console.log("ParentTitle:",await parent.title());
        console.log("Child title:",await child.title());

        //goto child page and send name
        //await child.locator('#travname').fill("switched to parent");
         const iqst=child.locator("a:has-text('merrymoonmary')").click();
         const [child2]= await Promise.all([context.waitForEvent('page'),child.locator("a:has-text('merrymoonmary')").click()]);
           console.log("Child2 titleis",await child2.title());
           const tp=context.pages();
           console.log(tp.length)
           
            
})
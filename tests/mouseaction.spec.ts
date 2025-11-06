import {test,expect, Locator}  from "@playwright/test";


test("Mouse over action",async ({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/")
        const mouseaction=page.locator('text=Point Me'); // Finds the button with that exact text
        await mouseaction.hover();

        const pointme=page.locator('.dropdown-content:nth-child(2)');
        await pointme.hover();

        await page.waitForTimeout(5000);


})

test("Mouse over Right click",async ({page})=>{

        await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        await  page.locator('span.context-menu-one').click({button:'right'});
        await page.locator("//span[normalize-space()='Delete']").click();
        await page.waitForTimeout(5000);

        })



test("Mouse over Doubleclick",async ({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/")
        const doubletext= page.locator('#field1');
        expect(doubletext).toHaveValue('Hello World!');

        
        await  page.locator('button[ondblclick="myFunction1()"]').dblclick();
        const doubetxt= page.locator("#field2");
        expect(doubetxt).toHaveValue('Hello World!');
        await page.waitForTimeout(5000);

        })

test("Mouse over drag and drop",async ({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/")

        //Approach 1
        /* const dragpointstart= page.locator('#draggable');
       
        const droppointend=page.locator('#droppable');

        await dragpointstart.dragTo(droppointend); */


        const dragpointstart= page.locator('#draggable');
       
        const droppointend=page.locator('#droppable');
        await dragpointstart.hover();
        await page.mouse.down();
        await droppointend.hover();
        await page.mouse.up();
        await dragpointstart.dragTo(droppointend);
        await page.waitForTimeout(5000);

        })



test.only("LabAssignment",async ({page})=>{

       await page.goto('https://demo.guru99.com/test/drag_drop.html');
      
       //bank debit drag and drop
       const bank:Locator= page.locator('#credit2');
       const bankdrop:Locator=page.locator('#bank');
       await bank.dragTo(bankdrop);
       const bankprice:Locator=page.locator('#fourth').first();
       const bankpricedrop:Locator=page.locator('#amt7');
       await bankprice.dragTo(bankpricedrop);
       //await page.waitForTimeout(5000);
       //creditside

       const bankcredit:Locator= page.locator('#credit1');
       const bankcreditdrop:Locator=page.locator('#loan');
       await bankcredit.dragTo(bankcreditdrop);
       //const bankprice:Locator=page.locator('#fourth').first();
       const bankcreditpricedrop:Locator=page.locator('#amt8');
       await bankprice.dragTo(bankcreditpricedrop);
       await page.waitForTimeout(5000);

      




})
import {test,expect,Locator}  from "@playwright/test";

test("check dropdown Sorted or Not",async ({page})=>{

      
        await page.goto("https://testautomationpractice.blogspot.com/")

        const dropdown:Locator=page.locator("#animals option");

        const drop:string[]=(await dropdown.allTextContents()).map(value =>value.trim());

        const orginal:string[] =drop;
        const sorted:string[]=drop.sort();

        console.log("Orginal List:",orginal);
        console.log("Sorted List:",sorted);

        
        

})

test("up link dropdown Sorted or Not",async ({page})=>{

      
        await page.goto("https://testautomationpractice.blogspot.com/")
        const multiselectdrop:Locator=page.locator("#animals option");
        //const multiselectdrop:Locator= page.locator("#colors>option");

        const value:string[]=(await multiselectdrop.allTextContents()).map(value =>value.trim());


        /* The spread operator (...) in TypeScript (and JavaScript) is a powerful syntax
         used to 
        expand elements of an iterable (like arrays or objects) into 
        individual elements. It’s incredibly useful for copying, merging, and passing values. */


        const orginal:string[]=[...value];
        const sortedarr:string[]=[...value.sort()];

        console.log("orginal",orginal)
        console.log("orginal",sortedarr)
        expect(orginal).toEqual(sortedarr);
        
        

})

test.only("Drop down contains Duplicate or Not",async ({page})=>{

      
        await page.goto("https://testautomationpractice.blogspot.com/")
        const multiselectdrop:Locator=page.locator("#animals option");
          //const multiselectdrop:Locator= page.locator("#colors>option");

        const value:string[]=(await multiselectdrop.allTextContents()).map(value =>value.trim());

        const myset = new Set<string>();
        const duplicatearray:string[]=[]; //should not use new keyword
        for(const opt of value)
        {
           if(myset.has(opt))
           {
               duplicatearray.push(opt);
           }else{
               myset.add(opt);
           }
        }

        expect(duplicatearray.length).toBe(0);

        if(duplicatearray.length>0)
        {

           console.log("duplicates found")
        }else{
            console.log("not found")
        }

        
        

})
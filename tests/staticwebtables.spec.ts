import  {test,expect,Locator}  from "@playwright/test";

test("Static web Table",async ({page})=>{

      await page.goto("https://testautomationpractice.blogspot.com/");

      const tabel:Locator=page.locator("table[name='BookTable'] tbody");
      
       
      await expect(tabel).toBeVisible();



      //1)Row count and do assertion
      const rows:Locator=tabel.locator('tr');

      await expect(rows).toHaveCount(7);

      const rowcount= await rows.count();
      console.log("row count:",rowcount);
      expect(rowcount).toBe(7);

      //2)colum count and do assertion
      const cell:Locator=rows.locator('th');

      const cellcount=await cell.count();
      console.log("Cell count:",cellcount);

      expect(cellcount).toBe(4);

      await expect(cell).toHaveCount(4);

      //3) read the all data from 2nd row
       const secondcelldata:Locator=rows.nth(2).locator('td');
       
       const secondrowtexts:string[]=await secondcelldata.allInnerTexts();

       console.log("Second cell data:",secondrowtexts);

       await expect(secondcelldata).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);

       for(let va of secondrowtexts)
       {
           console.log(va)
       }

       //4)read all the data from table

       const allrowsdata:Locator[]=await rows.all();
        // const alldata=await rows.locator('td').allInnerTexts();
        //  alldata.join('\t');
       for(let datas of allrowsdata.slice(1))
       {
           console.log(await datas.innerText());
       }


       //5)print book where author name is mukesh
      console.log('>>>>>>>>>>Author with Book>>>>>>>>>>>>>>>')

      const mukeshbook:string[]=[];
       for(let op of allrowsdata.slice(1))
       {
           const datts:string[]=await op.locator('td').allInnerTexts();

           const author= datts[1];
           const book =datts[0];

           if(author ==='Mukesh')
           {
                console.log(`${author} \t ${book}`)
                mukeshbook.push(book);
           }
       }

        expect(mukeshbook).toHaveLength(2);
            

    //6)Total Price of all books
    let totalprice=0;
     for(let op of allrowsdata.slice(1))
     {
         const cells:string[]=await op.locator('td').allInnerTexts();

          const price=cells[3];

         totalprice=totalprice+parseInt(price);
          
     }
      
     console.log("totalPrice of Books:",totalprice);
     expect(totalprice).toBe(7100);


        



})


test.only("Practice static webtable",async ({page})=>{
         
     await page.goto("https://cosmocode.io/automation-practice-webtable/");

     const tables:Locator= page.locator('#countries tbody');

     //1)count total no of rows
       
        const tablerows:Locator=tables.locator('tr');
        const tablerowcount=await tablerows.count();
        console.log("Table row count:",tablerowcount);

        expect(tablerowcount).toBe(197);

    //2)Total colum count
        const tablecolum:Locator=tablerows.locator('td h3');
        const tablecolumcount=await tablecolum.count();
        console.log(tablecolumcount);

        expect(tablecolumcount).toBe(5);

    
      //3)all the data from second row
        const secondro:Locator=tablerows.nth(2).locator('td');
        const secondinnertext:string[]=await secondro.allInnerTexts();

        console.log(secondinnertext)

        await expect(secondro).toHaveText([ '', 'Albania', 'Tirane', 'Lek', 'Albanian' ]);

      //4 read all the data

       const tablefulldata:Locator[] =await tablerows.all();

       for(let i in tablefulldata)
       {
        console.log(await tablefulldata[i].innerText());
       }
     
       //5)print country whose language is english
         console.log('>>>>>>>>>>>>>>>>>Language>>>>>>>>>>>>>>>>>>>>>>>>')
       for(let kashmir of tablefulldata.slice(1))
       {

         const dora:string[]=await kashmir.locator('td').allInnerTexts();
          const country= dora[1];
          const language=dora[4];

          if(language.trim().toLowerCase() ==='english'){
             console.log(`${country} \t ${language}`);
          }

          
       }

       
})
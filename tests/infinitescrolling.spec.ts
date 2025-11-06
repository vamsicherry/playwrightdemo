import {test,expect} from '@playwright/test';



test("Infinitescroll and count book lenght",async ({page})=>{
    test.slow();

      await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');
     

      let bookcount=0;

      let previouscount=0;


      while(true)
      {
        
       const books= await page.locator('#productsDiv h3').all();
        bookcount=books.length;


       await page.evaluate(()=>window.scrollBy(0,document.body.scrollHeight));
        
       await page.waitForTimeout(2000);

       let currentcount=await page.evaluate(()=>document.body.scrollHeight);

       if(currentcount===previouscount)
       {
           break;
       }
       console.log(`Previous height: ${previouscount}`);
      console.log(`Current height: ${currentcount}`);
       previouscount=currentcount;

       console.log("end of page")

       console.log('*********  Reached end of page  ********');

        console.log("Total Number of books:",bookcount); 
      }


})
       

test.only('Count Total Books in the page', async ({ page }) => {
  await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');

  test.slow(); // Set timeout for a single test Easy way to triple the default timeout i.e. 30 secs(30000  ms)
  //test.setTimeout(80000); // 8 secs //Set timeout for a single test

  let booksCount = 0;
  let previousHeight = 0;

  while (true) {
    
     // Get all book titles currently loaded on the page
    const books = await page.locator('#productsDiv h3').all();

    // Check if the target book is in the list
    //booksCount=booksCount+books.length; //Each time the loop runs, it's counting all the books on the page, including those already counted in previous iterations.
    booksCount=books.length; // This will exactly count total number of books.
    
    // Scroll to the bottom
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    // Wait for new content to load
    await page.waitForTimeout(2000);
  
    // Get current scroll height
    const currentHeight = await page.evaluate(() => {
      return document.body.scrollHeight;
    });

    console.log("==============================")
    console.log(`Previous height: ${previousHeight}`);
    console.log(`Current height: ${currentHeight}`);

    // Check if end of page is reached
    if (currentHeight === previousHeight) {
      break;
    }

    previousHeight = currentHeight;
  }
  
  console.log('*********  Reached end of page  ********');

  console.log("Total Number of books:",booksCount); //410

});
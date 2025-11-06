import  {test,expect}  from "@playwright/test";

test("Verify the Url of Page",async ({page})=>
{
        await page.goto("http://www.automationpractice.pl/index.php");

        let pageurl:string=page.url();
        console.log("Page Url:",pageurl)

        await expect(page).toHaveURL(/automationpractice/)

   


})
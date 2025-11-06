import { test, expect } from '@playwright/test';
//test.describe.configure({mode:'serial'})
test.describe.configure({mode:'parallel'})
test.describe('Groups1',async ()=>{
        test('test1', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveTitle('Automation Testing Practice');
  await expect(page.locator('text="Automation Testing Practice"')).toBeVisible();
  //const time=Date.now();

  //await  page.screenshot({path:'screenshots/'+'homepage'+time+'.png'});

  //await page.screenshot({path:'screenshots/'+'fullpage'+time+'.png',fullPage:true})
  console.log("test1");
});

test('test2', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveTitle('Automation Testing Practice');
  await expect(page.locator('text="Automation Testing Practice"')).toBeVisible();
  console.log("test2");
});

test('test3', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveTitle('Automation Testing Practice');
  await expect(page.locator('text="Automation Testing Practice"')).toBeVisible();
  console.log('sanity and regression');
  console.log("test3");
});

test('test6', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page).toHaveTitle('Demo Web Shop');
  console.log("test4");
});


})


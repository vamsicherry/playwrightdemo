import {test,expect,Locator}  from "@playwright/test";

test("Book flight with lowest price", async ({ page }) => {
  await page.goto("https://blazedemo.com/");

  // Select departure and destination
  await page.locator("[name='fromPort']").selectOption({ value: 'Paris' });
  await page.locator("[name='toPort']").selectOption({ value: 'Buenos Aires' });
  await page.locator("input[type='submit']").click();

  // Wait for table to load
  const table = page.locator('.table tbody');
  await expect(table).toBeVisible();

  const rows = await table.locator('tr').all();
  let lowestPrice = Infinity;
  let lowestRowIndex = -1;

  for (let i = 0; i < rows.length; i++) {
    const cells = await rows[i].locator('td').allInnerTexts();
    const priceText = cells[cells.length - 1]; // Last column is price
    const price = parseFloat(priceText.replace('$', ''));

    if (price < lowestPrice) {
      lowestPrice = price;
      lowestRowIndex = i;
    }
  }

  console.log("Lowest Price:", lowestPrice);

  // Click the first cell of the row with the lowest price
  if (lowestRowIndex !== -1) {
    const targetRow = table.locator('tr').nth(lowestRowIndex);
    await targetRow.locator('td').nth(0).click();
  }

  // Confirm booking message appears
  await expect(page.getByText('Your flight from TLV to SFO has been reserved.')).toBeVisible();
  console.log("Booking confirmation message is visible");
});

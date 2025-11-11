//const {test, expect} = require('@playwright/test')
import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {

  await page.goto("https://www.demoblaze.com/index.html");

  // click on login button - property
  // await page.locator('id=login2').click()
  await page.click('id=login2');

  // provide username - css
  // await page.locator('#loginusername').fill("pavanol")
  // optional: wait for the username input to appear if needed
  await page.waitForSelector('#loginusername', { timeout: 10000 });
  await page.fill('#loginusername', 'pavanol');
  // await page.type('#loginusername','pavanol')

  // provide password   - CSS (fixed id: loginpassword)
  await page.waitForSelector("input[id='loginpassword']", { timeout: 10000 });
  await page.fill("input[id='loginpassword']", 'test@123');

  // click on login button  - xpath
  await page.waitForSelector("//button[normalize-space()= 'Log in']", { timeout: 10000 });
  await page.click("//button[normalize-space()= 'Log in']");

  // verify logout link presence
  const logoutlink = page.locator("//a[normalize-space()='Log out']");

  // added small wait to let login process complete
  await logoutlink.waitFor({ state: 'visible', timeout: 15000 });
  await expect(logoutlink).toBeVisible();

  await page.close();
});

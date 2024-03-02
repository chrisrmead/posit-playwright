import { test, expect } from '@playwright/test';

test('create RStudio Project', async ({ page }) => {
  
  // Open main page
  await page.goto('https://posit.cloud/');

  // Assert proper page title
  await expect(page).toHaveTitle(/Posit Cloud/);

  // get login button locator
  const loginButton = page.locator('.menuItems').getByText('Log In')

  // click to get to login screens
  await loginButton.click();

  // Assert proper page title
  await expect(page).toHaveTitle(/Posit - Log In/);

  // Fill username
  await page.locator("[name='email']").fill("mead.robert.chris@gmail.com");

  // get continue button locator
  const continueButton = page.locator('.fullPageFormContainer').getByText('Continue');

  // click continue
  await continueButton.click();

  // enter password
  const passwordField = page.locator("[name='password']")
  await passwordField.waitFor();
  await passwordField.fill('Test12345!');

  // get continue button locator
  const finalLoginButton = page.locator('.fullPageFormContainer').getByRole('button', { name: 'Log In' });

    // click to login
  await finalLoginButton.click();

  // Assert proper page title
  await expect(page).toHaveTitle(/Posit Cloud/);



});



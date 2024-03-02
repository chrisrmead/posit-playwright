import { test, expect } from '@playwright/test';
import { randomUUID } from 'crypto';

test('create RStudio Project', async ({ page }) => {

  // this is a slow test
  test.setTimeout(120000);
  
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

  // get new space button selector
  const newSpaceButton = page.locator('.panelContents').getByRole('button', { name: 'New Space' });

  // click to create space
  await newSpaceButton.click();

  // enter random space name
  const spaceNameLocator = page.locator('.dialogContainer').locator("[id='name']");
  const spaceName = `Test Space ${randomUUID()}`;
  await spaceNameLocator.fill(spaceName);

  // click to create space
  const createSpaceButton = page.locator('.dialogContainer').getByRole('button', { name: 'Create' });
  await createSpaceButton.click();

  // await header showing space is created
  const headerTitleLocator = page.locator('#headerTitle');
  await expect(headerTitleLocator).toContainText(spaceName, {timeout: 60000});

  // show New Project dropdown
  const newProjectButtonLocator = page.locator('.popupButtonAndMenuContainer').getByRole('button', { name: 'New Project' });
  await newProjectButtonLocator.click();

  // click New Rstudio Project in dropdown
  const newRStudioProjectLocator = page.locator('.popupMenu').getByRole('button', { name: 'New RStudio Project' });
  await newRStudioProjectLocator.click();

  const iFrameTableLocator = page.frameLocator('#contentIFrame').locator('.rstudio-themes-default');

  await expect(iFrameTableLocator).toBeVisible({timeout: 120000});
});



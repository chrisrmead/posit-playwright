# posit-playwright

## Overview
* This test performs the following actions
    * Login to Posit Cloud
    * Create a new Space
    * Create a new RStudio project within that space
    * Await the load of the RStudio IDE
* Notes
    * This test currently does not clean up after itself and as only one space is allowed in the account, manual removal of the existing space is required
    * The test requires you to edit the test file, createRStudioProject.spec.ts and enter a valid username and password before running
    * Due to time limitations on the test, it has not been refactored to use page objects or other common UI automation practices.  It is simply a demonstration of Playwright usage in terms of locators, page interactions, frames, etc.

## Creation
This was created with:
```npm init playwright@latest```

## Preinstallation - Mac
[Install Node](https://formulae.brew.sh/formula/node)
[Install TypeScript](https://formulae.brew.sh/formula/typescript)

## Installation
```
git clone git@github.com:chrisrmead/posit-playwright.git
npm install
npx playwright install 
```

## Run Tests
### Headless

```
npx playwright test
npx playwright show-report
```

### Interactive Debugging
```npx playwright test --ui```

Then click the arrow next to the test name to run the test in interactive mode.
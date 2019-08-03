# puppeteer-login
Automate the login flow for a given website by using Puppeteer

## Installation
```
npm install --save puppeteer-login
```

## Usage
In your code:
```
import puppeteer from 'puppeteer';
import login from 'puppeteer-login';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(SOME_WEBSITE_URL);

// Login to an account that exists for the web application at SOME_WEBSITE_URL
// loginButtonElementSelector is a CSS-style selector for the button that will submit the login form
// passwordElementSelector is a CSS-style selector for the password form field
// userIdElementSelector is a CSS-style selector for the username form field
await login({
  page,
  loginButtonElementSelector: '#btnSignon',
  passwordElementSelector: '#password',
  userIdElementSelector: '#userid'
});
```

At the command line:
```
USER_NAME=your-user-name PASSWORD=your-password npm run your-puppeteer-script
```
- Declare USER_NAME and PASSWORD as environment variables before running your puppeteer script. _Never hard code sensitive information, like a password._

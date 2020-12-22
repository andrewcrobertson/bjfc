const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent('<h1>Hello</h1>');
  // await page.goto('http://whatsmyuseragent.org/');
  await page.pdf({ path: `example.pdf` });
  await browser.close();
})();

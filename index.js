const { chromium } = require('playwright');

(async () => {
  const teams = ['U08M', 'U09M', 'U10M', 'U11M', 'U12B', 'U12G', 'U14B', 'U14G', 'U16G', 'U17B-GOLD', 'U17B-GREEN', 'U18G'];
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (let i = 0; i < teams.length; i++) {
    await page.goto(`http://localhost:3000/teams/${teams[i]}/pdfs`);
    await page.pdf({ path: `static/pdfs/${teams[i]}.pdf` });
  }

  await browser.close();
})();

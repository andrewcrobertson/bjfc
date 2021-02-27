const Database = require('better-sqlite3');
const { chromium } = require('playwright');
const path = require('path');

const allTeamSql = `SELECT code,
  name,
  topAge,
  gender
FROM team
ORDER BY topAge,
  gender;`;

const headerTemplate = (name) => `<table style="width:100%; font-size: 8px;">
  <tr>
    <td style="text-align:left; padding-left: 10px">BJFC ${name}</td>
    <td style="text-align:right; padding-right: 10px">Page <span class="pageNumber"></span> of <span class="totalPages"></span></td>
  </tr>
</table>`;

(async () => {
  const dbFile = path.resolve(__dirname, '..', 'data', 'team.db');
  const db = new Database(dbFile);
  const teams = db.prepare(allTeamSql).all();

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (let i = 0; i < teams.length; i++) {
    const { code, name, topAge, gender } = teams[i];
    await page.goto(`http://localhost:3000/teams/${code}/contact`);
    await page.pdf({
      path: `static/pdfs/${code}.pdf`,
      format: 'A4',
      headerTemplate: headerTemplate(name),
      footerTemplate: '<span />',
      displayHeaderFooter: true,
      margin: { top: '70px', bottom: '70px' },
    });
  }

  await browser.close();
})();

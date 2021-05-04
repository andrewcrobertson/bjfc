const Database = require('better-sqlite3');
const fs = require('fs');
const template = require('lodash/template');
const path = require('path');
const format = require('xml-formatter');

const allTeamSql = `SELECT code, name FROM team ORDER BY topAge, gender;`;

const teamPlayerActiveSql = `SELECT p.lastName || ', ' || p.firstName playerName,
  COALESCE(pcg1.lastName || ', ' || pcg1.firstName, '') guardian1Name,
  COALESCE(pcg1.email, pcr.email1, pcr.email2, '') guardian1Email,
  COALESCE(pcg1.mobile, pcg1.phone1, pcg1.phone2, pcr.phoneMobile, pcr.phoneHome, pcr.phoneWork, '') guardian1Phone,
  COALESCE(pcg2.lastName || ', ' || pcg2.firstName, '') guardian2Name,
  COALESCE(pcg2.email, '') guardian2Email,
  COALESCE(pcg2.mobile, pcg2.phone1, pcg2.phone2, '') guardian2Phone
FROM player p
LEFT JOIN playerContactGuardian pcg1 ON p.footyWebNumber = pcg1.footyWebNumber AND pcg1.sequence = 1
LEFT JOIN playerContactGuardian pcg2 ON p.footyWebNumber = pcg2.footyWebNumber AND pcg2.sequence = 2
LEFT JOIN playerContactRegistered pcr ON p.footyWebNumber = pcr.footyWebNumber
WHERE p.teamCode = @teamCode
  AND p.status IN ('Registered', 'Insured')
ORDER BY UPPER(p.lastName), UPPER(p.firstName);`;

const teamPlayerRecentSql = `SELECT p.lastName || ', ' || p.firstName playerName,
  COALESCE(pcg1.lastName || ', ' || pcg1.firstName, '') guardian1Name,
  COALESCE(pcg1.email, pcr.email1, pcr.email2, '') guardian1Email,
  COALESCE(pcg1.mobile, pcg1.phone1, pcg1.phone2, pcr.phoneMobile, pcr.phoneHome, pcr.phoneWork, '') guardian1Phone,
  COALESCE(pcg2.lastName || ', ' || pcg2.firstName, '') guardian2Name,
  COALESCE(pcg2.email, '') guardian2Email,
  COALESCE(pcg2.mobile, pcg2.phone1, pcg2.phone2, '') guardian2Phone
FROM player p
LEFT JOIN playerContactGuardian pcg1 ON p.footyWebNumber = pcg1.footyWebNumber AND pcg1.sequence = 1
LEFT JOIN playerContactGuardian pcg2 ON p.footyWebNumber = pcg2.footyWebNumber AND pcg2.sequence = 2
LEFT JOIN playerContactRegistered pcr ON p.footyWebNumber = pcr.footyWebNumber
WHERE p.teamCode = @teamCode
  AND p.status IN ('Recent')
ORDER BY UPPER(p.lastName), UPPER(p.firstName);`;

const teamPlayerHistoricalSql = `SELECT p.lastName || ', ' || p.firstName playerName,
  COALESCE(pcg1.lastName || ', ' || pcg1.firstName, '') guardian1Name,
  COALESCE(pcg1.email, pcr.email1, pcr.email2, '') guardian1Email,
  COALESCE(pcg1.mobile, pcg1.phone1, pcg1.phone2, pcr.phoneMobile, pcr.phoneHome, pcr.phoneWork, '') guardian1Phone,
  COALESCE(pcg2.lastName || ', ' || pcg2.firstName, '') guardian2Name,
  COALESCE(pcg2.email, '') guardian2Email,
  COALESCE(pcg2.mobile, pcg2.phone1, pcg2.phone2, '') guardian2Phone
FROM player p
LEFT JOIN playerContactGuardian pcg1 ON p.footyWebNumber = pcg1.footyWebNumber AND pcg1.sequence = 1
LEFT JOIN playerContactGuardian pcg2 ON p.footyWebNumber = pcg2.footyWebNumber AND pcg2.sequence = 2
LEFT JOIN playerContactRegistered pcr ON p.footyWebNumber = pcr.footyWebNumber
WHERE p.teamCode = @teamCode
  AND p.status IN ('Historical')
ORDER BY UPPER(p.lastName), UPPER(p.firstName);`;

(async () => {
  const dbFile = path.resolve(__dirname, '..', 'data', 'team.db');
  const db = new Database(dbFile);
  const teams = db.prepare(allTeamSql).all();
  const compiled = template(fs.readFileSync(path.resolve(__dirname, 'template.xml')));

  for (let i = 0; i < teams.length; i++) {
    const { code, name } = teams[i];
    const activePlayers = db.prepare(teamPlayerActiveSql).all({ teamCode: code });
    const recentPlayers = db.prepare(teamPlayerRecentSql).all({ teamCode: code });
    const historicalPlayers = db.prepare(teamPlayerHistoricalSql).all({ teamCode: code });
    const text = format(compiled({ teamCode: code, activePlayers, recentPlayers, historicalPlayers }), { indentation: '  ', collapseContent: true });
    const file = path.resolve(__dirname, '..', 'static', 'contact', `${code}.xml`);
    fs.writeFileSync(file, text);
  }
})();

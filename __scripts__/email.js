const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const allTeamSql = `SELECT code, name FROM team ORDER BY topAge, gender;`;

const teamPlayerEmailActiveSql = `SELECT DISTINCT a.email
  FROM (
      SELECT email FROM playerContactGuardian pcg INNER JOIN player p ON pcg.footyWebNumber = p.footyWebNumber WHERE p.status IN ('Insured', 'Registered') AND p.teamCode = @teamCode
      UNION SELECT email1 email FROM playerContactRegistered pcr INNER JOIN player p ON pcr.footyWebNumber = p.footyWebNumber WHERE p.status IN ('Insured', 'Registered') AND p.teamCode = @teamCode
      UNION SELECT email2 email FROM playerContactRegistered pcr INNER JOIN player p ON pcr.footyWebNumber = p.footyWebNumber WHERE p.status IN ('Insured', 'Registered') AND p.teamCode = @teamCode
  ) a
  WHERE a.email IS NOT NULL
  ORDER BY a.email;`;

const teamPlayerEmailActiveAndRecentSql = `SELECT DISTINCT a.email
  FROM (
      SELECT email FROM playerContactGuardian pcg INNER JOIN player p ON pcg.footyWebNumber = p.footyWebNumber WHERE p.status IN ('Insured', 'Registered', 'Recent') AND p.teamCode = @teamCode
      UNION SELECT email1 email FROM playerContactRegistered pcr INNER JOIN player p ON pcr.footyWebNumber = p.footyWebNumber WHERE p.status IN ('Insured', 'Registered', 'Recent') AND p.teamCode = @teamCode
      UNION SELECT email2 email FROM playerContactRegistered pcr INNER JOIN player p ON pcr.footyWebNumber = p.footyWebNumber WHERE p.status IN ('Insured', 'Registered', 'Recent') AND p.teamCode = @teamCode
  ) a
  WHERE a.email IS NOT NULL
  ORDER BY a.email;`;

const teamOfficialEmailSql = `SELECT DISTINCT tof.email FROM teamOfficial tof
WHERE tof.teamCode = @teamCode
  AND tof.email IS NOT NULL
ORDER BY tof.email;`;

(async () => {
  const dbFile = path.resolve(__dirname, '..', 'data', 'team.db');
  const db = new Database(dbFile);
  const teams = db.prepare(allTeamSql).all();

  for (let i = 0; i < teams.length; i++) {
    const { code, name } = teams[i];
    const teamOfficialEmail = db.prepare(teamOfficialEmailSql).all({ teamCode: code });
    const teamPlayerEmailActive = db.prepare(teamPlayerEmailActiveSql).all({ teamCode: code });
    const teamPlayerEmailActiveAndRecent = db.prepare(teamPlayerEmailActiveAndRecentSql).all({ teamCode: code });

    const text =
      name +
      '\n------------------------------' +
      '\n\nOfficials\n------------------------------\n' +
      teamOfficialEmail.map((r) => r.email).join(';\n') +
      ';' +
      '\n\nActive Players\n------------------------------\n' +
      teamPlayerEmailActive.map((r) => r.email).join(';\n') +
      ';' +
      '\n\nActive and Recent Players\n------------------------------\n' +
      teamPlayerEmailActiveAndRecent.map((r) => r.email).join(';\n') +
      ';';

    const emailFile = path.resolve(__dirname, '..', 'static', 'email', `${code}.txt`);
    fs.writeFileSync(emailFile, text);
  }
})();

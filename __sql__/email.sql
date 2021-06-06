SELECT DISTINCT a.email || ';' email
FROM (
  SELECT pcg1.email
  FROM player p
  INNER JOIN playerContactGuardian pcg1 ON p.footyWebNumber = pcg1.footyWebNumber
  WHERE p.status in ('Registered', 'Insured')
    OR p.footyWebNumber IN (SELECT footyWebNumber FROM transfer where transferYear = '2021' AND toClub = 'Bayswater')
  UNION
  SELECT pcr.email1 as email
  FROM player p
  INNER JOIN playerContactRegistered pcr ON p.footyWebNumber = pcr.footyWebNumber
  WHERE p.status in ('Registered', 'Insured')
    OR p.footyWebNumber IN (SELECT footyWebNumber FROM transfer where transferYear = '2021' AND toClub = 'Bayswater')
  UNION
  SELECT pcr.email2 as email
  FROM player p
  INNER JOIN playerContactRegistered pcr ON p.footyWebNumber = pcr.footyWebNumber
  WHERE p.status in ('Registered', 'Insured')
    OR p.footyWebNumber IN (SELECT footyWebNumber FROM transfer where transferYear = '2021' AND toClub = 'Bayswater')
  UNION
  SELECT t.email FROM teamOfficial t
  UNION
  SELECT c.email FROM committee c
) a
WHERE a.email IS NOT NULL
ORDER BY a.email

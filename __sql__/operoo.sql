SELECT p.footyWebNumber,
  p.lastName,
  p.firstName,
  COALESCE(pcg.email, pcr.email1, pcr.email2) email,
  REPLACE(COALESCE(pcg.mobile, pcg.phone1, pcg.phone2, pcr.phoneMobile, pcr.phoneHome, pcr.phoneWork), ' ',  '') phone,
  CASE
    WHEN t.code = 'U08M' THEN 'U08 Mixed - 2021'
    WHEN t.code = 'U09M' THEN 'U09 Mixed - 2021'
    WHEN t.code = 'U10M' THEN 'U10 Mixed - 2021'
    WHEN t.code = 'U11M' THEN 'U11 Mixed - 2021'
    WHEN t.code = 'U12B' THEN 'U12 Boys - 2021'
    WHEN t.code = 'U12G' THEN 'U12 Girls - 2021'
    WHEN t.code = 'U14B' THEN 'U14 Boys - 2021'
    WHEN t.code = 'U14G' THEN 'U14 Girls - 2021'
    WHEN t.code = 'U16G' THEN 'U16 Girls - 2021'
    WHEN t.code = 'U17B-GOLD' THEN 'U17 Boys Gold - 2021'
    WHEN t.code = 'U17B-GREEN' THEN 'U17 Boys Green - 2021'
    WHEN t.code = 'U18G' THEN 'U18 Girls - 2021'
  END team,
  p.gender,
  substr(p.dateOfBirth, 1, 4) yearOfBirth
FROM player p
INNER JOIN team t ON t.code = p.teamCode
LEFT JOIN playerContactGuardian pcg ON pcg.footyWebNumber = p.footyWebNumber
LEFT JOIN playerContactRegistered pcr ON pcr.footyWebNumber = p.footyWebNumber
WHERE p.status IN ('Registered', 'Insured')
  AND COALESCE(pcg.sequence, 1) = 1
  AND p.footyWebNumber NOT IN (
  )
ORDER BY t.code,
  p.lastName,
  p.firstName;


SELECT a.teamCode, COUNT(a.footyWebNumber) team
FROM (
  SELECT t.footyWebNumber,
    p.teamCode
  FROM [transaction] t
  INNER JOIN player p ON p.footyWebNumber = t.footyWebNumber
  WHERE p.club = 'Bayswater' AND t.product IN ('2021 Registration') and t.status = 'Paid'
    AND t.footyWebNumber NOT IN ( SELECT footyWebNumber FROM transfer where transferYear = '2021' AND toClub = 'Bayswater')
  UNION
  SELECT t.footyWebNumber,
    p.teamCode
  FROM transfer t
  INNER JOIN player p ON p.footyWebNumber = t.footyWebNumber
  where transferYear = '2021' AND toClub = 'Bayswater'
) a
GROUP BY a.teamCode
ORDER BY a.teamCode;

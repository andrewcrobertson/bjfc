SELECT a.month, COUNT(a.footyWebNumber) registrations
FROM (
  SELECT t.footyWebNumber,
    substr(t.date, 1, 7) month
  FROM [transaction] t
  INNER JOIN player p ON p.footyWebNumber = t.footyWebNumber
  WHERE p.club = 'Bayswater' AND t.product IN ('2021 Registration') and t.status = 'Paid'
    AND t.footyWebNumber NOT IN ( SELECT footyWebNumber FROM transfer where transferYear = '2021' AND toClub = 'Bayswater')
  UNION
  SELECT t.footyWebNumber,
    COALESCE(substr(t.finalisedDate, 1, 7), substr(t.applicationDate, 1, 7)) month
  FROM transfer t
  INNER JOIN player p ON p.footyWebNumber = t.footyWebNumber
  where t.transferYear = '2021' AND toClub = 'Bayswater'
) a
GROUP BY a.month
ORDER BY a.month;

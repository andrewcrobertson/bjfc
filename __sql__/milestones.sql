SELECT t.name team,
      p.lastName || ', ' || p.firstName || ' (' || p.gamesTotal || ' games) - '  || p.milestone || 'th game Round ' || p.milestoneRound || '' text
FROM (
    SELECT p.teamCode,
      p.lastName,
      p.firstName,
      p.gamesTotal,
      CASE
        WHEN p.gamesTotal < 100 and p.gamesTotal + 14 >= 100 THEN 100
        WHEN p.gamesTotal < 50 and p.gamesTotal + 14 THEN 50
      END milestone,
      CASE
        WHEN p.gamesTotal < 100 and p.gamesTotal + 14 >= 100 THEN 100 - gamesTotal
        WHEN p.gamesTotal < 50 and p.gamesTotal + 14 THEN 50 - gamesTotal
      END milestoneRound
    FROM player p
    WHERE p.status in ('Registered', 'Insured')
      and (
        p.gamesTotal < 100 and p.gamesTotal + 14 >= 100
        or p.gamesTotal < 50 and p.gamesTotal + 14 >= 50
      )
  ) p
INNER JOIN team t on p.teamCode = t.code
ORDER BY p.teamCode,
  p.milestoneRound,
  p.lastName,
  p.firstName;

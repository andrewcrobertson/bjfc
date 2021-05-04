SELECT DISTINCT a.email || ';' email
FROM (
  SELECT pcg1.email
  FROM player p
  INNER JOIN playerContactGuardian pcg1 ON p.footyWebNumber = pcg1.footyWebNumber
  WHERE p.status in ('Registered', 'Insured')
    AND p.footyWebNumber NOT IN (
      '03530829', -- Isabella Crane
      '01612058', -- Kaiyla Dybing
      '01255889', -- Scarlett Barnett
      '03043657', -- Tahlia Dannefaerd
      '01364241', -- Viveca Kleinert
      '02047322', -- Olivia Koch
      '02873325', -- Lillie Marotti
      '03221507', -- Jocelyn Thomas
      '02953689'  -- Chelsea Hepburn
    )
  UNION
  SELECT pcr.email1 as email
  FROM player p
  INNER JOIN playerContactRegistered pcr ON p.footyWebNumber = pcr.footyWebNumber
  WHERE p.status in ('Registered', 'Insured')
    AND p.footyWebNumber NOT IN (
      '03530829', -- Isabella Crane
      '01612058', -- Kaiyla Dybing
      '01255889', -- Scarlett Barnett
      '03043657', -- Tahlia Dannefaerd
      '01364241', -- Viveca Kleinert
      '02047322', -- Olivia Koch
      '02873325', -- Lillie Marotti
      '03221507', -- Jocelyn Thomas
      '02953689'  -- Chelsea Hepburn
    )
  UNION
  SELECT pcr.email2 as email
  FROM player p
  INNER JOIN playerContactRegistered pcr ON p.footyWebNumber = pcr.footyWebNumber
  WHERE p.status in ('Registered', 'Insured')
    AND p.footyWebNumber NOT IN (
      '03530829', -- Isabella Crane
      '01612058', -- Kaiyla Dybing
      '01255889', -- Scarlett Barnett
      '03043657', -- Tahlia Dannefaerd
      '01364241', -- Viveca Kleinert
      '02047322', -- Olivia Koch
      '02873325', -- Lillie Marotti
      '03221507', -- Jocelyn Thomas
      '02953689'  -- Chelsea Hepburn
    )
  UNION
  SELECT t.email FROM teamOfficial t
  UNION
  SELECT c.email FROM committee c
) a
WHERE a.email IS NOT NULL
ORDER BY a.email

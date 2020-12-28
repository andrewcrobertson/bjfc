import { getDatabase } from '@this/utility/getDatabase';
import { getStatusInfoArchived } from '@this/utility/getStatusInfo';
import { toInitials } from '@this/utility/toInitials';
import { filter, map } from 'lodash';
import type { Request } from 'polka';
import type { IState } from '../state';

const teamSql = `SELECT code,
  name,
  topAge,
  gender
FROM team
WHERE code = @code;`;

const playersSql = `SELECT footyWebNumber,
  lastName,
  firstName,
  dateOfBirth,
  gender,
  status,
  yearLastRegistered,
  yearLastTransferred,
  club,
  teamCode
FROM player
WHERE teamCode = @code
  AND status IN ('Transferred', 'Historical');`;

export const mapPlayer = (player: any) => ({
  footyWebNumber: player.footyWebNumber,
  status: player.status,
  statusInfo: getStatusInfoArchived(player.status, player.club, player.yearLastRegistered, player.yearLastTransferred),
  initials: toInitials(`${player.firstName}, ${player.lastName}`),
  lastName: player.lastName,
  firstName: player.firstName,
  dateOfBirth: player.dateOfBirth,
  gender: player.gender,
});

export const get = async (req: Request): Promise<IState> => {
  const db = getDatabase();

  const teamRaw = db.prepare(teamSql).get({ code: req.params.code });
  const playersRaw = db.prepare(playersSql).all({ code: req.params.code });

  return {
    code: teamRaw.code,
    ageGroupCode: `U${teamRaw.topAge}`,
    name: teamRaw.name,
    teamGender: teamRaw.gender,
    playersTransferred: map(
      filter(playersRaw, (p) => p.status === 'Transferred'),
      mapPlayer
    ),
    playersHistorical: map(
      filter(playersRaw, (p) => p.status === 'Historical'),
      mapPlayer
    ),
  };
};

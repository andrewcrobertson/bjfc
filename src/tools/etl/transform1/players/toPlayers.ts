import type { PlayerStatusEnum } from '@this/constants/enums';
import { filter, includes } from 'lodash';
import first from 'lodash/first';
import fromPairs from 'lodash/fromPairs';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import type { IRawConfig } from '../../types/rawConfig';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { ISanitisedPlayer } from '../../types/sanitisedPlayer';
import type { ISanitisedTeam } from '../../types/sanitisedTeam';
import { toPlayer } from './toPlayer';

const toPlayerStatusEnum = (club: string, insuredThisSeason: boolean, registeredThisSeason: boolean, registeredRecently: boolean): PlayerStatusEnum => {
  if (club !== 'Bayswater') return 'Transferred';
  if (insuredThisSeason) return 'Insured';
  if (registeredThisSeason) return 'Registered';
  if (registeredRecently) return 'Recent';
  return 'Historical';
};

export const toPlayers = (config: IRawConfig, players: IRawPlayer[], teams: ISanitisedTeam[], groupedPlayerInfo: any): ISanitisedPlayer[] => {
  const orderedTeams = sortBy(teams, ({ birthYears }) => Math.min(...birthYears));
  const groupedPlayerTeamExceptions = fromPairs(map(config.playerTeamExceptions, ({ code, footyWebNumber }) => [footyWebNumber, code]));

  return map(players, (player) => {
    const team =
      first(
        filter(
          orderedTeams,
          ({ birthYears, playerGenders }) => includes(playerGenders, player.gender) && includes(birthYears, parseInt(player.dateOfBirth.substring(0, 4)))
        )
      ) ?? ({} as any);
    const teamCode = groupedPlayerTeamExceptions[player.footyWebNumber] ?? team.code ?? null;

    return toPlayer(player, teamCode, groupedPlayerInfo);
  });
};

import type { PlayerStatusEnum } from '@this/constants/enums';
import first from 'lodash/first';
import fromPairs from 'lodash/fromPairs';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import type { IRawConfig } from '../../types/rawConfig';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { ISanitisedPlayer } from '../../types/sanitisedPlayer';
import type { ISanitisedTeam } from '../../types/sanitisedTeam';
import { transformPlayer } from './transformPlayer';

const transformPlayerStatusEnum = (club: string, insuredThisSeason: boolean, registeredThisSeason: boolean, registeredRecently: boolean): PlayerStatusEnum => {
  if (club !== 'Bayswater') return 'Transferred';
  if (insuredThisSeason) return 'Insured';
  if (registeredThisSeason) return 'Registered';
  if (registeredRecently) return 'Recent';
  return 'Historical';
};

export const transformPlayers = (config: IRawConfig, players: IRawPlayer[], teams: ISanitisedTeam[], groupedPlayerInfo: any): ISanitisedPlayer[] => {
  const orderedTeams = sortBy(teams, ({ birthYears }) => Math.min(...birthYears));
  const groupedPlayerTeamExceptions = fromPairs(map(config.playerTeamExceptions, ({ code, footyWebNumber }) => [footyWebNumber, code]));

  return map(players, (player) => {
    const teamCodes = map(orderedTeams, ({ code }) => code);
    const teamCode = groupedPlayerTeamExceptions[player.footyWebNumber] ?? first(teamCodes) ?? null;

    return transformPlayer(player, teamCode, groupedPlayerInfo);
  });
};

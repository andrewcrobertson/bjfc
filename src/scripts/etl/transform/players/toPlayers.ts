import type { IPlayer } from '@this/types/player';
import type { ITeam } from '@this/types/team';
import filter from 'lodash/filter';
import first from 'lodash/first';
import fromPairs from 'lodash/fromPairs';
import includes from 'lodash/includes';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import type { IRawConfig } from '../../types/rawConfig';
import type { IRawPlayer } from '../../types/rawPlayer';
import { toPlayer } from './toPlayer';

export const toPlayers = (config: IRawConfig, players: IRawPlayer[], teams: ITeam[], groupedPlayerInfo: any): IPlayer[] => {
  const orderedTeams = sortBy(teams, ({ birthYears }) => Math.min(...birthYears));
  const groupedPlayerTeamExceptions = fromPairs(map(config.playerTeamExceptions, ({ code, footyWebNumber }) => [footyWebNumber, code]));
  const filterOut = map(config.noContact, ({ footyWebNumber }) => footyWebNumber);
  const filteredPlayers = filter(players, ({ footyWebNumber }) => !includes(filterOut, footyWebNumber));
  const teamFilter = (team: ITeam, player: IRawPlayer) =>
    includes(team.playerGenders, player.gender) && includes(team.birthYears, parseInt(player.dateOfBirth.substring(0, 4)));
  const filterTeams = (player: IRawPlayer) => filter(orderedTeams, (team) => teamFilter(team, player));

  return map(filteredPlayers, (player) => {
    const team = first(filterTeams(player)) ?? ({} as any);
    const teamCode = groupedPlayerTeamExceptions[player.footyWebNumber] ?? team.code ?? null;
    return toPlayer(player, teamCode, groupedPlayerInfo);
  });
};

import filter from 'lodash/filter';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import type { ISanitisedConfig } from '../types/sanitisedConfig';
import type { ISanitisedPlayer } from '../types/sanitisedPlayer';
import type { ISanitisedTeam } from '../types/sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  players: ISanitisedPlayer[];
  teams: ISanitisedTeam[];
}

const mapTeam = (team: ISanitisedTeam, playersAll: ISanitisedPlayer[]) => {
  const players = filter(playersAll, ({ teamCode }) => teamCode === team.code);
  const insuredCount = filter(players, ({ status }) => status === 'Insured').length;
  const registeredCount = filter(players, ({ status }) => status === 'Registered').length;

  return {
    code: team.code,
    ageGroupCode: team.ageGroupCode,
    name: team.name,
    teamGender: team.teamGender,
    roles: [
      { name: 'Head Coach', filled: team.headCoach !== null },
      { name: 'Assistant Coach', filled: team.assistantCoach !== null },
      { name: 'Team Manager', filled: team.teamManager !== null },
      { name: 'Trainer', filled: team.trainer !== null },
    ],
    totalCount: insuredCount + registeredCount,
    insuredCount,
    registeredCount,
  };
};

export const teamList = ({ teams, players }: Options) =>
  orderBy(
    map(teams, (team) => mapTeam(team, players)),
    ['code'],
    ['desc']
  );

import type { ISanitisedPlayer } from '@this/tools/etl/types/sanitisedPlayer';
import type { ISanitisedTeam } from '@this/tools/etl/types/sanitisedTeam';
import filter from 'lodash/filter';

export const mapTeam = (team: ISanitisedTeam, players: ISanitisedPlayer[]) => {
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

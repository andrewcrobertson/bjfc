import { filter } from 'lodash';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
}

const mapTeam = (team: ISanitisedTeam, members: ISanitisedMember[]) => {
  const teamMembers = filter(members, ({ teamCode }) => teamCode === team.code);
  const insuredCount = filter(teamMembers, ({ insuredThisSeason }) => insuredThisSeason).length;
  const registeredCount = filter(teamMembers, ({ registeredThisSeason, insuredThisSeason }) => registeredThisSeason && !insuredThisSeason).length;

  return {
    code: team.code,
    ageGroupCode: team.ageGroupCode,
    name: team.name,
    teamGender: team.teamGender,
    headCoach: team.headCoach !== null,
    assistantCoach: team.assistantCoach !== null,
    trainer: team.trainer !== null,
    teamManager: team.teamManager !== null,
    totalCount: insuredCount + registeredCount,
    insuredCount,
    registeredCount,
  };
};

export const teamList = ({ teams, members }: Options) =>
  orderBy(
    map(teams, (team) => mapTeam(team, members)),
    ['code'],
    ['desc']
  );

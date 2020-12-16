import fromPairs from 'lodash/fromPairs';
import keyBy from 'lodash/keyBy';
import map from 'lodash/map';
import pick from 'lodash/pick';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
}

const fields = ['footyWebNumber', 'initials', 'lastName', 'firstName', 'dateOfBirth', 'club', 'gender', 'guardians', 'emergencyContact', 'contact'];

const teamFields = ['code', 'ageGroupCode', 'name', 'teamGender'];

export const playerDetail = ({ teams, members: membersRaw }: Options) => {
  const teamMap = fromPairs(map(teams, (team) => [team.code, pick(team, teamFields)]));
  const members = map(membersRaw, (memberRaw) => {
    const member = pick(memberRaw, ...fields) as any;
    member.team = teamMap[memberRaw.teamCode] ?? null;
    return member;
  });

  return keyBy(members, 'footyWebNumber');
};

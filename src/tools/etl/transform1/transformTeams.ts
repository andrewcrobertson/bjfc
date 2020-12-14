import map from 'lodash/map';
import type { PersonGenderEnum, TeamGenderEnum } from '../constants/enums';
import * as personGenderEnum from '../constants/personGenderEnum';
import * as teamGenderEnum from '../constants/teamGenderEnum';
import type { IRawConfig, IRawConfigOfficial } from '../rawConfig';
import type { ISanitisedOfficial, ISanitisedTeam } from '../sanitisedTeam';
import { toInitials } from './toInitials';

export interface Options {
  config: IRawConfig;
}

const convertGender = (playerGenders: PersonGenderEnum[]): TeamGenderEnum => {
  if (playerGenders.length === 1) {
    if (playerGenders[0] === personGenderEnum.female) return teamGenderEnum.female;
    if (playerGenders[0] === personGenderEnum.male) return teamGenderEnum.male;
  }

  return teamGenderEnum.mixed;
};

const mapOfficial = (official: IRawConfigOfficial): ISanitisedOfficial => {
  if (official === null) {
    return null;
  }

  const initials = toInitials(official.firstName, official.familyName);
  return { ...official, initials };
};

export const transformTeams = ({ config }: Options): ISanitisedTeam[] =>
  map(config.teams, (team) => ({
    code: team.code,
    ageGroupCode: 'U' + Math.max(...team.ages).toString(),
    name: team.name,
    birthYears: map(team.ages, (age) => config.seasonYear - age),
    playerGenders: team.genders,
    teamGender: convertGender(team.genders),
    headCoach: mapOfficial(team.headCoach),
    assistantCoach: mapOfficial(team.assistantCoach),
    trainer: mapOfficial(team.trainer),
    teamManager: mapOfficial(team.teamManager),
  }));

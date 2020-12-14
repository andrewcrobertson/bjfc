import map from 'lodash/map';
import type { PlayerGenderEnum, TeamGenderEnum } from '../constants/enums';
import * as playerGenderEnum from '../constants/playerGenderEnum';
import * as teamGenderEnum from '../constants/teamGenderEnum';
import type { IRawConfig } from '../rawConfig';
import type { ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: IRawConfig;
}

const convertGender = (playerGenders: PlayerGenderEnum[]): TeamGenderEnum => {
  if (playerGenders.length === 1) {
    if (playerGenders[0] === playerGenderEnum.female) return teamGenderEnum.female;
    if (playerGenders[0] === playerGenderEnum.male) return teamGenderEnum.male;
  }

  return teamGenderEnum.mixed;
};

export const transformTeams = ({ config }: Options): ISanitisedTeam[] =>
  map(config.teams, (team) => ({
    code: team.code,
    name: team.name,
    birthYears: map(team.ages, (age) => config.seasonYear - age),
    gender: convertGender(team.genders),
    headCoach: team.headCoach,
    assistantCoach: team.assistantCoach,
    trainer: team.trainer,
    teamManager: team.teamManager,
  }));

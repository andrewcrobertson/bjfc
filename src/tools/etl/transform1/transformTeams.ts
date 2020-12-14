import type { PlayerGenderEnum, TeamGenderEnum } from '@this/constants/enums';
import * as playerGenderEnum from '@this/constants/playerGenderEnum';
import * as teamGenderEnum from '@this/constants/teamGenderEnum';
import map from 'lodash/map';
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
    ages: team.ages,
    gender: convertGender(team.genders),
    headCoach: team.headCoach,
    assistantCoach: team.assistantCoach,
    trainer: team.trainer,
    teamManager: team.teamManager,
  }));

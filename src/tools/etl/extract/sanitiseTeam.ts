import { nullIfEmpty } from './nullIfEmpty';
import { nullIfEmptyString } from './nullIfEmptyString';

export const sanitiseTeam = (obj: any) => ({
  code: nullIfEmptyString(obj.code),
  name: nullIfEmptyString(obj.name),
  ages: obj.ages,
  genders: obj.genders,
  headCoach: nullIfEmpty(obj.headCoach),
  assistantCoach: nullIfEmpty(obj.assistantCoach),
  trainer: nullIfEmpty(obj.trainer),
  teamManager: nullIfEmpty(obj.teamManager),
});

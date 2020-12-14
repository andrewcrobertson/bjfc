import { nullIfEmpty } from './nullIfEmpty';
import { nullIfEmptyString } from './nullIfEmptyString';
import { sanitiseOfficial } from './sanitiseOfficial';

export const sanitiseTeam = (obj: any) => ({
  code: nullIfEmptyString(obj.code),
  name: nullIfEmptyString(obj.name),
  ages: obj.ages,
  genders: obj.genders,
  headCoach: nullIfEmpty(sanitiseOfficial(obj.headCoach)),
  assistantCoach: nullIfEmpty(sanitiseOfficial(obj.assistantCoach)),
  trainer: nullIfEmpty(sanitiseOfficial(obj.trainer)),
  teamManager: nullIfEmpty(sanitiseOfficial(obj.teamManager)),
});

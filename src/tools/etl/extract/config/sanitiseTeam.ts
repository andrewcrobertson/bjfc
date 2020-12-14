import { sanitiseObject } from '../utility/sanitiseObject';
import { sanitiseString } from '../utility/sanitiseString';
import { sanitiseOfficial } from './sanitiseOfficial';

export const sanitiseTeam = (obj: any) => ({
  code: sanitiseString(obj.code),
  name: sanitiseString(obj.name),
  ages: obj.ages,
  genders: obj.genders,
  headCoach: sanitiseObject(sanitiseOfficial(obj.headCoach)),
  assistantCoach: sanitiseObject(sanitiseOfficial(obj.assistantCoach)),
  trainer: sanitiseObject(sanitiseOfficial(obj.trainer)),
  teamManager: sanitiseObject(sanitiseOfficial(obj.teamManager)),
});

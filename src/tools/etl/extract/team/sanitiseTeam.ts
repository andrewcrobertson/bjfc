import type { IRawTeam } from '../../types/rawTeam';
import { sanitiseString } from '../utility/sanitiseString';
import { sanitiseOfficial } from './sanitiseOfficial';

export const sanitiseTeam = (obj: any): IRawTeam => ({
  code: sanitiseString(obj.code),
  name: sanitiseString(obj.name),
  ages: obj.ages,
  genders: obj.genders,
  headCoach: sanitiseOfficial(obj.headCoach),
  assistantCoach: sanitiseOfficial(obj.assistantCoach),
  trainer: sanitiseOfficial(obj.trainer),
  teamManager: sanitiseOfficial(obj.teamManager),
});

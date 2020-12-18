import type { IRawConfigPlayerTeamExceptions } from '../../types/rawConfig';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitisePlayerTeamExceptions = (obj: any): IRawConfigPlayerTeamExceptions => ({
  code: sanitiseString(obj.code),
  footyWebNumber: sanitiseString(obj.footyWebNumber),
});

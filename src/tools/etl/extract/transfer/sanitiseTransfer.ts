import type { IRawPlayerTransfer } from '../../types/rawTransfer';
import { sanitiseDashDateTime } from '../utility/sanitiseDashDateTime';
import { sanitiseSlashDate } from '../utility/sanitiseSlashDate';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseTransfer = (obj: any): IRawPlayerTransfer => ({
  footyWebNumber: sanitiseString(obj.footyWebNumber),
  transferYear: obj.transferYear,
  applicationDate: sanitiseSlashDate(obj.applicationDate),
  finalisedDate: sanitiseDashDateTime(obj.finalisedDate).date,
  sourceClub: sanitiseString(obj.sourceClub),
  destinationClub: sanitiseString(obj.destinationClub),
});

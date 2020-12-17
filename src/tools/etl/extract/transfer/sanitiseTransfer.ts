import type { IRawPlayerTransfer } from '../../types/rawTransfer';
import { sanitiseDashDateTime } from '../utility/sanitiseDashDateTime';
import { sanitiseSlashDate } from '../utility/sanitiseSlashDate';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseTransfer = (transfer: any): IRawPlayerTransfer => ({
  footyWebNumber: sanitiseString(transfer.footyWebNumber),
  transferYear: transfer.transferYear,
  applicationDate: sanitiseSlashDate(transfer.applicationDate),
  finalisedDate: sanitiseDashDateTime(transfer.finalisedDate).date,
  sourceClub: sanitiseString(transfer.sourceClub),
  destinationClub: sanitiseString(transfer.destinationClub),
});

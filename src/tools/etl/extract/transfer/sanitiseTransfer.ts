import type { IRawTransfer } from '../../types/rawTransfer';
import { sanitiseDashDateTime } from '../utility/sanitiseDashDateTime';
import { sanitiseSlashDate } from '../utility/sanitiseSlashDate';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseTransfer = (obj: any): IRawTransfer =>
  obj.overallTransferStatus === 'Approved' && obj.permitType === ''
    ? {
        footyWebNumber: sanitiseString(obj.footyWebNumber),
        transferYear: obj.transferYear,
        applicationDate: sanitiseSlashDate(obj.applicationDate),
        finalisedDate: sanitiseDashDateTime(obj.finalisedDate).date,
        sourceClub: sanitiseString(obj.sourceClub),
        destinationClub: sanitiseString(obj.destinationClub),
      }
    : null;

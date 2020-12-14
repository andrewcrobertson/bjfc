import { parseStandardDate } from './parseStandardDate';
import { parseTransferDateTime } from './parseTransferDateTime';

export const sanitiseTransfer = ({ transferYear, applicationDate, finalisedDate, sourceClub, destinationClub }, clubMap: any) => ({
  transferYear,
  applicationDate: parseStandardDate(applicationDate),
  finalisedDate: parseTransferDateTime(finalisedDate).date,
  sourceClub: clubMap[sourceClub] ?? sourceClub,
  destinationClub: clubMap[destinationClub] ?? destinationClub,
});

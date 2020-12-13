import { parseStandardDate } from './parseStandardDate';
import { parseTransferDateTime } from './parseTransferDateTime';

export const transfer = ({ transferYear, applicationDate, finalisedDate, sourceClub, destinationClub }) => ({
  transferYear,
  applicationDate: parseStandardDate(applicationDate),
  finalisedDate: parseTransferDateTime(finalisedDate).date,
  sourceClub,
  destinationClub,
});

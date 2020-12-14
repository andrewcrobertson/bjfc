import { sanitiseDashDateTime } from '../utility/sanitiseDashDateTime';
import { sanitiseSlashDate } from '../utility/sanitiseSlashDate';

export const sanitiseTransfer = ({ transferYear, applicationDate, finalisedDate, sourceClub, destinationClub }, clubMap: any) => ({
  transferYear,
  applicationDate: sanitiseSlashDate(applicationDate),
  finalisedDate: sanitiseDashDateTime(finalisedDate).date,
  sourceClub: clubMap[sourceClub] ?? sourceClub,
  destinationClub: clubMap[destinationClub] ?? destinationClub,
});

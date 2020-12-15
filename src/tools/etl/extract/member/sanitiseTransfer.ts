import { sanitiseDashDateTime } from '../utility/sanitiseDashDateTime';
import { sanitiseSlashDate } from '../utility/sanitiseSlashDate';
import { sanitiseWithMap } from './sanitiseWithMap';

export const sanitiseTransfer = ({ transferYear, applicationDate, finalisedDate, sourceClub, destinationClub }, clubMap: any) => ({
  transferYear,
  applicationDate: sanitiseSlashDate(applicationDate),
  finalisedDate: sanitiseDashDateTime(finalisedDate).date,
  sourceClub: sanitiseWithMap(sourceClub, clubMap),
  destinationClub: sanitiseWithMap(destinationClub, clubMap),
});

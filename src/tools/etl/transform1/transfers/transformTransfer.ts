import type { IRawTransfer } from '../../types/rawTransfer';
import type { ISanitisedTransfer } from '../../types/sanitisedTransfer';

type ClubMap = { [key: string]: string };

export const transformTransfer = (obj: IRawTransfer, clubMap: ClubMap): ISanitisedTransfer => ({
  footyWebNumber: obj.footyWebNumber,
  transferYear: obj.transferYear,
  applicationDate: obj.applicationDate,
  finalisedDate: obj.finalisedDate,
  sourceClub: clubMap[obj.sourceClub] ?? obj.sourceClub,
  destinationClub: clubMap[obj.destinationClub] ?? obj.destinationClub,
});

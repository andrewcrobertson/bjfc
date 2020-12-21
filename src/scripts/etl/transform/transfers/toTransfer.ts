import type { ISanitisedTransfer } from '../../../../types/sanitisedTransfer';
import type { IRawTransfer } from '../../types/rawTransfer';

type ClubMap = { [key: string]: string };

export const toTransfer = (obj: IRawTransfer, clubMap: ClubMap): ISanitisedTransfer => ({
  footyWebNumber: obj.footyWebNumber,
  transferYear: obj.transferYear,
  applicationDate: obj.applicationDate,
  finalisedDate: obj.finalisedDate,
  sourceClub: clubMap[obj.fromClub] ?? obj.fromClub,
  destinationClub: clubMap[obj.toClub] ?? obj.toClub,
});

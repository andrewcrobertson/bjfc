import type { PlayerStatusEnum } from '@this/constants/enums';

export const transformPlayerStatus = (
  club: string,
  insuredThisSeason: boolean,
  registeredThisSeason: boolean,
  registeredRecently: boolean
): PlayerStatusEnum => {
  if (club !== 'Bayswater') return 'Transferred';
  if (insuredThisSeason) return 'Insured';
  if (registeredThisSeason) return 'Registered';
  if (registeredRecently) return 'Recent';
  return 'Historical';
};

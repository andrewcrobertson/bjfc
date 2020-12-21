import type { PlayerStatusEnum } from '@this/constants/enums';

export const toPlayerStatus = (club: string, insured: boolean, registered: boolean, registeredRecently: boolean): PlayerStatusEnum => {
  if (club !== 'Bayswater') return 'Transferred';
  if (insured) return 'Insured';
  if (registered) return 'Registered';
  if (registeredRecently) return 'Recent';
  return 'Historical';
};

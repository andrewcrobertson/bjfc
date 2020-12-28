import type { IDisability } from '../../../state';
import type { IDisabilityDb } from '../dataAccess/getDisability';

export const toDisability = (disability: IDisabilityDb): IDisability => {
  return {
    type: '',
    notes: '',
  };
};

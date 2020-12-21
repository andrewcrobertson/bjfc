import { uniq } from 'lodash';
import type { ISanitisedPlayerDisability } from '../../../../types/sanitisedPlayer';
import type { IRawPlayerDisability } from '../../types/rawPlayer';
import { arrayToString } from '../utility/arrayToString';

export const toDisability = (disability: IRawPlayerDisability): ISanitisedPlayerDisability => ({
  type: arrayToString(uniq([disability.type1, disability.type2])),
  notes: arrayToString(uniq([disability.note1, disability.note1])),
});

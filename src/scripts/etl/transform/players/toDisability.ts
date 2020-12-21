import type { ISanitisedPlayerDisability } from '@this/types/sanitisedPlayer';
import { uniq } from 'lodash';
import type { IRawPlayerDisability } from '../../types/rawPlayer';
import { arrayToString } from '../utility/arrayToString';

export const toDisability = (disability: IRawPlayerDisability): ISanitisedPlayerDisability => ({
  type: arrayToString(uniq([disability.type1, disability.type2])),
  notes: arrayToString(uniq([disability.note1, disability.note1])),
});

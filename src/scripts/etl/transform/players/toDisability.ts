import type { IPlayerDisability } from '@this/types/player';
import uniq from 'lodash/uniq';
import type { IRawPlayerDisability } from '../../types/rawPlayer';
import { arrayToString } from '../utility/arrayToString';

export const toDisability = (disability: IRawPlayerDisability): IPlayerDisability => ({
  type: arrayToString(uniq([disability.type1, disability.type2])),
  notes: arrayToString(uniq([disability.note1, disability.note1])),
});

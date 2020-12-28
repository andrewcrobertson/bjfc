import uniq from 'lodash/uniq';
import type { IDisability } from '../../state';
import type { IDisabilityDb } from '../dataAccess/getDisability';
import { arrayToString } from './arrayToString';

export const toDisability = (disability: IDisabilityDb): IDisability =>
  disability === null
    ? null
    : {
        type: arrayToString(uniq([disability.type1, disability.type2])),
        notes: arrayToString(uniq([disability.note1, disability.note1])),
      };

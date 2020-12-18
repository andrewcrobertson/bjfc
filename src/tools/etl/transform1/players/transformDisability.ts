import { uniq } from 'lodash';
import type { IRawPlayerDisability } from '../../types/rawPlayer';
import type { ISanitisedPlayerDisability } from '../../types/sanitisedPlayer';
import { arrayToString } from '../utility/arrayToString';

export const transformDisability = (disability: IRawPlayerDisability): ISanitisedPlayerDisability =>
  disability === null
    ? null
    : {
        type: arrayToString(uniq([disability.type1, disability.type2])),
        notes: arrayToString(uniq([disability.note1, disability.note1])),
      };

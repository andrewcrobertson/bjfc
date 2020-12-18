import type { IRawPlayerRegisteredContact } from '../../types/rawPlayer';
import type { ISanitisedPlayerContact } from '../../types/sanitisedPlayer';
import { arrayToString } from '../utility/arrayToString';

export const transformSportsTGContact = (obj: IRawPlayerRegisteredContact): ISanitisedPlayerContact =>
  obj === null
    ? null
    : {
        phone1: obj.phoneMobile,
        phone2: obj.phoneHome,
        phone3: obj.phoneWork,
        email1: obj.email1,
        email2: obj.email2,
        assistInRole: arrayToString([obj.assistanceRole1, obj.assistanceRole2, obj.assistanceRole3]),
      };

import type { ISanitisedPlayerContact } from '../../sanitisedPlayer';
import type { IRawPlayerRegisteredContact } from '../../types/rawPlayer';
import { arrayToString } from '../utility/arrayToString';

export const transformSportsTGContact = (obj: IRawPlayerRegisteredContact): ISanitisedPlayerContact => ({
  phone1: obj.phoneMobile,
  phone2: obj.phoneHome,
  phone3: obj.phoneWork,
  email1: obj.email1,
  email2: obj.email2,
  assistInRole: arrayToString([obj.assistanceRole1, obj.assistanceRole2, obj.assistanceRole3]),
});

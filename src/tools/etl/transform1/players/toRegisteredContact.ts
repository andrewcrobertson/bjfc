import type { IRawPlayerRegisteredContact } from '../../types/rawPlayer';
import type { ISanitisedPlayerRegisteredContact } from '../../types/sanitisedPlayer';
import { arrayToString } from '../utility/arrayToString';

export const toRegisteredContact = (obj: IRawPlayerRegisteredContact): ISanitisedPlayerRegisteredContact => ({
  gender: obj.gender,
  phone1: obj.phoneMobile,
  phone2: obj.phoneHome,
  phone3: obj.phoneWork,
  email1: obj.email1,
  email2: obj.email2,
  assistInRole: arrayToString([obj.assistInRole1, obj.assistInRole2, obj.assistInRole3]),
});

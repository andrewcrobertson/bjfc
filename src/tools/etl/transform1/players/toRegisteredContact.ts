import type { IRawPlayerRegisteredContact } from '../../types/rawPlayer';
import type { ISanitisedPlayerRegisteredContact } from '../../types/sanitisedPlayer';
import { arrayToString } from '../utility/arrayToString';
import { toContactMethods } from '../utility/toContactMethods';

export const toRegisteredContact = (obj: IRawPlayerRegisteredContact): ISanitisedPlayerRegisteredContact => ({
  gender: obj.gender,
  contactMethods: toContactMethods([
    { type: 'Phone', value: obj.phoneMobile },
    { type: 'Phone', value: obj.phoneHome },
    { type: 'Phone', value: obj.phoneWork },
    { type: 'Email', value: obj.email1 },
    { type: 'Email', value: obj.email2 },
  ]),
  assistInRole: arrayToString([obj.assistInRole1, obj.assistInRole2, obj.assistInRole3]),
});

import type { IPlayerContact } from '@this/types/player';
import type { IRawPlayerRegisteredContact } from '../../types/rawPlayer';
import { arrayToString } from '../utility/arrayToString';
import { toContactMethods } from '../utility/toContactMethods';

export const toContactRegistered = (obj: IRawPlayerRegisteredContact): IPlayerContact => ({
  type: 'Registered',
  relationship: null,
  name: 'Registered Contact',
  initials: 'RC',
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

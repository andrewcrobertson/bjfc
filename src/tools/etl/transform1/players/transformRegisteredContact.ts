import type { IRawPlayerRegisteredContact } from '../../types/rawPlayer';
import { arrayToString } from '../arrayToString';

export const transformRegisteredContact = ({
  email1,
  email2,
  phoneHome,
  phoneMobile,
  phoneWork,
  assistanceRole1,
  assistanceRole2,
  assistanceRole3,
}: IRawPlayerRegisteredContact) => ({
  phone1: phoneMobile,
  phone2: phoneHome,
  email1,
  email2,
  assistInRole: arrayToString([assistanceRole1, assistanceRole2, assistanceRole3]),
});

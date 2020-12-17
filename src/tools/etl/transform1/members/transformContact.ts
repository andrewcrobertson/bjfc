import type { IRawMemberContact } from '../../rawMember';
import { arrayToString } from '../arrayToString';

export const transformContact = ({
  email1,
  email2,
  phoneHome,
  phoneMobile,
  phoneWork,
  assistanceRole1,
  assistanceRole2,
  assistanceRole3,
}: IRawMemberContact) => ({
  phone1: phoneMobile,
  phone2: phoneHome,
  email1,
  email2,
  assistInRole: arrayToString([assistanceRole1, assistanceRole2, assistanceRole3]),
});

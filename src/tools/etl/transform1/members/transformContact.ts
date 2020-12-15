import type { IRawMemberContact } from '../../rawMember';

export const transformContact = ({ email1, email2, phoneHome, phoneMobile, phoneWork }: IRawMemberContact) => ({
  phone1: phoneMobile,
  phone2: phoneHome,
  email1,
  email2,
});

import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseContact = (obj: any) => ({
  phoneHome: sanitiseString(obj.telephoneNumberHome),
  phoneWork: sanitiseString(obj.telephoneNumberWork),
  phoneMobile: sanitiseString(obj.telephoneNumberMobile),
  email1: sanitiseString(obj.email),
  email2: sanitiseString(obj.email2),
});

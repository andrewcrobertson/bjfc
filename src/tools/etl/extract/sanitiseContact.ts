import { nullIfEmptyString } from './nullIfEmptyString';

export const sanitiseContact = (obj: any) => ({
  phoneHome: nullIfEmptyString(obj.telephoneNumberHome),
  phoneWork: nullIfEmptyString(obj.telephoneNumberWork),
  phoneMobile: nullIfEmptyString(obj.telephoneNumberMobile),
  email1: nullIfEmptyString(obj.email),
  email2: nullIfEmptyString(obj.email2),
});

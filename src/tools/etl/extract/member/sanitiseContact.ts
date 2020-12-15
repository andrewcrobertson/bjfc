import { sanitiseEmail } from '../utility/sanitiseEmail';
import { sanitisePhone } from '../utility/sanitisePhone';

export const sanitiseContact = (obj: any) => ({
  phoneHome: sanitisePhone(obj.telephoneNumberHome),
  phoneWork: sanitisePhone(obj.telephoneNumberWork),
  phoneMobile: sanitisePhone(obj.telephoneNumberMobile),
  email1: sanitiseEmail(obj.email),
  email2: sanitiseEmail(obj.email2),
});

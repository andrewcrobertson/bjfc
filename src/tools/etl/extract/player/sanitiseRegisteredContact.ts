import { sanitiseEmail } from '../utility/sanitiseEmail';
import { sanitisePhone } from '../utility/sanitisePhone';
import { sanitiseAssistInRole } from './sanitiseAssistInRole';

export const sanitiseRegisteredContact = (obj: any) => ({
  phoneHome: sanitisePhone(obj.telephoneNumberHome),
  phoneWork: sanitisePhone(obj.telephoneNumberWork),
  phoneMobile: sanitisePhone(obj.telephoneNumberMobile),
  email1: sanitiseEmail(obj.email),
  email2: sanitiseEmail(obj.email2),
  assistInRole1: sanitiseAssistInRole(obj.canYouAssistTheClub),
  assistInRole2: sanitiseAssistInRole(obj.clubAssistanceRequired),
  assistInRole3: sanitiseAssistInRole(obj.asAParentGuardianAreYouAbleToAssistInAnyOfTheFollowingAreas),
});

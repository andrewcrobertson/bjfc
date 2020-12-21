import type { IRawConfigNoContact } from '../../types/rawConfig';
import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseNoContact = (obj: any): IRawConfigNoContact => ({
  footyWebNumber: sanitiseString(obj.footyWebNumber),
});

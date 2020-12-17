import compact from 'lodash/compact';
import map from 'lodash/map';
import type { IRawPlayer } from '../../types/rawPlayer';
import { sanitiseObject } from '../utility/sanitiseObject';
import { sanitisePersonGender } from '../utility/sanitisePersonGender';
import { sanitiseSlashDate } from '../utility/sanitiseSlashDate';
import { sanitiseString } from '../utility/sanitiseString';
import { sanitiseContact } from './sanitiseContact';
import { sanitiseDisability } from './sanitiseDisability';
import { sanitiseDisabilityNote } from './sanitiseDisabilityNote';
import { sanitiseDisabilityType } from './sanitiseDisabilityType';
import { sanitiseEmergencyContact } from './sanitiseEmergencyContact';
import { sanitiseGuardian1 } from './sanitiseGuardian1';
import { sanitiseGuardian2 } from './sanitiseGuardian2';
import { sanitiseTransaction } from './sanitiseTransaction';
import { sanitiseTransfer } from './sanitiseTransfer';

export const sanitisePlayer = (obj: any, productMap: any, clubMap: any, transactions: any[], transfers: any[]): IRawPlayer => ({
  footyWebNumber: sanitiseString(obj.footyWebNumber),
  activeRecord: obj.activeRecord === 'Yes',
  lastName: sanitiseString(obj.familyName),
  firstName: sanitiseString(obj.firstName),
  dateOfBirth: sanitiseSlashDate(sanitiseString(obj.dateOfBirth)),
  gender: sanitisePersonGender(obj.gender),
  guardians: compact([sanitiseObject(sanitiseGuardian1(obj)), sanitiseObject(sanitiseGuardian2(obj))]),
  emergencyContact: sanitiseObject(sanitiseEmergencyContact(obj)),
  contact: sanitiseObject(sanitiseContact(obj)),
  transactions: compact(map(transactions, (transaction) => sanitiseTransaction(transaction, productMap))),
  transfers: compact(map(transfers, (transfer) => sanitiseTransfer(transfer, clubMap))),
  disability: sanitiseDisability(obj.doesTheParticipantIdentifyAsLivingWithADisabilityDisabilities),
  disabilityType1: sanitiseDisabilityType(obj.disability1),
  disabilityType2: sanitiseDisabilityType(obj.disability2),
  disabilityNote1: sanitiseDisabilityNote(obj.pleaseSpecifyAnyDisabilitiesWeNeedToKnowAbout),
  disabilityNote2: sanitiseDisabilityNote(obj.pleaseProvideAdditionalInformationAroundHowTheClubCanSupportTheParticipantsDisability),
});

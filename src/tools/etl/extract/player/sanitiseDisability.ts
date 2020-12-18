import type { IRawPlayerDisability } from '../../types/rawPlayer';
import { sanitiseString } from '../utility/sanitiseString';
import { sanitiseDisabilityNote } from './sanitiseDisabilityNote';
import { sanitiseDisabilityType } from './sanitiseDisabilityType';

export const sanitiseDisability = (obj: any): IRawPlayerDisability => {
  const hasDisability = sanitiseString(obj.doesTheParticipantIdentifyAsLivingWithADisabilityDisabilities);
  return hasDisability === 'Yes'
    ? {
        type1: sanitiseDisabilityType(obj.disability1),
        type2: sanitiseDisabilityType(obj.disability2),
        note1: sanitiseDisabilityNote(obj.pleaseSpecifyAnyDisabilitiesWeNeedToKnowAbout),
        note2: sanitiseDisabilityNote(obj.pleaseProvideAdditionalInformationAroundHowTheClubCanSupportTheParticipantsDisability),
      }
    : null;
};

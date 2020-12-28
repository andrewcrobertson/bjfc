import type { PlayerStatusEnum } from '@this/scripts/constants/enums';
import * as playerStatusEnum from '@this/scripts/constants/playerStatusEnum';
import trim from 'lodash/trim';

export const getStatusInfoInsured = () => 'Insured';

export const getStatusInfoRegistered = () => 'Registered';

export const getStatusInfoRecent = (yearLastRegistered: number) => trim(`Last registered ${yearLastRegistered ?? ' recently'}`);

export const getStatusInfoTransferred = (club: string, yearLastTransferred: number) => trim(`${club} ${yearLastTransferred ?? ''}`);

export const getStatusInfoHistorical = (yearLastRegistered: number) => trim(`Last registered ${yearLastRegistered ?? ' a long time ago'}`);

export const getStatusInfoCurrent = (status: PlayerStatusEnum, yearLastRegistered: number) => {
  switch (status) {
    case playerStatusEnum.insured:
      return getStatusInfoInsured();
    case playerStatusEnum.registered:
      return getStatusInfoRegistered();
    case playerStatusEnum.recent:
      return getStatusInfoRecent(yearLastRegistered);
    case playerStatusEnum.unknown:
    default:
      return 'Unknown';
  }
};

export const getStatusInfoArchived = (status: PlayerStatusEnum, club: string, yearLastRegistered: number, yearLastTransferred: number) => {
  switch (status) {
    case playerStatusEnum.transferred:
      return getStatusInfoTransferred(club, yearLastTransferred);
    case playerStatusEnum.historical:
      return getStatusInfoHistorical(yearLastRegistered);
    case playerStatusEnum.unknown:
    default:
      return 'Unknown';
  }
};

export const getStatusInfo = (status: PlayerStatusEnum, club: string, yearLastRegistered: number, yearLastTransferred: number) => {
  switch (status) {
    case playerStatusEnum.insured:
      return getStatusInfoInsured();
    case playerStatusEnum.registered:
      return getStatusInfoRegistered();
    case playerStatusEnum.recent:
      return getStatusInfoRecent(yearLastRegistered);
    case playerStatusEnum.transferred:
      return getStatusInfoTransferred(club, yearLastTransferred);
    case playerStatusEnum.historical:
      return getStatusInfoHistorical(yearLastRegistered);
    case playerStatusEnum.unknown:
    default:
      return 'Unknown';
  }
};

import type { IPersonName } from '@this/types/common';
import type { IPlayer } from '@this/types/player';
import { getStatusInfo } from '@this/utility/getStatusInfo';
import compact from 'lodash/compact';
import filter from 'lodash/filter';
import flatten from 'lodash/flatten';
import join from 'lodash/join';
import map from 'lodash/map';
import replace from 'lodash/replace';
import toLower from 'lodash/toLower';
import uniq from 'lodash/uniq';
import type { IPlayer as ITargetPlayer } from '../state';

const mapGuardians = (guardians: any[]) => {
  if (guardians.length === 0) {
    return 'Unknown';
  }

  const guardian1 = guardians[0];
  if (guardians.length === 1) {
    return `${guardian1.firstName} ${guardian1.lastName}`;
  }

  if (guardians.length >= 2) {
    const guardian2 = guardians[1];
    if (guardian1.lastName === guardian2.lastName) {
      if (guardian1.firstName === guardian2.firstName) {
        return `${guardian1.firstName} ${guardian1.lastName}`;
      }

      return `${guardian1.firstName} & ${guardian2.firstName} ${guardian2.lastName}`;
    }

    return `${guardian1.firstName} ${guardian1.lastName} & ${guardian2.firstName} ${guardian2.lastName}`;
  }
};

export const mapPlayer = (player: IPlayer): ITargetPlayer => {
  const guardiansRaw = filter(player.contacts, ({ type }) => type === 'Guardian');
  const guardians = map(guardiansRaw, ({ name, gender }) => ({ firstName: (name as IPersonName).first, lastName: (name as IPersonName).last, gender }));
  const searchTermsPlayer = [player.firstName, player.lastName];
  const searchTermsGuardians = flatten(map(guardians, ({ firstName, lastName }) => [firstName, lastName]));
  const searchTerms = join(uniq(map(compact([...searchTermsPlayer, ...searchTermsGuardians]), (term) => toLower(replace(term, /\s/g, '')))).sort(), ' ');

  return {
    footyWebNumber: player.footyWebNumber,
    status: player.status,
    statusInfo: getStatusInfo(player),
    initials: player.initials,
    lastName: player.lastName,
    firstName: player.firstName,
    gender: player.gender,
    guardians: mapGuardians(guardians),
    searchTerms,
  };
};

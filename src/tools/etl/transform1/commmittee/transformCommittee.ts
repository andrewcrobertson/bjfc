import map from 'lodash/map';
import type { IRawConfig } from '../../rawConfig';
import type { ISanitisedCommittee } from '../../sanitisedCommittee';
import { toInitials } from '../toInitials';

export interface Options {
  config: IRawConfig;
}

export const transformCommittee = ({ config }: Options): ISanitisedCommittee[] =>
  map(config.committee, (official) => {
    if (official === null) {
      return null;
    }

    const initials = toInitials(official.firstName, official.familyName);
    return { ...official, initials };
  });

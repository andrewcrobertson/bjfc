import map from 'lodash/map';
import type { IRawConfigCommittee } from '../../rawConfig';
import type { ISanitisedCommittee } from '../../sanitisedCommittee';
import { toInitials } from '../toInitials';

export interface Options {
  committee: IRawConfigCommittee[];
}

export const transformCommittee = ({ committee }: Options): ISanitisedCommittee[] =>
  map(committee, (member) => {
    if (member === null) {
      return null;
    }

    const initials = toInitials(member.firstName, member.lastName);
    return { ...member, initials };
  });

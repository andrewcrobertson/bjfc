import map from 'lodash/map';
import type { ISanitisedCommittee } from '../../sanitisedCommittee';
import type { IRawConfigCommittee } from '../../types/rawConfig';
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

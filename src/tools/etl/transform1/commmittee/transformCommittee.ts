import map from 'lodash/map';
import type { ISanitisedCommittee } from '../../sanitisedCommittee';
import type { IRawCommittee } from '../../types/rawCommittee';
import { toInitials } from '../toInitials';

export interface Options {
  committee: IRawCommittee[];
}

export const transformCommittee = ({ committee }: Options): ISanitisedCommittee[] =>
  map(committee, (member) => {
    if (member === null) {
      return null;
    }

    const initials = toInitials(member.firstName, member.lastName);
    return { ...member, initials };
  });

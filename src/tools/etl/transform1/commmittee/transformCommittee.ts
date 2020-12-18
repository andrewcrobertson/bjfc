import map from 'lodash/map';
import type { ISanitisedCommittee } from '../../sanitisedCommittee';
import type { IRawCommittee } from '../../types/rawCommittee';
import { toInitials } from '../utility/toInitials';

const mapCommittee = (member: IRawCommittee) => ({ ...member, initials: toInitials(member.firstName, member.lastName) });

export interface Options {
  committee: IRawCommittee[];
}

export const transformCommittee = (options: Options): ISanitisedCommittee[] => map(options.committee, mapCommittee);

import map from 'lodash/map';
import type { IRawCommittee } from '../../types/rawCommittee';
import type { ISanitisedCommittee } from '../../types/sanitisedCommittee';
import { transformMember } from './transformMember';

export interface Options {
  committee: IRawCommittee[];
}

export const transformCommittee = (options: Options): ISanitisedCommittee[] => map(options.committee, transformMember);

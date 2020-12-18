import map from 'lodash/map';
import type { ISanitisedCommittee } from '../../sanitisedCommittee';
import type { IRawCommittee } from '../../types/rawCommittee';
import { transformMember } from './transformMember';

export interface Options {
  committee: IRawCommittee[];
}

export const transformCommittee = (options: Options): ISanitisedCommittee[] => map(options.committee, transformMember);

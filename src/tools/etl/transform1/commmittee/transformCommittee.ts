import map from 'lodash/map';
import type { IRawCommittee } from '../../types/rawCommittee';
import type { ISanitisedCommittee } from '../../types/sanitisedCommittee';
import { transformMember } from './transformMember';

export const transformCommittee = (committee: IRawCommittee[]): ISanitisedCommittee[] => map(committee, transformMember);

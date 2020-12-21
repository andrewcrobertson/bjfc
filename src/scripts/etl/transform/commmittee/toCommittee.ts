import map from 'lodash/map';
import type { IRawCommittee } from '../../types/rawCommittee';
import type { ISanitisedCommittee } from '../../types/sanitisedCommittee';
import { toMember } from './toMember';

export const toCommittee = (committee: IRawCommittee[]): ISanitisedCommittee[] => map(committee, toMember);

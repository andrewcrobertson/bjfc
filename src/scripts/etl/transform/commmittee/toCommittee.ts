import map from 'lodash/map';
import type { ISanitisedCommittee } from '../../../../types/sanitisedCommittee';
import type { IRawCommittee } from '../../types/rawCommittee';
import { toMember } from './toMember';

export const toCommittee = (committee: IRawCommittee[]): ISanitisedCommittee[] => map(committee, toMember);

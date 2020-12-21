import type { ISanitisedCommittee } from '@this/types/sanitisedCommittee';
import map from 'lodash/map';
import type { IRawCommittee } from '../../types/rawCommittee';
import { toMember } from './toMember';

export const toCommittee = (committee: IRawCommittee[]): ISanitisedCommittee[] => map(committee, toMember);

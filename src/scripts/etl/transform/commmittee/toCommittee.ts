import type { ICommitteeMember } from '@this/types/committee';
import map from 'lodash/map';
import type { IRawCommittee } from '../../types/rawCommittee';
import { toMember } from './toMember';

export const toCommittee = (committee: IRawCommittee[]): ICommitteeMember[] => map(committee, toMember);

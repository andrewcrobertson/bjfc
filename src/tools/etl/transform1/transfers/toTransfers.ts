import map from 'lodash/map';
import type { IRawTransfer } from '../../types/rawTransfer';
import type { ISanitisedTransfer } from '../../types/sanitisedTransfer';
import { toTransfer } from './toTransfer';

type ClubMap = { [key: string]: string };

export const toTransfers = (transfers: IRawTransfer[], clubMap: ClubMap): ISanitisedTransfer[] => map(transfers, (t) => toTransfer(t, clubMap));

import map from 'lodash/map';
import type { IRawTransfer } from '../../types/rawTransfer';
import type { ISanitisedTransfer } from '../../types/sanitisedTransfer';
import { transformTransfer } from './transformTransfer';

type ClubMap = { [key: string]: string };

export const transformTransfers = (transfers: IRawTransfer[], clubMap: ClubMap): ISanitisedTransfer[] => map(transfers, (t) => transformTransfer(t, clubMap));

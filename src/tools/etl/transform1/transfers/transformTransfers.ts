import map from 'lodash/map';
import type { IRawTransfer } from '../../types/rawTransfer';
import type { ISanitisedTransfer } from '../../types/sanitisedTransfer';
import { transformTransfer } from './transformTransfer';

type ClubMap = { [key: string]: string };

export interface Options {
  transfers: IRawTransfer[];
}

export const transformTransfers = (options: Options, clubMap: ClubMap): ISanitisedTransfer[] => map(options.transfers, (t) => transformTransfer(t, clubMap));

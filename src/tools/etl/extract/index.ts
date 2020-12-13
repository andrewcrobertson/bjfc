import csv from 'csvtojson';
import fs from 'fs';
import camelCase from 'lodash/camelCase';
import filter from 'lodash/filter';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import mapKeys from 'lodash/mapKeys';
import type { IConfig } from '../config';
import type { IMember } from '../member';
import { getYear } from './getYear';
import { member } from './member';

export interface Options {
  configPath: string;
  allMembersCsvPath: string;
  allTransactionsCsvPath: string;
  allTransfersCsvPath: string;
}

export const extract = async ({ configPath, allMembersCsvPath, allTransactionsCsvPath, allTransfersCsvPath }: Options) => {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8')) as IConfig;

  const year = getYear(config);

  const allTransactionsJsonRaw = await csv().fromFile(allTransactionsCsvPath);
  const allTransactionsJsonAll = map(allTransactionsJsonRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  const allTransactionsJsonFiltered = filter(
    allTransactionsJsonAll,
    (obj: any) => obj.transactionDate !== '' && obj.product !== '' && obj.lineItemTotal !== ''
  );
  const allTransactionsJson = groupBy(allTransactionsJsonFiltered, 'footyWebNumber');

  const allTransfersJsonRaw = await csv().fromFile(allTransfersCsvPath);
  const allTransfersJsonAll = map(allTransfersJsonRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  const allTransfersJsonFiltered = filter(allTransfersJsonAll, (obj: any) => obj.overallTransferStatus === 'Approved');
  const allTransfersJson = groupBy(allTransfersJsonFiltered, 'footyWebNumber');

  const allMembersJsonRaw = await csv().fromFile(allMembersCsvPath);
  const allMembersJsonAll = map(allMembersJsonRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  const allMembersJsonFiltered = filter(allMembersJsonAll, (obj: any) => parseInt(obj.dateOfBirth.slice(-4)) >= year);
  const allMembersJson = map(allMembersJsonFiltered, (obj: any) =>
    member(obj, allTransactionsJson[obj.footyWebNumber], allTransfersJson[obj.footyWebNumber])
  ) as IMember[];

  return { config, members: allMembersJson };
};

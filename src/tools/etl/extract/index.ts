import csv from 'csvtojson';
import fs from 'fs';
import { includes } from 'lodash';
import camelCase from 'lodash/camelCase';
import filter from 'lodash/filter';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import mapKeys from 'lodash/mapKeys';
import type { IRawConfig } from '../rawConfig';
import type { IRawMember } from '../rawMember';
import { getPlayerOldestBirthYear } from './getPlayerOldestBirthYear';
import { sanitiseConfig } from './sanitiseConfig';
import { sanitiseMember } from './sanitiseMember';

export interface Options {
  configPath: string;
  allMembersCsvPath: string;
  allTransactionsCsvPath: string;
  allTransfersCsvPath: string;
}

export const extract = async ({ configPath, allMembersCsvPath, allTransactionsCsvPath, allTransfersCsvPath }: Options) => {
  const config = sanitiseConfig(JSON.parse(fs.readFileSync(configPath, 'utf-8'))) as IRawConfig;

  const yearMale = getPlayerOldestBirthYear(config, 'Male');
  const yearFemale = getPlayerOldestBirthYear(config, 'Female');
  const noContact = map(config.noContact, ({ footyWebNumber }) => footyWebNumber);

  const transactionFilter = (obj: any) => obj.transactionDate !== '' && obj.product !== '' && obj.lineItemTotal !== '';
  const allTransactionsJsonRaw = await csv().fromFile(allTransactionsCsvPath);
  const allTransactionsJsonAll = map(allTransactionsJsonRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  const allTransactionsJsonFiltered = filter(allTransactionsJsonAll, (obj: any) => transactionFilter(obj));
  const allTransactionsJson = groupBy(allTransactionsJsonFiltered, 'footyWebNumber');

  const transferFilter = (obj: any) => obj.overallTransferStatus === 'Approved';
  const allTransfersJsonRaw = await csv().fromFile(allTransfersCsvPath);
  const allTransfersJsonAll = map(allTransfersJsonRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  const allTransfersJsonFiltered = filter(allTransfersJsonAll, (obj: any) => transferFilter(obj));
  const allTransfersJson = groupBy(allTransfersJsonFiltered, 'footyWebNumber');

  const getYear = (gender) => (gender === 'Male' ? yearMale : gender === 'Female' ? yearFemale : Math.max(yearMale, yearFemale));
  const memberFilter = (obj: any) => parseInt(obj.dateOfBirth.slice(-4)) >= getYear(obj.gender) && !includes(noContact, obj.footyWebNumber);
  const memberMap = (obj: any) => sanitiseMember(obj, allTransactionsJson[obj.footyWebNumber], allTransfersJson[obj.footyWebNumber]);
  const allMembersJsonRaw = await csv().fromFile(allMembersCsvPath);
  const allMembersJsonAll = map(allMembersJsonRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  const allMembersJsonFiltered = filter(allMembersJsonAll, (obj: any) => memberFilter(obj));
  const allMembersJson = map(allMembersJsonFiltered, (obj: any) => memberMap(obj)) as IRawMember[];

  return { config, members: allMembersJson };
};

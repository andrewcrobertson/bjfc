import csv from 'csvtojson';
import fs from 'fs';
import camelCase from 'lodash/camelCase';
import filter from 'lodash/filter';
import fromPairs from 'lodash/fromPairs';
import groupBy from 'lodash/groupBy';
import includes from 'lodash/includes';
import map from 'lodash/map';
import mapKeys from 'lodash/mapKeys';
import type { IRawConfig, IRawConfigCommittee, IRawConfigTeam } from '../rawConfig';
import type { IRawPlayer, IRawPlayerGenderEnum } from '../rawPlayer';
import { sanitiseCommittee } from './config/sanitiseCommittee';
import { sanitiseConfig } from './config/sanitiseConfig';
import { sanitiseTeam } from './config/sanitiseTeam';
import { getPlayerOldestBirthYear } from './getPlayerOldestBirthYear';
import { sanitisePlayer } from './player/sanitisePlayer';

export interface Options {
  configPath: string;
  committeePath: string;
  teamsPath: string;
  allMembersCsvPath: string;
  allTransactionsCsvPath: string;
  allTransfersCsvPath: string;
}

export const extract = async (options: Options) => {
  const config = sanitiseConfig(JSON.parse(fs.readFileSync(options.configPath, 'utf-8'))) as IRawConfig;
  const productMap = fromPairs(map(config.productMap, ({ from, to }) => [from, to]));
  const clubMap = fromPairs(map(config.clubMap, ({ from, to }) => [from, to]));

  const allTeamsJsonRaw = JSON.parse(fs.readFileSync(options.teamsPath, 'utf-8'));
  const teams = map(allTeamsJsonRaw, (team) => sanitiseTeam(team)) as IRawConfigTeam[];

  const allCommitteeJsonRaw = JSON.parse(fs.readFileSync(options.committeePath, 'utf-8'));
  const committee = map(allCommitteeJsonRaw, (member) => sanitiseCommittee(member)) as IRawConfigCommittee[];

  const yearMale = getPlayerOldestBirthYear(teams, config.seasonYear, 'Male');
  const yearFemale = getPlayerOldestBirthYear(teams, config.seasonYear, 'Female');
  const noContact = map(config.noContact, ({ footyWebNumber }) => footyWebNumber);

  const transactionFilter = (obj: any) => obj.transactionDate !== '' && obj.product !== '' && obj.lineItemTotal !== '';
  const allTransactionsJsonRaw = await csv().fromFile(options.allTransactionsCsvPath);
  const allTransactionsJsonAll = map(allTransactionsJsonRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  const allTransactionsJsonFiltered = filter(allTransactionsJsonAll, (obj: any) => transactionFilter(obj));
  const allTransactionsJson = groupBy(allTransactionsJsonFiltered, 'footyWebNumber');

  const transferFilter = (obj: any) => obj.overallTransferStatus === 'Approved';
  const allTransfersJsonRaw = await csv().fromFile(options.allTransfersCsvPath);
  const allTransfersJsonAll = map(allTransfersJsonRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  const allTransfersJsonFiltered = filter(allTransfersJsonAll, (obj: any) => transferFilter(obj));
  const allTransfersJson = groupBy(allTransfersJsonFiltered, 'footyWebNumber');

  const getYear = (gender: IRawPlayerGenderEnum) => (gender === 'Male' ? yearMale : gender === 'Female' ? yearFemale : Math.max(yearMale, yearFemale));
  const memberFilter = (obj: any) => parseInt(obj.dateOfBirth.slice(-4)) >= getYear(obj.gender) && !includes(noContact, obj.footyWebNumber);
  const memberMap = (obj: any) => sanitisePlayer(obj, productMap, clubMap, allTransactionsJson[obj.footyWebNumber], allTransfersJson[obj.footyWebNumber]);
  const allMembersJsonRaw = await csv().fromFile(options.allMembersCsvPath);
  const allMembersJsonAll = map(allMembersJsonRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  const allMembersJsonFiltered = filter(allMembersJsonAll, (obj: any) => memberFilter(obj));
  const allMembersJson = map(allMembersJsonFiltered, (obj: any) => memberMap(obj)) as IRawPlayer[];

  return { config: { ...config, teams, committee }, members: allMembersJson };
};

import type { PersonGenderEnum } from '@this/constants/enums';
import csv from 'csvtojson';
import fs from 'fs';
import camelCase from 'lodash/camelCase';
import filter from 'lodash/filter';
import fromPairs from 'lodash/fromPairs';
import groupBy from 'lodash/groupBy';
import includes from 'lodash/includes';
import map from 'lodash/map';
import mapKeys from 'lodash/mapKeys';
import YAML from 'yaml';
import type { IRawPlayer } from '../rawPlayer';
import { sanitiseCommittee } from './committee/sanitiseCommittee';
import { sanitiseConfig } from './config/sanitiseConfig';
import { sanitisePlayer } from './player/sanitisePlayer';
import { sanitiseProducts } from './product/sanitiseProducts';
import { sanitiseTeam } from './team/sanitiseTeam';
import { getPlayerOldestBirthYear } from './utility/getPlayerOldestBirthYear';

export interface Options {
  configPath: string;
  committeePath: string;
  productsPath: string;
  teamsPath: string;
  allMembersCsvPath: string;
  allTransactionsCsvPath: string;
  allTransfersCsvPath: string;
}

export const extract = async (options: Options) => {
  const config = sanitiseConfig(YAML.parse(fs.readFileSync(options.configPath, 'utf-8')));

  const teamsRaw = YAML.parse(fs.readFileSync(options.teamsPath, 'utf-8'));
  const teams = map(teamsRaw.teams, (team) => sanitiseTeam(team));

  const committeeRaw = YAML.parse(fs.readFileSync(options.committeePath, 'utf-8'));
  const committee = map(committeeRaw.committee, (member) => sanitiseCommittee(member));

  const productsRaw = YAML.parse(fs.readFileSync(options.productsPath, 'utf-8'));
  const products = sanitiseProducts(productsRaw);

  const productMap = fromPairs(map(products.productMap, ({ from, to }) => [from, to]));
  const clubMap = fromPairs(map(config.clubMap, ({ from, to }) => [from, to]));

  const yearMale = getPlayerOldestBirthYear(teams, config.seasonYear, 'Male');
  const yearFemale = getPlayerOldestBirthYear(teams, config.seasonYear, 'Female');
  const noContact = map(config.noContact, ({ footyWebNumber }) => footyWebNumber);

  const transactionFilter = (obj: any) => obj.transactionDate !== '' && obj.product !== '' && obj.lineItemTotal !== '';
  const allTransactionsRaw = await csv().fromFile(options.allTransactionsCsvPath);
  const allTransactionsAll = map(allTransactionsRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  const allTransactionsFiltered = filter(allTransactionsAll, (obj: any) => transactionFilter(obj));
  const transactions = groupBy(allTransactionsFiltered, 'footyWebNumber');

  const transferFilter = (obj: any) => obj.overallTransferStatus === 'Approved';
  const allTransfersRaw = await csv().fromFile(options.allTransfersCsvPath);
  const allTransfersAll = map(allTransfersRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  const allTransfersFiltered = filter(allTransfersAll, (obj: any) => transferFilter(obj));
  const transfers = groupBy(allTransfersFiltered, 'footyWebNumber');

  const getYear = (gender: PersonGenderEnum) => (gender === 'Male' ? yearMale : gender === 'Female' ? yearFemale : Math.max(yearMale, yearFemale));
  const memberFilter = (obj: any) => parseInt(obj.dateOfBirth.slice(-4)) >= getYear(obj.gender) && !includes(noContact, obj.footyWebNumber);
  const memberMap = (obj: any) => sanitisePlayer(obj, productMap, clubMap, transactions[obj.footyWebNumber], transfers[obj.footyWebNumber]);
  const allPlayersRaw = await csv().fromFile(options.allMembersCsvPath);
  const allPlayers = map(allPlayersRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  const allPlayersFiltered = filter(allPlayers, (obj: any) => memberFilter(obj));
  const players = map(allPlayersFiltered, (obj: any) => memberMap(obj)) as IRawPlayer[];

  return { config, teams, committee, products, players };
};

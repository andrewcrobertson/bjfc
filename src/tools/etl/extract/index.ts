import fs from 'fs';
import filter from 'lodash/filter';
import fromPairs from 'lodash/fromPairs';
import groupBy from 'lodash/groupBy';
import includes from 'lodash/includes';
import map from 'lodash/map';
import YAML from 'yaml';
import type { IRawPlayer } from '../types/rawPlayer';
import { sanitiseCommittee } from './committee/sanitiseCommittee';
import { sanitiseConfig } from './config/sanitiseConfig';
import { sanitisePlayer } from './player/sanitisePlayer';
import { sanitiseProducts } from './product/sanitiseProducts';
import { sanitiseTeam } from './team/sanitiseTeam';
import { getPlayerOldestBirthYear } from './utility/getPlayerOldestBirthYear';
import { loadFromCsv } from './utility/loadFromCsv';

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
  const teams = map(teamsRaw, (team) => sanitiseTeam(team));

  const committeeRaw = YAML.parse(fs.readFileSync(options.committeePath, 'utf-8'));
  const committee = map(committeeRaw, (member) => sanitiseCommittee(member));

  const productsRaw = YAML.parse(fs.readFileSync(options.productsPath, 'utf-8'));
  const products = sanitiseProducts(productsRaw);

  const productMap = fromPairs(map(products.productMap, ({ from, to }) => [from, to]));
  const clubMap = fromPairs(map(config.clubMap, ({ from, to }) => [from, to]));

  const yearMap = {
    ['Male']: getPlayerOldestBirthYear(teams, config.seasonYear, 'Male'),
    ['Female']: getPlayerOldestBirthYear(teams, config.seasonYear, 'Female'),
    ['Unknown']: getPlayerOldestBirthYear(teams, config.seasonYear, 'Unknown'),
  };

  const noContact = map(config.noContact, ({ footyWebNumber }) => footyWebNumber);

  const transactionFilter = (obj: any) => obj.transactionDate !== '' && obj.product !== '' && obj.lineItemTotal !== '';
  const allTransactionsRaw = await loadFromCsv(options.allTransactionsCsvPath);
  const allTransactionsFiltered = filter(allTransactionsRaw, (obj: any) => transactionFilter(obj));
  const transactions = groupBy(allTransactionsFiltered, 'footyWebNumber');

  const transferFilter = (obj: any) => obj.overallTransferStatus === 'Approved';
  const allTransfersRaw = await loadFromCsv(options.allTransfersCsvPath);
  const allTransfersFiltered = filter(allTransfersRaw, (obj: any) => transferFilter(obj));
  const transfers = groupBy(allTransfersFiltered, 'footyWebNumber');

  const playerFilter = (obj: any) => parseInt(obj.dateOfBirth.slice(-4)) >= yearMap[obj.gender] && !includes(noContact, obj.footyWebNumber);
  const playerMap = (obj: any) => sanitisePlayer(obj, productMap, clubMap, transactions[obj.footyWebNumber], transfers[obj.footyWebNumber]);
  const allPlayersRaw = await loadFromCsv(options.allMembersCsvPath);
  const allPlayersFiltered = filter(allPlayersRaw, (obj: any) => playerFilter(obj));
  const players = map(allPlayersFiltered, (obj: any) => playerMap(obj)) as IRawPlayer[];

  return { config, teams, committee, products, players };
};

import fs from 'fs';
import map from 'lodash/map';
import YAML from 'yaml';
import type { IRawPlayer } from '../types/rawPlayer';
import { sanitiseCommittee } from './committee/sanitiseCommittee';
import { sanitiseConfig } from './config/sanitiseConfig';
import { sanitisePlayer } from './player/sanitisePlayer';
import { sanitiseProducts } from './product/sanitiseProducts';
import { sanitiseTeam } from './team/sanitiseTeam';
import { sanitiseTransaction } from './transaction/sanitiseTransaction';
import { sanitiseTransfer } from './transfer/sanitiseTransfer';
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
  const playersRaw = await loadFromCsv(options.allMembersCsvPath);
  const players = map(playersRaw, (obj: any) => sanitisePlayer(obj)) as IRawPlayer[];
  const transactionsRaw = await loadFromCsv(options.allTransactionsCsvPath);
  const transactions = map(transactionsRaw, (member) => sanitiseTransaction(member));
  const transfersRaw = await loadFromCsv(options.allTransfersCsvPath);
  const transfers = map(transfersRaw, (member) => sanitiseTransfer(member));
  return { config, teams, committee, products, players, transactions, transfers };
};

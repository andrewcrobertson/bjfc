import { fromPairs } from 'lodash';
import map from 'lodash/map';
import zip from 'lodash/zip';
import type { IRawCommittee } from '../types/rawCommittee';
import type { IRawConfig } from '../types/rawConfig';
import type { IRawPlayer } from '../types/rawPlayer';
import type { IRawProduct } from '../types/rawProduct';
import type { IRawTeam } from '../types/rawTeam';
import type { IRawTransaction } from '../types/rawTransaction';
import type { IRawTransfer } from '../types/rawTransfer';
import { toCommittee } from './commmittee/toCommittee';
import { toGroupedPlayerInfo } from './playerInfo/toGroupedPlayerInfo';
import { toPlayers } from './players/toPlayers';
import { toProductName } from './product/toProductName';
import { toProducts } from './product/toProducts';
import { toTeams } from './teams/toTeams';
import { toTransactions } from './transactions/toTransactions';
import { toTransfers } from './transfers/toTransfers';

export interface Options {
  config: IRawConfig;
  committee: IRawCommittee[];
  products: IRawProduct[];
  teams: IRawTeam[];
  players: IRawPlayer[];
  transactions: IRawTransaction[];
  transfers: IRawTransfer[];
}

export const transform = (options: Options) => {
  const seasonYear = options.config.seasonYear;
  const clubMap = fromPairs(map(options.config.clubMap, ({ from, to }) => [from, to]));
  const fromProductNames = map(options.products, ({ name }) => name);
  const toProductNames = map(options.products, toProductName);
  const productMap = fromPairs(zip(fromProductNames, toProductNames));
  const groupedPlayerInfo = toGroupedPlayerInfo(options);

  const config = { seasonYear };
  const committee = toCommittee(options.committee);
  const products = toProducts(options.products);
  const teams = toTeams(options.teams, seasonYear);
  const players = toPlayers(options.config, options.players, teams, groupedPlayerInfo);
  const transactions = toTransactions(options.transactions, productMap);
  const transfers = toTransfers(options.transfers, clubMap);

  return { config, committee, products, teams, players, transactions, transfers };
};

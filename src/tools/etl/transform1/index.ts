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
import { transformCommittee } from './commmittee/transformCommittee';
import { transformPlayers } from './players/transformPlayers';
import { transformProducts } from './product/transformProducts';
import { transformTeams } from './teams/transformTeams';
import { transformTransactions } from './transactions/transformTransactions';
import { transformTransfers } from './transfers/transformTransfers';

export interface Options {
  config: IRawConfig;
  committee: IRawCommittee[];
  products: IRawProduct[];
  teams: IRawTeam[];
  players: IRawPlayer[];
  transactions: IRawTransaction[];
  transfers: IRawTransfer[];
}

export const transform1 = (options: Options) => {
  const config = { seasonYear: options.config.seasonYear };
  const products = transformProducts(options);

  const clubMap = fromPairs(map(options.config.clubMap, ({ from, to }) => [from, to]));
  const fromProducts = map(options.products, ({ name }) => name);
  const toProducts = map(products, ({ name }) => name);
  const productMap = fromPairs(zip(fromProducts, toProducts));
  const transactions = transformTransactions(options, productMap);
  const transfers = transformTransfers(options, clubMap);

  const committee = transformCommittee(options);
  const teams = transformTeams(options);
  const players = transformPlayers(options);
  return { config, committee, products, teams, players, transactions, transfers };
};

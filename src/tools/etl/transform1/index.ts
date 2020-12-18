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
  const committee = transformCommittee(options);
  const teams = transformTeams(options);
  const players = transformPlayers(options);
  return { config, committee, products, teams, players };
};

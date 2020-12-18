import type { IRawCommittee } from '../types/rawCommittee';
import type { IRawConfig } from '../types/rawConfig';
import type { IRawPlayer } from '../types/rawPlayer';
import type { IRawProduct } from '../types/rawProduct';
import type { IRawTeam } from '../types/rawTeam';
import type { IRawTransaction } from '../types/rawTransaction';
import type { IRawTransfer } from '../types/rawTransfer';
import { transformCommittee } from './commmittee/transformCommittee';
import { transformPlayers } from './members/transformPlayers';
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
  return {
    config: { seasonYear: options.config.seasonYear },
    committee: transformCommittee(options),
    teams: transformTeams(options),
    players: transformPlayers(options),
  };
};

import type { ISanitisedMember } from '../../sanitisedMember';
import type { IRawCommittee } from '../../types/rawCommittee';
import type { IRawConfig } from '../../types/rawConfig';
import type { IRawPlayer } from '../../types/rawPlayer';
import type { IRawProduct } from '../../types/rawProduct';
import type { IRawTeam } from '../../types/rawTeam';
import type { IRawTransaction } from '../../types/rawTransaction';
import type { IRawTransfer } from '../../types/rawTransfer';

export interface Options {
  config: IRawConfig;
  committee: IRawCommittee[];
  products: IRawProduct[];
  teams: IRawTeam[];
  players: IRawPlayer[];
  transactions: IRawTransaction[];
  transfers: IRawTransfer[];
}

export const transformPlayers = (options: Options): ISanitisedMember[] => {
  return [];
};

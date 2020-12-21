import type { ISanitisedCommittee } from '../../../types/sanitisedCommittee';
import type { ISanitisedConfig } from '../../../types/sanitisedConfig';
import type { ISanitisedPlayer } from '../../../types/sanitisedPlayer';
import type { ISanitisedTeam } from '../../../types/sanitisedTeam';
import type { ISanitisedTransaction } from '../../../types/sanitisedTransaction';
import { write } from './write';

export interface Options2 {
  config: ISanitisedConfig;
  players: ISanitisedPlayer[];
  teams: ISanitisedTeam[];
  transactions: ISanitisedTransaction[];
  committee: ISanitisedCommittee[];
}

export const load = (options: Options2) => {
  write('committee', options.committee);
  write('config', options.config);
  write('players', options.players);
  write('teams', options.teams);
  write('transactions', options.transactions);
};

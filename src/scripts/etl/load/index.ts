import type { ISanitisedCommittee } from '@this/types/sanitisedCommittee';
import type { ISanitisedConfig } from '@this/types/sanitisedConfig';
import type { ISanitisedPlayer } from '@this/types/sanitisedPlayer';
import type { ISanitisedTeam } from '@this/types/sanitisedTeam';
import type { ISanitisedTransaction } from '@this/types/sanitisedTransaction';
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

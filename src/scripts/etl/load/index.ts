import type { ICommitteeMember } from '@this/types/committee';
import type { IConfig } from '@this/types/config';
import type { IPlayer } from '@this/types/player';
import type { ITeam } from '@this/types/team';
import type { ITransaction } from '@this/types/transaction';
import { write } from './write';

export interface Options {
  config: IConfig;
  players: IPlayer[];
  teams: ITeam[];
  transactions: ITransaction[];
  committee: ICommitteeMember[];
}

export const load = (options: Options) => {
  write('committee', "import type { ICommitteeMember } from '@this/types/committee';", 'ICommitteeMember[]', options.committee);
  write('config', "import type { IConfig } from '@this/types/config';", 'IConfig', options.config);
  write('players', "import type { IPlayer } from '@this/types/player';", 'IPlayer[]', options.players);
  write('teams', "import type { ITeam } from '@this/types/team';", 'ITeam[]', options.teams);
  write('transactions', "import type { ITransaction } from '@this/types/transaction';", 'ITransaction[]', options.transactions);
};

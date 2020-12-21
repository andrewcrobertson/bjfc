import fs from 'fs';
import path from 'path';
import type { ISanitisedCommittee } from '../types/sanitisedCommittee';
import type { ISanitisedConfig } from '../types/sanitisedConfig';
import type { ISanitisedPlayer } from '../types/sanitisedPlayer';
import type { ISanitisedTeam } from '../types/sanitisedTeam';
import type { ISanitisedTransaction } from '../types/sanitisedTransaction';
import { writeLayout } from './writeLayout';

export interface Options2 {
  config: ISanitisedConfig;
  players: ISanitisedPlayer[];
  teams: ISanitisedTeam[];
  transactions: ISanitisedTransaction[];
  committee: ISanitisedCommittee[];
}

export interface Options {
  standardLayout: any;
  committeeList: any;
  anchorList: any;
  playerDetail: any;
  teamDashboard: any;
  teamPlayerListArchived: any;
  teamPlayerListCurrent: any;
  teamOfficialList: any;
}

export const write = (name: string, data: any) => {
  const file = `${name}.ts`;
  const srcPath = path.resolve(__dirname, '..', '..', '..', 'data');
  fs.writeFileSync(path.resolve(srcPath, file), 'export default ' + JSON.stringify(data, null, 2));
  fs.writeFileSync(path.resolve(srcPath, '.gitignore'), file);
};

export const load2 = (options: Options2) => {
  write('committee', options.committee);
  write('config', options.config);
  write('players', options.players);
  write('teams', options.teams);
  write('transactions', options.transactions);
};

export const load = (options: Options) => {
  writeLayout('StandardLayout', options.standardLayout);
  // writePage('AnchorList', options.anchorList);
  // writePage('CommitteeList', options.committeeList);
  // writePage('PlayerDetail', options.playerDetail);
  // writePage('TeamDashboard', options.teamDashboard);
  // writePage('TeamPlayerListArchived', options.teamPlayerListArchived);
  // writePage('TeamPlayerListCurrent', options.teamPlayerListCurrent);
  // writePage('TeamOfficialList', options.teamOfficialList);
};

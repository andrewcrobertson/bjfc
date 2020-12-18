import { writeLayout } from './writeLayout';
import { writePage } from './writePage';

export interface Options {
  standardLayout: any;
  committeeList: any;
  playerDetail: any;
  teamDashboard: any;
  teamPlayerListArchived: any;
  teamPlayerListCurrent: any;
  teamOfficialList: any;
}

export const load = (options: Options) => {
  writeLayout('StandardLayout', options.standardLayout);
  writePage('CommitteeList', options.committeeList);
  writePage('PlayerDetail', options.playerDetail);
  writePage('TeamDashboard', options.teamDashboard);
  writePage('TeamPlayerListArchived', options.teamPlayerListArchived);
  writePage('TeamPlayerListCurrent', options.teamPlayerListCurrent);
  writePage('TeamOfficialList', options.teamOfficialList);
};

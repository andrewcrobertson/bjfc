import type { IConfig } from '../config';
import type { IMember } from '../member';
import { memberDetail } from './memberDetail';
import { teamDetail } from './teamDetail';
import { teamList } from './teamList';

export interface Options {
  config: IConfig;
  members: IMember[];
}

export const transform = ({ config, members }: Options) => ({
  teamList: teamList({ config }),
  teamDetail: teamDetail({ config, members }),
  memberDetail: memberDetail({ config, members }),
});

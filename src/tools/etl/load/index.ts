import fs from 'fs';
import path from 'path';

export interface Options {
  standardLayout: any;
  committeeList: any;
  memberDetail: any;
  teamList: any;
  teamPlayerArchivedList: any;
  teamPlayerCurrentList: any;
  teamOfficialList: any;
}

const file = 'data.ts';
const srcPath = path.resolve(__dirname, '..', '..', '..');

const write = (name: string, typePath: any, data: any) => {
  fs.writeFileSync(path.resolve(srcPath, typePath, name, file), 'export default ' + JSON.stringify(data, null, 2));
  fs.writeFileSync(path.resolve(srcPath, typePath, name, '.gitignore'), file);
};

const writePage = (name: string, data: any) => write(name, 'pages', data);
const writeLayout = (name: string, data: any) => write(name, 'layouts', data);

export const load = (options: Options) => {
  writeLayout('StandardLayout', options.standardLayout);
  writePage('CommitteeList', options.committeeList);
  writePage('MemberDetail', options.memberDetail);
  writePage('TeamList', options.teamList);
  writePage('TeamPlayerArchivedList', options.teamPlayerArchivedList);
  writePage('TeamPlayerCurrentList', options.teamPlayerCurrentList);
  writePage('TeamOfficialList', options.teamOfficialList);
};

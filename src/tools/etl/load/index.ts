import fs from 'fs';
import path from 'path';

export interface Options {
  teamList: any;
  teamDetail: any;
  memberDetail: any;
}

const srcPath = path.resolve(__dirname, '..', '..', '..');
const writePage = (name: string, data: any) =>
  fs.writeFileSync(path.resolve(srcPath, 'pages', name, 'data.ts'), 'export default ' + JSON.stringify(data, null, 2));

export const load = (options: Options) => {
  writePage('TeamList', options.teamList);
  writePage('TeamDetail', options.teamDetail);
  writePage('MemberDetail', options.memberDetail);
};

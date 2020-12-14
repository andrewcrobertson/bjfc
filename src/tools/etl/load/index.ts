import fs from 'fs';
import path from 'path';

export interface Options {
  standardLayout: any;
  teamList: any;
  teamDetail: any;
  memberDetail: any;
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
  writePage('TeamList', options.teamList);
  writePage('TeamDetail', options.teamDetail);
  writePage('MemberDetail', options.memberDetail);
};

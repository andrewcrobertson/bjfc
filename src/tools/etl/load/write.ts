import fs from 'fs';
import path from 'path';

const file = 'data.ts';
const srcPath = path.resolve(__dirname, '..', '..', '..');

export const write = (name: string, typePath: any, data: any) => {
  fs.writeFileSync(path.resolve(srcPath, typePath, name, file), 'export default ' + JSON.stringify(data, null, 2));
  fs.writeFileSync(path.resolve(srcPath, typePath, name, '.gitignore'), file);
};

import fs from 'fs';
import path from 'path';

export const write = (name: string, data: any) => {
  const file = `${name}.ts`;
  const srcPath = path.resolve(__dirname, '..', '..', '..', 'data');
  fs.writeFileSync(path.resolve(srcPath, file), 'export default ' + JSON.stringify(data, null, 2));
};

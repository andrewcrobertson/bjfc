import fs from 'fs';
import path from 'path';

export const write = (name: string, statment: string, type: string, data: any) => {
  const file = `${name}.ts`;
  const srcPath = path.resolve(__dirname, '..', '..', '..', 'data');

  const text = `${statment}\n\nconst data: ${type} = ${JSON.stringify(data, null, 2)}\n\nexport default data;`;
  fs.writeFileSync(path.resolve(srcPath, file), text);
};

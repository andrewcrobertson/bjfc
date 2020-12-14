import path from 'path';
import { extract } from './extract';
import { load } from './load';
import { transform1 } from './transform1';
import { transform2 } from './transform2';

const dataPath = path.resolve(__dirname, '..', '..', '..', 'data.raw');
const allMembersCsvPath = path.resolve(dataPath, 'all-members.csv');
const allTransactionsCsvPath = path.resolve(dataPath, 'all-transactions.csv');
const allTransfersCsvPath = path.resolve(dataPath, 'all-transfers.csv');
const configPath = path.resolve(dataPath, 'config.json');

export const etl = async () => {
  const options = { configPath, allMembersCsvPath, allTransactionsCsvPath, allTransfersCsvPath };
  const raw = await extract(options);
  const data1 = transform1(raw);
  require('fs').writeFileSync('data.json', JSON.stringify(data1, null, 2));
  const data2 = transform2(data1);
  load(data2);
};

import path from 'path';
import { extract } from './extract';
import { load } from './load';
import { transform } from './transform';

const dataPath = path.resolve(__dirname, '..', '..', '..', 'data.raw');
const allMembersCsvPath = path.resolve(dataPath, 'all-members.csv');
const allTransactionsCsvPath = path.resolve(dataPath, 'all-transactions.csv');
const allTransfersCsvPath = path.resolve(dataPath, 'all-transfers.csv');
const configPath = path.resolve(dataPath, 'config.json');

export const etl = async () => {
  const options = { configPath, allMembersCsvPath, allTransactionsCsvPath, allTransfersCsvPath };
  const raw = await extract(options);
  const data = transform(raw);
  load(data);
};

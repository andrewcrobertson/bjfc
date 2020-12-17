import path from 'path';
import { extract } from './extract';
import { load } from './load';
import { recentlyRegisteredEmail } from './misc/recentlyRegisteredEmail';
import { transform1 } from './transform1';
import { transform2 } from './transform2';

const dataPath = path.resolve(__dirname, '..', '..', '..', 'data.raw');
const allMembersCsvPath = path.resolve(dataPath, 'all-members.csv');
const allTransactionsCsvPath = path.resolve(dataPath, 'all-transactions.csv');
const allTransfersCsvPath = path.resolve(dataPath, 'all-transfers.csv');
const configPath = path.resolve(dataPath, 'config.yaml');
const committeePath = path.resolve(dataPath, 'committee.yaml');
const teamsPath = path.resolve(dataPath, 'teams.yaml');
const productsPath = path.resolve(dataPath, 'products.yaml');

export const etl = async () => {
  const options = { configPath, allMembersCsvPath, allTransactionsCsvPath, allTransfersCsvPath, committeePath, teamsPath, productsPath };
  const raw = await extract(options);
  const data1 = transform1(raw);
  const data2 = transform2(data1);
  load(data2);

  if (false) recentlyRegisteredEmail(data1.members);
  // const tempData = uniq(flattenDeep(map(data1.members, (m) => map(m.transfers, (t) => [t.sourceClub, t.destinationClub])))).sort();
  const tempData = raw;
  require('fs').writeFileSync('data.json', JSON.stringify(tempData, null, 2));
};

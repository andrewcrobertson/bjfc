const fs = require('fs');
const path = require('path');
const { transform } = require('./src/transform');

const year = 2003;
const dataPath = path.resolve(__dirname, 'data');
const allMembersCsvPath = path.resolve(dataPath, 'all-members.csv');
const allTransactionsCsvPath = path.resolve(dataPath, 'all-transactions.csv');
const allTransfersCsvPath = path.resolve(dataPath, 'all-transfers.csv');

const run = async () => {
  const allMembersJson = await transform({ year, allMembersCsvPath, allTransactionsCsvPath, allTransfersCsvPath });
  fs.writeFileSync('allMembers.json', JSON.stringify(allMembersJson, null, 2));
};

run();

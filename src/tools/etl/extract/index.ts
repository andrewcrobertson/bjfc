import fs from 'fs';
import map from 'lodash/map';
import YAML from 'yaml';
import { sanitiseCommittee } from './committee/sanitiseCommittee';
import { sanitiseConfig } from './config/sanitiseConfig';
import { sanitisePlayer } from './player/sanitisePlayer';
import { sanitiseProducts } from './product/sanitiseProducts';
import { sanitiseTeam } from './team/sanitiseTeam';
import { sanitiseTransaction } from './transaction/sanitiseTransaction';
import { sanitiseTransfer } from './transfer/sanitiseTransfer';
import { loadFromCsv } from './utility/loadFromCsv';

export interface Options {
  configPath: string;
  committeePath: string;
  productsPath: string;
  teamsPath: string;
  allMembersCsvPath: string;
  allTransactionsCsvPath: string;
  allTransfersCsvPath: string;
}

const extractYaml = <T>(file: string, mapFn: (x: any) => T) => map(YAML.parse(fs.readFileSync(file, 'utf-8')), mapFn);
const extractCsv = async <T>(file: string, mapFn: (x: any) => T) => map(await loadFromCsv(file), mapFn);

export const extract = async (options: Options) => {
  const config = sanitiseConfig(YAML.parse(fs.readFileSync(options.configPath, 'utf-8')));
  const teams = extractYaml(options.teamsPath, sanitiseTeam);
  const committee = extractYaml(options.committeePath, sanitiseCommittee);
  const products = extractYaml(options.productsPath, sanitiseProducts);
  const players = await extractCsv(options.allMembersCsvPath, sanitisePlayer);
  const transactions = await extractCsv(options.allTransactionsCsvPath, sanitiseTransaction);
  const transfers = await extractCsv(options.allTransfersCsvPath, sanitiseTransfer);
  return { config, teams, committee, products, players, transactions, transfers };
};

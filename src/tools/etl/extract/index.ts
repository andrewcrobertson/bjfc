import fs from 'fs';
import compact from 'lodash/compact';
import filter from 'lodash/filter';
import fromPairs from 'lodash/fromPairs';
import map from 'lodash/map';
import YAML from 'yaml';
import { sanitiseCommittee } from './committee/sanitiseCommittee';
import { sanitiseConfig } from './config/sanitiseConfig';
import { sanitisePlayer } from './player/sanitisePlayer';
import { sanitiseProducts } from './product/sanitiseProducts';
import { sanitiseTeam } from './team/sanitiseTeam';
import { sanitiseTransaction } from './transaction/sanitiseTransaction';
import { sanitiseTransfer } from './transfer/sanitiseTransfer';
import { getPlayerOldestBirthYear } from './utility/getPlayerOldestBirthYear';
import { loadFromCsv } from './utility/loadFromCsv';

// Note, `slice`ing last element off csv file, as it comes in as something like `5237 rows ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`
const extractCsv = async <T>(file: string, mapFn: (x: any) => T) => map((await loadFromCsv(file)).slice(0, -1), mapFn);
const extractYaml = <T>(file: string, mapFn: (x: any) => T) => map(YAML.parse(fs.readFileSync(file, 'utf-8')), mapFn);

export interface Options {
  configPath: string;
  committeePath: string;
  productsPath: string;
  teamsPath: string;
  allMembersCsvPath: string;
  allTransactionsCsvPath: string;
  allTransfersCsvPath: string;
}

export const extract = async (options: Options) => {
  const config = sanitiseConfig(YAML.parse(fs.readFileSync(options.configPath, 'utf-8')));
  const teams = extractYaml(options.teamsPath, sanitiseTeam);
  const committee = extractYaml(options.committeePath, sanitiseCommittee);
  const products = extractYaml(options.productsPath, sanitiseProducts);
  const playersRaw = await extractCsv(options.allMembersCsvPath, sanitisePlayer);
  const transactionsRaw = await extractCsv(options.allTransactionsCsvPath, sanitiseTransaction);
  const transfersRaw = await extractCsv(options.allTransfersCsvPath, sanitiseTransfer);

  const maleBirthYear = getPlayerOldestBirthYear(teams, config.seasonYear, 'Male');
  const femaleBirthYear = getPlayerOldestBirthYear(teams, config.seasonYear, 'Female');
  const unkownBirthYear = Math.max(maleBirthYear, femaleBirthYear);
  const yearMap = { ['Male']: maleBirthYear, ['Female']: femaleBirthYear, ['Unknown']: unkownBirthYear };

  const players = filter(compact(playersRaw), ({ dateOfBirth, gender }) => parseInt(dateOfBirth.substring(0, 4)) >= yearMap[gender]);
  const validPlayerMap = fromPairs(map(playersRaw, ({ footyWebNumber }) => [footyWebNumber, true]));
  const transactions = filter(compact(transactionsRaw), ({ footyWebNumber }) => validPlayerMap[footyWebNumber]);
  const transfers = filter(compact(transfersRaw), ({ footyWebNumber }) => validPlayerMap[footyWebNumber]);

  return { config, teams, committee, products, players, transactions, transfers };
};

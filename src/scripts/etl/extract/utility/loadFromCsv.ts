import csv from 'csvtojson';
import camelCase from 'lodash/camelCase';
import map from 'lodash/map';
import mapKeys from 'lodash/mapKeys';

export const loadFromCsv = async (file: string) => {
  const rowsRaw = await csv().fromFile(file);
  const rows = map(rowsRaw, (obj: any) => mapKeys(obj, (_value, key) => camelCase(key)));
  return rows;
};

import trim from 'lodash/trim';
import type { IRawProduct } from '../../types/rawProduct';

export const transformProductName = (obj: IRawProduct) => trim(`${obj.year} ${obj.type} Fees ${obj.notes === null ? '' : '(' + obj.notes + ')'}`);

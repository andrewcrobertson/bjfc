import filter from 'lodash/filter';
import values from 'lodash/values';

export const isObjectEmpty = (obj: any) => filter(values(obj), (v) => v !== null && v !== '').length === 0;

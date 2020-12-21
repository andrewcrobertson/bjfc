import filter from 'lodash/filter';
import values from 'lodash/values';

export const isObjectEmpty = (obj: any) => filter(values(obj), (value) => value !== null && value !== '').length === 0;

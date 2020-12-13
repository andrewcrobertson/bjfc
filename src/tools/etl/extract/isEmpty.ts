import filter from 'lodash/filter';
import values from 'lodash/values';

export const isEmpty = (obj: any) => filter(values(obj), (v) => v !== null).length === 0;

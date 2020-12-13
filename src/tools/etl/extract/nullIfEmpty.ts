import { isEmpty } from './isEmpty';

export const nullIfEmpty = (obj: any) => (isEmpty(obj) ? null : obj);

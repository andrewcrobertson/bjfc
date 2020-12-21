import { isObjectEmpty } from './isObjectEmpty';

export const sanitiseObject = (obj: any) => (isObjectEmpty(obj) ? null : obj);

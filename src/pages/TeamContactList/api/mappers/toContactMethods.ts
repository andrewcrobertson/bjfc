import filter from 'lodash/filter';
import uniqBy from 'lodash/uniqBy';
import type { IContactMethod } from '../../state';

export const toContactMethods = (contactMethods: IContactMethod[], maxContactMethods: number) => {
  const output: IContactMethod[] = uniqBy(
    filter(contactMethods, ({ value }) => value !== null),
    JSON.stringify
  );

  for (let i = output.length; i < maxContactMethods; i++) {
    output.push({ type: null, value: null });
  }

  return output;
};

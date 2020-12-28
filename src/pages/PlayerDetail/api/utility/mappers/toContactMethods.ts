import type { IContactMethod } from '@this/types/common';
import filter from 'lodash/filter';
import uniqBy from 'lodash/uniqBy';

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

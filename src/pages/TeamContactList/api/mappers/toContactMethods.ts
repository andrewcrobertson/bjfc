import filter from 'lodash/filter';
import uniqBy from 'lodash/uniqBy';

export const toContactMethods = (contactMethods: string[]) => {
  const output: string[] = uniqBy(
    filter(contactMethods, (value) => value !== null),
    JSON.stringify
  );

  return output;
};

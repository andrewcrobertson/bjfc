import type { IContactMethod } from '@this/types/common';

export const toContactMethods = (contactMethods: IContactMethod[], maxContactMethods: number) => {
  const output: IContactMethod[] = [];
  for (let i = 0; i < maxContactMethods; i++) {
    output.push(contactMethods[i] ?? { type: null, value: null });
  }

  return output;
};

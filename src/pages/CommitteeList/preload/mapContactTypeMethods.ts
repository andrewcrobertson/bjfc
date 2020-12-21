import type { IContactMethod } from '@this/types/common';
import find from 'lodash/find';

export const mapContactTypeMethods = (contactMethods: IContactMethod[]) => {
  const phone = find(contactMethods, ({ type }) => type === 'Phone') ?? { type: 'Phone', value: null };
  const email = find(contactMethods, ({ type }) => type === 'Email') ?? { type: 'Email', value: null };
  return [phone, email];
};

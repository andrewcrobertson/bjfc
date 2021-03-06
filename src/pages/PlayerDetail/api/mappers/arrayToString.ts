import compact from 'lodash/compact';
import join from 'lodash/join';

export const arrayToString = (roles: string[], separator = '/') => {
  const compacted = compact(roles);
  return compacted.length === 0 ? null : join(compacted, separator);
};

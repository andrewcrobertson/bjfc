import compact from 'lodash/compact';
import flatten from 'lodash/flatten';
import join from 'lodash/join';
import map from 'lodash/map';
import replace from 'lodash/replace';
import toLower from 'lodash/toLower';
import uniq from 'lodash/uniq';
import type { IGuardianDb } from '../dataAccess/getGuardians';
import type { IPlayerDb } from '../dataAccess/getPlayers';

export const toSearchTerms = (player: IPlayerDb, guardians: IGuardianDb[]) => {
  const searchTermsPlayer = [player.firstName, player.lastName];
  const searchTermsGuardians = flatten(map(guardians, ({ firstName, lastName }) => [firstName, lastName]));
  const searchTermsCompact = compact([...searchTermsPlayer, ...searchTermsGuardians]);
  const searchTermsLCase = map(searchTermsCompact, (term) => toLower(replace(term, /\s/g, '')));
  const searchTerms = join(uniq(searchTermsLCase).sort(), ' ');
  return searchTerms;
};

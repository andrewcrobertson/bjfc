import compact from 'lodash/compact';
import each from 'lodash/each';
import filter from 'lodash/filter';
import flattenDeep from 'lodash/flattenDeep';
import fromPairs from 'lodash/fromPairs';
import join from 'lodash/join';
import map from 'lodash/map';
import pick from 'lodash/pick';
import uniq from 'lodash/uniq';
import type { ISanitisedPlayer } from '../types/sanitisedPlayer';

export const recentlyRegisteredEmail = (members: ISanitisedPlayer[]) => {
  const getRecs = (m: ISanitisedPlayer) => {
    let g1 = pick(m.guardians[0] ?? {}, 'firstName', 'lastName', 'email') as any;
    let g2 = pick(m.guardians[1] ?? {}, 'firstName', 'lastName', 'email') as any;
    let g3 = { email: m.registeredContact?.email1 } as any;
    let g4 = { email: m.registeredContact?.email2 } as any;
    const emailMap = fromPairs(map(compact(map([g1, g2, g3, g4], (g) => g.email)), (e) => [e, false]));

    const m1 = `${m.lastName} (${m.firstName})`;
    const recs = [];
    each([g1, g2, g3, g4], (g) => {
      if ((g.email ?? '') !== '' && emailMap[g.email] === false) {
        emailMap[g.email] = true;
        const email = g.email;
        if (g.firstName !== undefined && g.lastName !== undefined) {
          recs.push({ name: `${m1} - ${g.lastName} (${g.firstName})`, email });
        } else {
          recs.push({ name: m1, email });
        }
      }
    });

    return recs;
  };

  const tempData0 = filter(members, (m) => m.status === 'Registered' || m.status === 'Recent');
  const tempData1 = flattenDeep(map(tempData0, getRecs));
  const tempData2 = uniq(map(tempData1, ({ name, email }) => `${email}`)).sort();
  const tempData3 = join(tempData2, ';\r\n') + ';';
  require('fs').writeFileSync('email.txt', tempData3);
};

import compact from 'lodash/compact';
import each from 'lodash/each';
import filter from 'lodash/filter';
import flattenDeep from 'lodash/flattenDeep';
import fromPairs from 'lodash/fromPairs';
import isString from 'lodash/isString';
import join from 'lodash/join';
import map from 'lodash/map';
import uniq from 'lodash/uniq';
import type { IPersonName, ISanitisedPlayer, ISanitisedPlayerContact } from '../types/sanitisedPlayer';

export const recentlyRegisteredEmail = (members: ISanitisedPlayer[]) => {
  const getName = (name: string | IPersonName) => {
    if (name === null) {
      return null;
    }

    if (isString(name)) {
      return name;
    }

    return join(compact([(name as IPersonName).last, (name as IPersonName).first]), ' ');
  };

  const getEmailContacts = (c: ISanitisedPlayerContact[]) =>
    map(c, (c) => ({
      name: getName(c.name),
      email: map(
        filter(c.contactMethods, (cm) => cm.type === 'Email'),
        (e) => e.value
      ),
    }));

  const getRecs = (m: ISanitisedPlayer) => {
    const emailContacts = getEmailContacts(m.contacts);
    const emailMap = fromPairs(map(flattenDeep(map(emailContacts, ({ email }) => email)), (email) => [email, false]));

    const m1 = `${m.lastName} (${m.firstName})`;
    const recs = [];
    each(emailContacts, (emailContact) => {
      each(emailContact.email, (email) => {
        if ((email ?? '') !== '' && emailMap[email] === false) {
          emailMap[email] = true;
          if ((emailContact.name ?? null) !== null) {
            recs.push({ name: `${m1} - ${emailContact.name})`, email });
          } else {
            recs.push({ name: m1, email });
          }
        }
      });
    });

    return recs;
  };

  const tempData0 = filter(members, (m) => m.status === 'Recent');
  const tempData1 = flattenDeep(map(tempData0, getRecs));
  require('fs').writeFileSync('email1.txt', JSON.stringify(tempData1, null, 2));
  const tempData2 = uniq(map(tempData1, ({ name, email }) => `${email}`)).sort();
  const tempData3 = join(tempData2, ';\r\n') + ';';
  require('fs').writeFileSync('email.txt', tempData3);
};

import compact from 'lodash/compact';
import filter from 'lodash/filter';
import fromPairs from 'lodash/fromPairs';
import keyBy from 'lodash/keyBy';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import pick from 'lodash/pick';
import type { ISanitisedConfig } from '../types/sanitisedConfig';
import type { ISanitisedPlayer, ISanitisedPlayerTransaction } from '../types/sanitisedPlayer';
import type { ISanitisedTeam } from '../types/sanitisedTeam';
import type { ISanitisedTransaction } from '../types/sanitisedTransaction';

export interface Options {
  config: ISanitisedConfig;
  players: ISanitisedPlayer[];
  teams: ISanitisedTeam[];
  transactions: ISanitisedTransaction[];
}

const fields = [
  'footyWebNumber',
  'initials',
  'lastName',
  'firstName',
  'dateOfBirth',
  'club',
  'gender',
  'disability',
  'disabilityNotes',
  'transactions',
  'transfers',
];

const teamFields = ['code', 'ageGroupCode', 'name', 'teamGender'];

const transformContactMethods = (contactMethods: any[]) => {
  const phone = [];
  const email = [];
  const other = [];
  const used = {};
  for (let i = 0; i < contactMethods.length; i++) {
    const contactMethod = contactMethods[i];
    if (used[contactMethod.value]) {
      other.push({ type: null, value: null });
    } else if (contactMethod.type === null || contactMethod.value === null) {
      other.push({ type: null, value: null });
    } else if (contactMethod.type === 'Phone') {
      phone.push(contactMethod);
    } else if (contactMethod.type === 'Email') {
      email.push(contactMethod);
    } else {
      other.push({ type: null, value: null });
    }

    used[contactMethod.value] = true;
  }

  return [...phone, ...email, ...other];
};

const transformGuardian = (contact: any) => ({
  type: 'Guardian',
  relationship: 'Parent/Guardian',
  initials: contact.initials,
  name: `${contact.firstName} ${contact.lastName}`,
  assistInRole: contact.assistInRole,
  contactMethods: transformContactMethods([
    { type: 'Phone', value: contact.phone1 },
    { type: 'Phone', value: contact.phone2 },
    { type: 'Phone', value: contact.mobile },
    { type: 'Email', value: contact.email },
  ]),
});

const transformEmergency = (contact: any) => ({
  type: 'Emergency',
  relationship: `Emergency${contact.relationship === null ? '' : ': ' + contact.relationship}`,
  initials: contact.initials,
  name: contact.name,
  assistInRole: null,
  contactMethods: transformContactMethods([
    { type: 'Phone', value: contact.phone1 },
    { type: 'Phone', value: contact.phone2 },
    { type: null, value: null },
    { type: null, value: null },
  ]),
});

const transformRegistered = (contact: any) => ({
  type: 'Registered',
  relationship: `SportsTG Registered Contact`,
  initials: 'SRC',
  name: 'SportsTG Registered Contact',
  assistInRole: contact.assistInRole,
  contactMethods: transformContactMethods([
    { type: 'Phone', value: contact.phone1 },
    { type: 'Phone', value: contact.phone2 },
    { type: 'Email', value: contact.email1 },
    { type: 'Email', value: contact.email2 },
  ]),
});

const transformTransactions = (transactions: ISanitisedPlayerTransaction[], seasonYear: number) =>
  filter(
    map(transactions, (transaction) => ({
      year: parseInt(transaction.product.substring(0, 4)),
      transactionDate: transaction.transactionDate,
      product: transaction.product,
      lineItemTotal: transaction.lineItemTotal,
      transactionStatus: transaction.transactionStatus,
    })),
    ({ year }) => year >= seasonYear - 1
  );

export const playerDetail = (options: Options) => {
  const teamMap = fromPairs(map(options.teams, (team) => [team.code, pick(team, teamFields)]));
  const members = map(options.players, (sanitisedPlayer) => {
    const player = pick(sanitisedPlayer, ...fields) as any;
    player.contacts = compact([
      ...map(sanitisedPlayer.guardians, (guardian) => transformGuardian(guardian)),
      sanitisedPlayer.emergencyContact === null ? null : transformEmergency(sanitisedPlayer.emergencyContact),
      sanitisedPlayer.contact === null ? null : transformRegistered(sanitisedPlayer.contact),
    ]);
    player.transactions = filter(options.transactions, (t) => t.footyWebNumber === sanitisedPlayer.footyWebNumber);
    player.transactions = orderBy(player.transactions, ['transactionDate', 'transactionTime'], ['desc', 'desc']);
    player.transfers = orderBy(sanitisedPlayer.clubHistory, ['date'], ['desc']);
    player.team = teamMap[sanitisedPlayer.teamCode] ?? null;
    return player;
  });

  return keyBy(members, 'footyWebNumber');
};

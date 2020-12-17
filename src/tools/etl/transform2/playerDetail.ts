import { compact, filter, last } from 'lodash';
import fromPairs from 'lodash/fromPairs';
import keyBy from 'lodash/keyBy';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import pick from 'lodash/pick';
import type { ISanitisedConfig } from '../sanitisedConfig';
import type { ISanitisedMember, ISanitisedMemberTransaction, ISanitisedMemberTransfer } from '../sanitisedMember';
import type { ISanitisedTeam } from '../sanitisedTeam';

export interface Options {
  config: ISanitisedConfig;
  members: ISanitisedMember[];
  teams: ISanitisedTeam[];
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
  relationship: 'Guardian',
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

const transformTransactions = (transactions: ISanitisedMemberTransaction[], seasonYear: number) =>
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

const transformTransfers = (transactions: ISanitisedMemberTransfer[], firstTransactionDate: string) => {
  const transactionsA = map(transactions, ({ destinationClub, finalisedDate, applicationDate }) => ({
    date: finalisedDate ?? applicationDate,
    club: destinationClub,
  }));
  const transactionsB = orderBy(transactionsA, ['date'], ['desc']);
  if (transactionsB.length === 0 || (transactionsB.length > 0 && last(transactionsB).club !== 'Bayswater')) {
    transactionsB.push({ date: firstTransactionDate, club: 'Bayswater' });
  }

  return transactionsB;
};

export const playerDetail = ({ config, teams, members: membersRaw }: Options) => {
  const teamMap = fromPairs(map(teams, (team) => [team.code, pick(team, teamFields)]));
  const members = map(membersRaw, (memberRaw) => {
    const member = pick(memberRaw, ...fields) as any;
    member.contacts = compact([
      ...map(memberRaw.guardians, (guardian) => transformGuardian(guardian)),
      memberRaw.emergencyContact === null ? null : transformEmergency(memberRaw.emergencyContact),
      memberRaw.contact === null ? null : transformRegistered(memberRaw.contact),
    ]);
    member.transactions = orderBy(transformTransactions(memberRaw.transactions, config.seasonYear), ['transactionDate', 'transactionTime'], ['desc', 'desc']);
    member.transfers = transformTransfers(memberRaw.transfers, memberRaw.firstTransactionDate);
    member.team = teamMap[memberRaw.teamCode] ?? null;
    return member;
  });

  return keyBy(members, 'footyWebNumber');
};

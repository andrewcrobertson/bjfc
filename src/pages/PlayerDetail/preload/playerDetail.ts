// import filter from 'lodash/filter';
// import fromPairs from 'lodash/fromPairs';
// import keyBy from 'lodash/keyBy';
// import map from 'lodash/map';
// import orderBy from 'lodash/orderBy';
// import pick from 'lodash/pick';
// import type { ISanitisedConfig } from '../types/sanitisedConfig';
// import type { ISanitisedPlayer } from '../types/sanitisedPlayer';
// import type { ISanitisedTeam } from '../types/sanitisedTeam';
// import type { ISanitisedTransaction } from '../types/sanitisedTransaction';

// export interface Options {
//   config: ISanitisedConfig;
//   players: ISanitisedPlayer[];
//   teams: ISanitisedTeam[];
//   transactions: ISanitisedTransaction[];
// }

// const fields = ['footyWebNumber', 'initials', 'lastName', 'firstName', 'dateOfBirth', 'club', 'gender', 'disability', 'transactions', 'transfers'];

// const teamFields = ['code', 'ageGroupCode', 'name', 'teamGender'];

export const playerDetail = () => {
  //   const seasonYear = options.config.seasonYear;
  //   const teamMap = fromPairs(map(options.teams, (team) => [team.code, pick(team, teamFields)]));
  //   const transactions = filter(options.transactions, ({ date: transactionDate }) => parseInt(transactionDate.substring(0, 4)) >= seasonYear - 1);
  //   const players = map(options.players, (sanitisedPlayer) => {
  //     const player = pick(sanitisedPlayer, ...fields) as any;
  //     player.contacts = sanitisedPlayer.contacts;
  //     player.transactions = filter(transactions, ({ footyWebNumber }) => footyWebNumber === sanitisedPlayer.footyWebNumber);
  //     player.transactions = orderBy(player.transactions, ['transactionDate', 'transactionTime'], ['desc', 'desc']);
  //     player.clubHistory = orderBy(sanitisedPlayer.clubHistory, ['date'], ['desc']);
  //     player.team = teamMap[sanitisedPlayer.teamCode] ?? null;
  //     return player;
  //   });
  //   return keyBy(players, 'footyWebNumber');
};
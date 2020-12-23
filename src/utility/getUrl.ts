export const getUrlHome = () => '/';
export const getUrlCommitteeList = () => '/committee';
export const getUrlPlayer = (footyWebNumber: string) => `/players/${footyWebNumber}`;
export const getUrlPlayerSearch = () => '/players/search';
export const getUrlPlayerBirthdayList = () => '/players/birthdays';
export const getUrlTeamList = () => '/team-dashboard';
export const getUrlTeamOfficialList = (code: string) => `/teams/${code}/officials`;
export const getUrlTeamPlayerListArchived = (code: string) => `/teams/${code}/players/archived`;
export const getUrlTeamPlayerListCurrent = (code: string) => `/teams/${code}/players`;

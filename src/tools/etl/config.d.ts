export interface ITeam {
  code: string;
  shortName: string;
  name: string;
  years: number[];
  genders: string[];
}

export interface IConfig {
  teams: ITeam[];
}

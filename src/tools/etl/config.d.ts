export interface ITeam {
  code: string;
  name: string;
  years: number[];
  genders: string[];
}

export interface IConfig {
  teams: ITeam[];
}

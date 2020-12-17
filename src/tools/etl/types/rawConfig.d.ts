import { IRawMap } from './common';

export interface IRawConfigNoContact {
  footyWebNumber: string;
}

export interface IRawConfigPlayerTeamExceptions {
  code: string;
  footyWebNumber: string;
}

export interface IRawConfig {
  seasonYear: number;
  clubMap: IRawMap[];
  noContact: IRawConfigNoContact[];
  playerTeamExceptions: IRawConfigPlayerTeamExceptions[];
}

import type { IPlayerContact } from '@this/types/player';
import { compact } from 'lodash';
import map from 'lodash/map';
import type { IRawPlayer } from '../../types/rawPlayer';
import { toContactEmergency } from './toContactEmergency';
import { toContactGuardian } from './toContactGuardian';
import { toContactRegistered } from './toContactRegistered';

export const toContacts = (player: IRawPlayer): IPlayerContact[] =>
  compact([
    ...map(player.guardians, (guardian) => toContactGuardian(guardian)),
    player.emergencyContact === null ? null : toContactEmergency(player.emergencyContact),
    player.registeredContact === null ? null : toContactRegistered(player.registeredContact),
  ]);

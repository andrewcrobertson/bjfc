import type { ISanitisedOfficial } from '../../sanitisedTeam';
import type { IRawTeamOfficial } from '../../types/rawTeam';
import { toInitials } from '../utility/toInitials';

export const transformOfficial = (official: IRawTeamOfficial): ISanitisedOfficial =>
  official === null ? null : { ...official, initials: toInitials(official.firstName, official.lastName) };

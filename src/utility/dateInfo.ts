import { formatDistanceToNow, parseISO } from 'date-fns';

export const dateInfo = (dateOfBirth: string) => (dateOfBirth === null ? null : formatDistanceToNow(parseISO(dateOfBirth), { addSuffix: true }));

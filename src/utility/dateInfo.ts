import { formatDistanceToNow, parseISO } from 'date-fns';

export const dateInfo = (date: string) => (date === null ? null : formatDistanceToNow(parseISO(date), { addSuffix: true }));

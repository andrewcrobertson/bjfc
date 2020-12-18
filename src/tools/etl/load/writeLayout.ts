import { write } from './write';

export const writeLayout = (name: string, data: any) => write(name, 'layouts', data);

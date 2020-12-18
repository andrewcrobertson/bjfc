import { write } from './write';

export const writePage = (name: string, data: any) => write(name, 'pages', data);

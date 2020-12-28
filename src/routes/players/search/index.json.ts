import { get as getFn } from '@this/pages/PlayerSearch/api';
import type { Request } from 'polka';

export async function get(req: Request, res: any, next: any) {
  const data = await getFn(req);
  if (data !== null) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  } else {
    next();
  }
}

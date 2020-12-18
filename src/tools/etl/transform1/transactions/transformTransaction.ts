import type { IRawTransaction } from '../../types/rawTransaction';
import type { ISanitisedTransaction } from '../../types/sanitisedTransaction';

type ProductMap = { [key: string]: string };

export const transformTransaction = (obj: IRawTransaction, productMap: ProductMap): ISanitisedTransaction => ({
  footyWebNumber: obj.footyWebNumber,
  date: obj.date,
  time: obj.time,
  product: productMap[obj.product] ?? null,
  total: obj.total,
  status: obj.status,
});

import type { ISanitisedTransaction } from '../../../../types/sanitisedTransaction';
import type { IRawTransaction } from '../../types/rawTransaction';

type ProductMap = { [key: string]: string };

export const toTransaction = (obj: IRawTransaction, productMap: ProductMap): ISanitisedTransaction => ({
  footyWebNumber: obj.footyWebNumber,
  date: obj.date,
  time: obj.time,
  product: productMap[obj.product] ?? null,
  total: obj.total,
  status: obj.status,
});

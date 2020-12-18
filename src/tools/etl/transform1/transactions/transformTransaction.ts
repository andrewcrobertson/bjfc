import type { IRawTransaction } from '../../types/rawTransaction';
import type { ISanitisedTransaction } from '../../types/sanitisedTransaction';

type ProductMap = { [key: string]: string };

export const transformTransaction = (obj: IRawTransaction, productMap: ProductMap): ISanitisedTransaction => ({
  footyWebNumber: obj.footyWebNumber,
  transactionDate: obj.date,
  transactionTime: obj.time,
  product: productMap[obj.product] ?? null,
  lineItemTotal: obj.total,
  transactionStatus: obj.status,
});

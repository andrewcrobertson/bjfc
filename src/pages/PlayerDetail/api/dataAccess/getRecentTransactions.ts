import type { Database } from 'better-sqlite3';

const sql = `SELECT t.date,
  p.year,
  t.product,
  t.total,
  t.status
FROM [transaction] t
INNER JOIN product p
  ON t.product = p.name
WHERE footyWebNumber = @footyWebNumber
  AND p.year > (SELECT seasonYear - 2 FROM config)
ORDER BY t.date DESC;`;

export interface IRecentTransactionsDb {
  date: string;
  year: number;
  product: string;
  total: string;
  status: string;
}

export const getRecentTransactions = (db: Database, footyWebNumber: string): IRecentTransactionsDb[] => db.prepare(sql).all({ footyWebNumber });

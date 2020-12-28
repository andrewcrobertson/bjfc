import Database from 'better-sqlite3';
import path from 'path';

const dataPath = path.resolve(__dirname, '..', '..', '..', 'data');
const dbFile = path.resolve(dataPath, 'team.db');

export const getDatabase = () => new Database(dbFile);

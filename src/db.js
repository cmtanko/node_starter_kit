import { development as cfg } from './knexfile';
import knexJs from 'knex';

const db = knexJs(cfg);

export default db;

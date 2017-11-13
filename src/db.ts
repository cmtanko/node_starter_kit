import * as knexJs from 'knex';
import cfg = require('./knexfile');

const db = knexJs(cfg.development);

export default db;

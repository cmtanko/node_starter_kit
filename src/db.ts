import * as knexJs from 'knex';
import cfg = require('./knexfile');

let db = null;
if (process.env.NODE_ENV === 'production') {
  db = knexJs(cfg.production);
} else {
  db = knexJs(cfg.development);
}


export default db;

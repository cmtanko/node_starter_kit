import { development as cfg } from './knexfile';
import knex from 'knex';

module.exports = knex(cfg);

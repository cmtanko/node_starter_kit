import { development as cfg } from './knex-cfg';
import knex from 'knex';

module.exports = knex(cfg);

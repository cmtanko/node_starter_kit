"use strict";
// Update with your config settings.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            database: 'newUsers',
            password: 'postgres',
        },
        debug: false,
        pool: {
            min: 0,
            max: 10,
            acquireTimeout: 60 * 1000,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
        seeds: {
            directory: './seeds',
        },
    },
    production: {
        client: 'postgresql',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 50,
            acquireTimeout: 60 * 1000,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
        seeds: {
            directory: './seeds',
        },
    },
};
//# sourceMappingURL=knexfile.js.map
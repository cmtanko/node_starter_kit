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
    debug: true,
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
      user: process.env.DB_USER,
      database: process.env.DATABASE_URL,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};

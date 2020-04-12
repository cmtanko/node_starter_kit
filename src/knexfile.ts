// Update with your config settings.
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

export = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'newusers.c1sms85arqid.us-east-1.rds.amazonaws.com',
      user: 'postgres',
      database: 'newusers',
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
    client: 'postgres',
    connection: {
      host: 'newusers.c1sms85arqid.us-east-1.rds.amazonaws.com',
      user: 'postgres',
      database: 'newusers',
      password: 'postgres',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};


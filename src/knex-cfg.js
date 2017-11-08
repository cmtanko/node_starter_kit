module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      database: 'users',
      password: 'postgres',
    },
    debug: true,
  },
};

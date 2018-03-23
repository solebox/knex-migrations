// Update with your config settings.

module.exports = {

  development: {
    client: 'mariasql',
    connection: {
      host: '127.0.0.1',
      db: 'my_db',
      user:     'root',
      password: ''
    }
  },

  staging: {
    client: 'mariasql',
    connection: {
      db: 'my_db',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mariasql',
    connection: {
      db: 'my_db',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

//database.js
'use strics';
let env = process.env.NODE_ENV;
console.log(env);
knex_config = require('./knexfile')[env];
var knex = require('knex')(knex_config);
var schema = require('./db_schema.js');
var logger = require('winston');

schema.recreateSchema(knex, function (err) {
      if (err) {
        logger.error('create database schema error: %s', err.toString());
      }
      knex.destroy();
    });


'use strict';

var logger = require('winston');

exports.recreateSchema = function (knex, callback) {
  callback = callback || function () {};

  /* Drop MACHINE_STATUS, MACHINE tables and re-create these 2 tables */
  logger.info('Re-creating database schema');
  knex.schema.dropTableIfExists('temp_vectors')
    .then(function() {
      return knex.schema.dropTableIfExists('vectors');
    }).then(function () {
      return knex.schema.createTable('temp_vectors', function(tbl) {
        tbl.increments('id').primary();
        tbl.string('session').unique().index();
        tbl.string('sig1');
      });
    }).then(function () {
      return knex.schema.createTable('vectors', function(tbl) {
        tbl.increments('id');
        tbl.string('session').unique().index();
        tbl.string('sig1');
      });
    }).then(function () {
      logger.info('Database schema have been updated');
      callback();
    }).catch(function (err) {
      logger.error('Create schema error: %s', err.toString());
      callback(err);
    });
};


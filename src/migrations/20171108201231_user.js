exports.up = function(knex) {
  return (
    knex.schema
      // <country>
      .createTable('country', function(tbl) {
        // PK
        tbl.increments('country_id');

        tbl
          .string('country', 20)
          .notNullable()
          .defaultTo('n/a');
        tbl
          .date('last_update')
          .notNullable()
          .defaultTo(knex.raw('now()'));
      })
      // <city>
      .createTable('city', function(tbl) {
        // PK
        tbl.increments('city_id');

        tbl
          .string('city', 45)
          .notNullable()
          .defaultTo('n/a');
        tbl
          .integer('country_id')
          .notNullable()
          .references('country_id')
          .inTable('country')
          .onDelete('CASCADE');
        tbl
          .date('last_update')
          .notNullable()
          .defaultTo(knex.raw('now()'));
      })
      // <address>
      .createTable('address', function(tbl) {
        // PK
        tbl.increments('address_id');

        tbl
          .string('address', 45)
          .notNullable()
          .defaultTo('n/a');
        tbl.string('address2', 50);
        tbl.string('district', 50);
        tbl.string('phone', 50).notNullable();
        tbl
          .integer('city_id')
          .notNullable()
          .references('city_id')
          .inTable('city')
          .onDelete('CASCADE');
        tbl.string('postal_code', 10);
        tbl
          .date('create_date')
          .notNullable()
          .defaultTo(knex.raw('now()'));
        tbl
          .date('last_update')
          .notNullable()
          .defaultTo(knex.raw('now()'));
      })
      // <user>
      .createTable('user', function(tbl) {
        // PK
        tbl.increments('user_id');

        tbl
          .string('first_name', 45)
          .notNullable()
          .defaultTo('n/a');
        tbl
          .string('last_name', 45)
          .notNullable()
          .defaultTo('n/a');
        tbl.string('email', 50);
        tbl
          .integer('address_id')
          .notNullable()
          .references('address_id')
          .inTable('address')
          .onDelete('CASCADE');
        tbl
          .boolean('activebool')
          .notNullable()
          .defaultTo(true);
        tbl
          .date('create_date')
          .notNullable()
          .defaultTo(knex.raw('now()'));
        tbl
          .date('last_update')
          .notNullable()
          .defaultTo(knex.raw('now()'));
      })
  );
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user');
};

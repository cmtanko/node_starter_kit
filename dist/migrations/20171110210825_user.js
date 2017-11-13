"use strict";
exports.up = function (knex) {
    return (knex.schema
        .createTable('country', function (tbl) {
        tbl.increments('id');
        tbl
            .string('country', 20)
            .notNullable()
            .defaultTo('n/a');
        tbl
            .date('last_update')
            .notNullable()
            .defaultTo(knex.raw('now()'));
    })
        .createTable('city', function (tbl) {
        tbl.increments('id');
        tbl
            .string('city', 45)
            .notNullable()
            .defaultTo('n/a');
        tbl
            .integer('country_id')
            .notNullable()
            .references('id')
            .inTable('country')
            .onDelete('CASCADE');
        tbl
            .date('last_update')
            .notNullable()
            .defaultTo(knex.raw('now()'));
    })
        .createTable('address', function (tbl) {
        tbl.increments('id');
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
            .references('id')
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
        .createTable('user', function (tbl) {
        tbl.increments('id');
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
            .references('id')
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
    }));
};
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('country')
        .dropTableIfExists('city')
        .dropTableIfExists('address')
        .dropTableIfExists('user');
};
//# sourceMappingURL=20171110210825_user.js.map
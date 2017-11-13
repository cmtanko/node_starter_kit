import * as Knex from 'knex'

exports.seed = function(knex:Knex) {
  let tblName = 'user';

  let rows = [
    {
      first_name: 'Ramesh',
      last_name: 'Maharjan',
      email: 'ramesh@gmail.com',
      address_id: 1,
    },
    {
      first_name: 'Kopila',
      last_name: 'Sharma',
      email: 'kopila@gmail.com',
      address_id: 2,
    },
    {
      first_name: 'John',
      last_name: 'Smith',
      email: 'smith@gmail.com',
      address_id: 3,
    },
    {
      first_name: 'Rabi',
      last_name: 'Sharma',
      email: 'rav@gmail.com',
      address_id: 4,
    },
  ];

  return knex(tblName)
    .del()
    .then(function() {
      return knex.insert(rows).into(tblName);
    });
};

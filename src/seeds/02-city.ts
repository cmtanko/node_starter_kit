import * as Knex from 'knex'

exports.seed = function(knex:Knex) {
  let tblName = 'city';

  let rows = [
    { city: 'kathmandu', country_id: 1 },
    { city: 'Bhaktapur', country_id: 1 },
    { city: 'Lalitpur', country_id: 1 },
    { city: 'Hetauda', country_id: 1 },
    { city: 'Birgunj', country_id: 1 },
    { city: 'Nepalgunj', country_id: 1 },
    { city: 'Saptari', country_id: 1 },
    { city: 'Siraha', country_id: 1 },
    { city: 'Sydney', country_id: 9 },
    { city: 'Melbourne', country_id: 9 },
    { city: 'Dhaka', country_id: 13 },
    { city: 'Barcelona', country_id: 88 },
  ];

  return knex(tblName)
    .del()
    .then(function() {
      return knex.insert(rows).into(tblName);
    });
};

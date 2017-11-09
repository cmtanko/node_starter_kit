import db from '../db';

export function getCountryList(id) {
  let where = '';
  if (id) {
    where = `country_id = ${id}`;
  }

  return db('country')
    .select('country_id', 'country')
    .whereRaw(where)
    .orderBy('country')
    .then();
}

export function deleteCountry(id) {
  return db('country')
    .where('country_id', id)
    .del()
    .then();
}

export function addCountry(country) {
  return db('country')
    .insert(country, 'country_id')
    .then();
}

export default {
  getCountryList,
  deleteCountry,
  addCountry,
};

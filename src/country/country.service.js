import db from '../db';

export function getCountryList() {
  return db('country')
    .select('country')
    .orderBy('country')
    .then();
}
export function getCountry(id) {
  return db('country')
    .select('country')
    .where('country_id', id)
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
  getCountry,
  deleteCountry,
  addCountry,
};

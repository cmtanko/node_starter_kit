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
export default {
  getCountryList,
  getCountry,
};

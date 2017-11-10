import db from '../db';
import _ from 'lodash';

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
  let countryId = _.get(country, 'country_id');
  if (!countryId) {
    return db('country')
      .insert(country, 'country_id')
      .then();
  } else {
    return db('country')
      .update(country, 'country_id')
      .where('country_id', countryId)
      .then();
  }
}

export default {
  getCountryList,
  deleteCountry,
  addCountry,
};

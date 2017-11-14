import db from '../db';
import * as _ from 'lodash';
import CountryInformation from '../domain/responses/CountryInformation';
import SuccessResponse from '../domain/responses/Success';
import * as Promise from 'bluebird';

export function getCountryList(id:number) {
  let where = '';
  if (id) {
    where = `id = ${id}`;
  }

  return db('country')
    .select('id', 'country')
    .whereRaw(where)
    .orderBy('country')
    .then();
}

export function deleteCountry(id:number) {
  return db('country')
    .where('id', id)
    .del()
    .then();
}

export function addCountry(country:CountryInformation) {
  let countryId = _.get(country, 'id');
  if (!countryId) {
    return db('country')
      .insert(country, 'id')
      .then();
  } else {
    return db('country')
      .update(country, 'id')
      .where('id', countryId)
      .then();
  }
}

export default {
  getCountryList,
  deleteCountry,
  addCountry,
};
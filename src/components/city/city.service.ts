import * as _ from 'lodash';
// import Treeize from 'treeize';
import db from '../../db';
import CityInformation from '../../domain/responses/CityInformation';
import SuccessResponse from '../../domain/responses/Success';
import * as Promise from 'bluebird';

export function getCityList(
  country: string
): Promise<SuccessResponse<CityInformation>> {
  let where = '';
  if (country) {
    where = `LOWER(ry.country) like '${country.toLowerCase()}'`;
  }

  return (
    db('city as c')
      .join('country as ry', 'ry.id', 'c.country_id')
      .select('c.city as city', 'ry.country')
      .whereRaw(where)
      .orderBy('c.city')
      .then()
  );
}
export function getCity(id:number): Promise<SuccessResponse<CityInformation>> {
  return (
    db('city as c')
      .join('country as ry', 'ry.id', 'c.country_id')
      .where('c.id', id)
      .select('c.city as city', 'ry.country')
      .orderBy('c.city')
      .then()
  );
}

export function deleteCity(id:number): Promise<SuccessResponse<CityInformation>> {
  return db('city')
    .where('id', id)
    .del()
    .then();
}

export function addCity(city:CityInformation): Promise<SuccessResponse<CityInformation>> {
  let cityId = _.get(city, 'id');
  if (cityId) {
    return db('city')
      .update(city, 'id')
      .where('id', cityId)
      .then();
  } else {
    return db('city')
      .insert(city, 'id')
      .then();
  }
}

export default {
  getCityList,
  getCity,
  deleteCity,
  addCity,
};

import db from '../db';
import Treeize from 'treeize';

export function getCityList(country) {
  if (!country) {
    return db('city as c')
      .join('country as ry', 'ry.country_id', 'c.country_id')
      .select('c.city as cities:city', 'ry.country')
      .orderBy('c.city')
      .then(function(rows) {
        let tree = new Treeize();
        tree.grow(rows);
        let cities = tree.getData();

        return cities;
      })
      .then();
  } else {
    return db('city as c')
      .join('country as ry', 'ry.country_id', 'c.country_id')
      .whereRaw('LOWER(ry.country) like LOWER(?)', country)
      .select('c.city as cities:city', 'ry.country')
      .orderBy('c.city')
      .then(function(rows) {
        let tree = new Treeize();
        tree.grow(rows);
        let cities = tree.getData();

        return cities;
      })
      .then();
  }
}
export function getCity(id) {
  return db('city as c')
    .join('country as ry', 'ry.country_id', 'c.country_id')
    .where('c.city_id', id)
    .select('c.city as cities:city', 'ry.country')
    .orderBy('c.city')
    .then(function(rows) {
      let tree = new Treeize();
      tree.grow(rows);
      let cities = tree.getData();

      return cities;
    })
    .then();
}

export function deleteCity(id) {
  return db('city')
    .where('city_id', id)
    .del()
    .then();
}

export function addCity(city) {
  return db('city')
    .insert(city, 'city_id')
    .then();
}

export default {
  getCityList,
  getCity,
  deleteCity,
  addCity,
};

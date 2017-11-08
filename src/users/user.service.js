import db from '../db';
import Treeize from 'treeize';

export function getUserList() {
  return db('user as u')
    .join('address as a', 'a.address_id', 'u.address_id')
    .join('city as c', 'a.city_id', 'c.city_id')
    .join('country as ry', 'ry.country_id', 'c.country_id')
    .select(
      'u.first_name as firstname',
      'u.last_name as lastname',
      'u.email as email',
      'u.activebool as active',
      'a.address as address:address1',
      'a.address2 as address:address2',
      'a.district as address:district',
      'c.city as address:city',
      'ry.country as address:country',
      'a.phone as address:phone',
      'a.postal_code as address:postal_code'
    )
    .orderBy('u.first_name')
    .then(function(rows) {
      let tree = new Treeize();
      tree.grow(rows);
      let address = tree.getData();

      return address;
    })
    .then();
}
export function getUser(id) {
  return db('user as u')
    .where('user_id', id)
    .join('address as a', 'a.address_id', 'u.address_id')
    .join('city as c', 'a.city_id', 'c.city_id')
    .join('country as ry', 'ry.country_id', 'c.country_id')
    .select(
      'u.first_name as firstname',
      'u.last_name as lastname',
      'u.email as email',
      'u.activebool as active',
      'a.address as address:address1',
      'a.address2 as address:address2',
      'a.district as address:district',
      'c.city as address:city',
      'ry.country as address:country',
      'a.phone as address:phone',
      'a.postal_code as address:postal_code'
    )
    .orderBy('u.first_name')
    .then(function(rows) {
      let tree = new Treeize();
      tree.grow(rows);
      let address = tree.getData();

      return address;
    })
    .then();
}

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

export function getCityList() {
  return db('city')
    .select('city')
    .orderBy('city')
    .then();
}
export default {
  getUserList,
  getUser,
  getCountryList,
  getCountry,
  getCityList,
};

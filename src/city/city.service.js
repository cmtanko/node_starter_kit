import City from '../models/city';
import Boom from 'boom';

export function getCityList() {
  return City.fetchAll({
    columns: ['id', 'city', 'country_id'],
    withRelated: [
      {
        country: function(qb) {
          qb.column('id', 'country');
        },
      },
    ],
  })
    .then(a => {
      return a;
    })
    .catch(e => {
      return Boom.notFound(e);
    });
}

export function getCity(id) {
  return City.where('id', id)
    .fetch({
      columns: ['id', 'city', 'country_id'],
      withRelated: [
        {
          country: function(qb) {
            qb.column('id', 'country');
          },
        },
      ],
    })
    .then(a => {
      return a;
    })
    .catch(e => {
      return Boom.notFound(e);
    });
}

export function deleteCity(id) {
  return new City({ id }).fetch().then(city => city.destroy());
}

export function addCity(city) {
  return City.forge(city)
    .save(null)
    .then(city => city.refresh());
}

export function updateCity(id, city) {
  return new City({ id }).save(city).then(city => city.refresh());
}

export default {
  getCityList,
  getCity,
  deleteCity,
  addCity,
  updateCity,
};

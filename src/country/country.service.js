import Country from '../models/country';
import Boom from 'boom';

export function getCountryList() {
  return Country.fetchAll();
}

export function getCountry(id) {
  return new Country({ id }).fetch().then(country => {
    if (!country) {
      throw new Boom.notFound('Country not found');
    }

    return country;
  });
}

export function deleteCountry(id) {
  return new Country({ id }).fetch().then(country => {
    country.destroy();
  });
}

export function addCountry(country) {
  return Country.forge(country)
    .save(null)
    .then(country => country.refresh());
}

export function updateCountry(id, country) {
  return new Country({ id }).save(country).then(country => country.refresh());
}

export default {
  getCountryList,
  getCountry,
  deleteCountry,
  addCountry,
  updateCountry,
};

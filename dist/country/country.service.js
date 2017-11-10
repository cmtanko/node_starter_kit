'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountryList = getCountryList;
exports.deleteCountry = deleteCountry;
exports.addCountry = addCountry;

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCountryList(id) {
  var where = '';
  if (id) {
    where = 'country_id = ' + id;
  }

  return (0, _db2.default)('country').select('country_id', 'country').whereRaw(where).orderBy('country').then();
}

function deleteCountry(id) {
  return (0, _db2.default)('country').where('country_id', id).del().then();
}

function addCountry(country) {
  var countryId = _lodash2.default.get(country, 'country_id');
  if (!countryId) {
    return (0, _db2.default)('country').insert(country, 'country_id').then();
  } else {
    return (0, _db2.default)('country').update(country, 'country_id').where('country_id', countryId).then();
  }
}

exports.default = {
  getCountryList: getCountryList,
  deleteCountry: deleteCountry,
  addCountry: addCountry
};
//# sourceMappingURL=country.service.js.map
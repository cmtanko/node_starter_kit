'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCityList = getCityList;
exports.getCity = getCity;
exports.deleteCity = deleteCity;
exports.addCity = addCity;

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _treeize = require('treeize');

var _treeize2 = _interopRequireDefault(_treeize);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCityList(country) {
  var where = '';
  if (country) {
    where = 'LOWER(ry.country) like \'' + country.toLowerCase() + '\'';
  }

  return (0, _db2.default)('city as c').join('country as ry', 'ry.country_id', 'c.country_id').select('c.city as cities:city', 'ry.country').whereRaw(where).orderBy('c.city').then(function (rows) {
    var tree = new _treeize2.default();
    tree.grow(rows);
    var cities = tree.getData();

    return cities;
  }).then();
}
function getCity(id) {
  return (0, _db2.default)('city as c').join('country as ry', 'ry.country_id', 'c.country_id').where('c.city_id', id).select('c.city as cities:city', 'ry.country').orderBy('c.city').then(function (rows) {
    var tree = new _treeize2.default();
    tree.grow(rows);
    var cities = tree.getData();

    return cities;
  }).then();
}

function deleteCity(id) {
  return (0, _db2.default)('city').where('city_id', id).del().then();
}

function addCity(city) {
  var cityId = _lodash2.default.get(city, 'city_id');
  if (cityId) {
    return (0, _db2.default)('city').update(city, 'city_id').where('city_id', cityId).then();
  } else {
    return (0, _db2.default)('city').insert(city, 'city_id').then();
  }
}

exports.default = {
  getCityList: getCityList,
  getCity: getCity,
  deleteCity: deleteCity,
  addCity: addCity
};
//# sourceMappingURL=city.service.js.map
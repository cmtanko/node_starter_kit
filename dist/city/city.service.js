'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
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

var _city = require('../models/city');

var _city2 = _interopRequireDefault(_city);

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

async function details(id) {
  try {
    var userObj = await _city2.default.fetchById(id);

    await userObj.related('country').fetch();

    return userObj;
  } catch (error) {
    return error;
  }
}

function getCityList() {
  return _city2.default.fetchAll();
}
function getCity(id) {
  return _city2.default.fetchById(id);
  // return db('city as c')
  //   .join('country as ry', 'ry.country_id', 'c.country_id')
  //   .where('c.city_id', id)
  //   .select('c.city as cities:city', 'ry.country')
  //   .orderBy('c.city')
  //   .then(function(rows) {
  //     let tree = new Treeize();
  //     tree.grow(rows);
  //     let cities = tree.getData();

  //     return cities;
  //   })
  //   .then();
}

function deleteCity(id) {
  return (0, _db2.default)('city')
    .where('city_id', id)
    .del()
    .then();
}

function addCity(city) {
  var cityId = _lodash2.default.get(city, 'city_id');
  if (cityId) {
    return (0, _db2.default)('city')
      .update(city, 'city_id')
      .where('city_id', cityId)
      .then();
  } else {
    return (0, _db2.default)('city')
      .insert(city, 'city_id')
      .then();
  }
}

exports.default = {
  getCityList: getCityList,
  getCity: getCity,
  deleteCity: deleteCity,
  addCity: addCity,
  details: details,
};
//# sourceMappingURL=city.service.js.map

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCityList = getCityList;
exports.getCity = getCity;
exports.deleteCity = deleteCity;
exports.addCity = addCity;
exports.updateCity = updateCity;

var _city = require('../models/city');

var _city2 = _interopRequireDefault(_city);

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCityList() {
  return _city2.default.fetchAll({
    columns: ['id', 'city', 'country_id'],
    withRelated: [{
      country: function country(qb) {
        qb.column('id', 'country');
      }
    }]
  }).then(function (a) {
    return a;
  }).catch(function (e) {
    return _boom2.default.notFound(e);
  });
}

function getCity(id) {
  return _city2.default.where('id', id).fetch({
    columns: ['id', 'city', 'country_id'],
    withRelated: [{
      country: function country(qb) {
        qb.column('id', 'country');
      }
    }]
  }).then(function (a) {
    return a;
  }).catch(function (e) {
    return _boom2.default.notFound(e);
  });
}

function deleteCity(id) {
  return new _city2.default({ id: id }).fetch().then(function (city) {
    return city.destroy();
  });
}

function addCity(city) {
  return _city2.default.forge(city).save(null).then(function (city) {
    return city.refresh();
  });
}

function updateCity(id, city) {
  return new _city2.default({ id: id }).save(city).then(function (city) {
    return city.refresh();
  });
}

exports.default = {
  getCityList: getCityList,
  getCity: getCity,
  deleteCity: deleteCity,
  addCity: addCity,
  updateCity: updateCity
};
//# sourceMappingURL=city.service.js.map
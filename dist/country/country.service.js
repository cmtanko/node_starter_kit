'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountryList = getCountryList;
exports.getCountry = getCountry;
exports.deleteCountry = deleteCountry;
exports.addCountry = addCountry;
exports.updateCountry = updateCountry;

var _country = require('../models/country');

var _country2 = _interopRequireDefault(_country);

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCountryList() {
  return _country2.default.fetchAll();
}

function getCountry(id) {
  return new _country2.default({ id: id }).fetch().then(function (country) {
    if (!country) {
      throw new _boom2.default.notFound('Country not found');
    }

    return country;
  });
}

function deleteCountry(id) {
  return new _country2.default({ id: id }).fetch().then(function (country) {
    country.destroy();
  });
}

function addCountry(country) {
  return _country2.default.forge(country).save(null).then(function (country) {
    return country.refresh();
  });
}

function updateCountry(id, country) {
  return new _country2.default({ id: id }).save(country).then(function (country) {
    return country.refresh();
  });
}

exports.default = {
  getCountryList: getCountryList,
  getCountry: getCountry,
  deleteCountry: deleteCountry,
  addCountry: addCountry,
  updateCountry: updateCountry
};
//# sourceMappingURL=country.service.js.map
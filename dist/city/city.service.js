"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
// import Treeize from 'treeize';
var db_1 = require("../db");
global.Promise = require('bluebird');
function getCityList(country) {
    var where = '';
    if (country) {
        where = "LOWER(ry.country) like '" + country.toLowerCase() + "'";
    }
    return (db_1.default('city as c')
        .join('country as ry', 'ry.id', 'c.country_id')
        .select('c.city as city', 'ry.country')
        .whereRaw(where)
        .orderBy('c.city')
        .then());
}
exports.getCityList = getCityList;
function getCity(id) {
    return (db_1.default('city as c')
        .join('country as ry', 'ry.id', 'c.country_id')
        .where('c.id', id)
        .select('c.city as city', 'ry.country')
        .orderBy('c.city')
        .then());
}
exports.getCity = getCity;
function deleteCity(id) {
    return db_1.default('city')
        .where('id', id)
        .del()
        .then();
}
exports.deleteCity = deleteCity;
function addCity(city) {
    var cityId = _.get(city, 'id');
    if (cityId) {
        return db_1.default('city')
            .update(city, 'id')
            .where('id', cityId)
            .then();
    }
    else {
        return db_1.default('city')
            .insert(city, 'id')
            .then();
    }
}
exports.addCity = addCity;
exports.default = {
    getCityList: getCityList,
    getCity: getCity,
    deleteCity: deleteCity,
    addCity: addCity,
};
//# sourceMappingURL=city.service.js.map
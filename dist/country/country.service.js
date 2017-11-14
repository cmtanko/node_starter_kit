"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../db");
var _ = require("lodash");
function getCountryList(id) {
    var where = '';
    if (id) {
        where = "id = " + id;
    }
    return db_1.default('country')
        .select('id', 'country')
        .whereRaw(where)
        .orderBy('country')
        .then();
}
exports.getCountryList = getCountryList;
function deleteCountry(id) {
    return db_1.default('country')
        .where('id', id)
        .del()
        .then();
}
exports.deleteCountry = deleteCountry;
function addCountry(country) {
    var countryId = _.get(country, 'id');
    if (!countryId) {
        return db_1.default('country')
            .insert(country, 'id')
            .then();
    }
    else {
        return db_1.default('country')
            .update(country, 'id')
            .where('id', countryId)
            .then();
    }
}
exports.addCountry = addCountry;
exports.default = {
    getCountryList: getCountryList,
    deleteCountry: deleteCountry,
    addCountry: addCountry,
};
//# sourceMappingURL=country.service.js.map
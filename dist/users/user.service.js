"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../db");
// import Treeize = require('treeize');
var _ = require("lodash");
global.Promise = require('bluebird');
function getUserList(id) {
    var where = '';
    if (id) {
        where = "u.id = " + id;
    }
    return db_1.default('user as u')
        .join('address as a', 'a.id', 'u.address_id')
        .join('city as c', 'a.city_id', 'c.id')
        .join('country as ry', 'ry.id', 'c.country_id')
        .whereRaw(where)
        .select('u.first_name as firstname', 'u.last_name as lastname', 'u.email as email', 'u.activebool as active', 'a.address as address:address1', 'a.address2 as address:address2', 'a.district as address:district', 'c.city as address:city', 'ry.country as address:country', 'a.phone as address:phone', 'a.postal_code as address:postal_code')
        .then();
}
exports.getUserList = getUserList;
function deleteUser(id) {
    return db_1.default('user')
        .where('id', id)
        .del()
        .then();
}
exports.deleteUser = deleteUser;
function addUser(user) {
    var userId = _.get(user, 'id');
    var address = user.address;
    delete user.address;
    return db_1.default.transaction(function (trx) {
        if (userId) {
            return trx
                .insert(address, 'id')
                .into('address')
                .then(function (ids) {
                user.address_id = ids[0];
                return trx
                    .update(user, 'id')
                    .where('id', userId)
                    .into('user');
            });
        }
        else {
            return trx
                .insert(address, 'id')
                .into('address')
                .then(function (ids) {
                user.address_id = ids[0];
                return trx.insert(user, 'id').into('user');
            });
        }
    });
}
exports.addUser = addUser;
exports.default = {
    getUserList: getUserList,
    deleteUser: deleteUser,
    addUser: addUser,
};
//# sourceMappingURL=user.service.js.map
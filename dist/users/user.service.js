'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserList = getUserList;
exports.deleteUser = deleteUser;
exports.addUser = addUser;

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _treeize = require('treeize');

var _treeize2 = _interopRequireDefault(_treeize);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUserList(id) {
  var where = '';
  if (id) {
    where = 'u.user_id = ' + id;
  }

  return (0, _db2.default)('user as u').join('address as a', 'a.address_id', 'u.address_id').join('city as c', 'a.city_id', 'c.city_id').join('country as ry', 'ry.country_id', 'c.country_id').whereRaw(where).select('u.first_name as firstname', 'u.last_name as lastname', 'u.email as email', 'u.activebool as active', 'a.address as address:address1', 'a.address2 as address:address2', 'a.district as address:district', 'c.city as address:city', 'ry.country as address:country', 'a.phone as address:phone', 'a.postal_code as address:postal_code').then(function (rows) {
    var tree = new _treeize2.default();
    tree.grow(rows);
    var address = tree.getData();

    return address;
  }).then();
}

function deleteUser(id) {
  return (0, _db2.default)('user').where('user_id', id).del().then();
}

function addUser(user) {
  var userId = _lodash2.default.get(user, 'user_id');
  var address = user.address;
  delete user.address;

  return _db2.default.transaction(function (trx) {
    if (userId) {
      return trx.insert(address, 'address_id').into('address').then(function (ids) {
        user.address_id = ids[0];

        return trx.update(user, 'user_id').where('user_id', userId).into('user');
      });
    } else {
      return trx.insert(address, 'address_id').into('address').then(function (ids) {
        user.address_id = ids[0];

        return trx.insert(user, 'user_id').into('user');
      });
    }
  });
}

exports.default = {
  getUserList: getUserList,
  deleteUser: deleteUser,
  addUser: addUser
};
//# sourceMappingURL=user.service.js.map
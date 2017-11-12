'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bookshelf = require('../bookshelf');

var _bookshelf2 = _interopRequireDefault(_bookshelf);

var _address = require('./address');

var _address2 = _interopRequireDefault(_address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tblName = 'user';

var User = _bookshelf2.default.Model.extend({
  tableName: tblName,
  address: function address() {
    return this.belongsTo(_address2.default);
  }
});

exports.default = User;
//# sourceMappingURL=user.js.map
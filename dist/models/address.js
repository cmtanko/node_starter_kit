'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bookshelf = require('../bookshelf');

var _bookshelf2 = _interopRequireDefault(_bookshelf);

var _city = require('./city');

var _city2 = _interopRequireDefault(_city);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tblName = 'address';

var Address = _bookshelf2.default.Model.extend({
  tableName: tblName,
  city: function city() {
    return this.belongsTo(_city2.default);
  }
});

exports.default = Address;
//# sourceMappingURL=address.js.map
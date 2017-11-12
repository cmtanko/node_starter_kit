'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bookshelf = require('../bookshelf');

var _bookshelf2 = _interopRequireDefault(_bookshelf);

var _country = require('./country');

var _country2 = _interopRequireDefault(_country);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tblName = 'city';

var City = _bookshelf2.default.Model.extend({
  tableName: tblName,
  country: function country() {
    return this.belongsTo(_country2.default);
  }
});

exports.default = City;
//# sourceMappingURL=city.js.map
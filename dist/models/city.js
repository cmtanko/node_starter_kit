'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _country = require('./country');

var _country2 = _interopRequireDefault(_country);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tblName = 'city';

var City = function (_bookshelf$Model) {
  _inherits(City, _bookshelf$Model);

  function City() {
    _classCallCheck(this, City);

    return _possibleConstructorReturn(this, (City.__proto__ || Object.getPrototypeOf(City)).apply(this, arguments));
  }

  _createClass(City, [{
    key: 'country',
    value: function country() {
      return this.hasOne(_country2.default);
    }
  }, {
    key: 'tableName',
    get: function get() {
      return tblName;
    }
  }], [{
    key: 'fetchById',
    value: function fetchById(id) {
      return City.where('id', id).fetch();
    }
  }]);

  return City;
}(_db2.default.Model);

exports.default = City;
//# sourceMappingURL=city.js.map
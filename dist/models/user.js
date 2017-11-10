'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, [{
    key: 'listUser',
    value: function listUser() {
      return (0, _db2.default)('country').select('country').orderBy('country').then();
    }
  }]);

  return User;
}();

exports.default = User;
// let User = function(args) {
//   this.isValid = function() {
//     if (args.firstname && args.lastname) {
//       return true;
//     }

//     return false;
//   };

//   this.userId = args.user_id || '';
//   this.firstName = args.first_name || '';
//   this.lastName = args.last_name || '';
//   this.email = args.email || '';
//   this.active = args.activebool || 0;
//   this.address = args.address_id || '';
// };

// module.exports = User;
//# sourceMappingURL=user.js.map
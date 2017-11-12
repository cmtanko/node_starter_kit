'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _knexfile = require('./knexfile');

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = (0, _knex2.default)(_knexfile.development);

exports.default = db;
//# sourceMappingURL=db.js.map
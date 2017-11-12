'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _knexfile = require('./knexfile');

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _bookshelf = require('bookshelf');

var _bookshelf2 = _interopRequireDefault(_bookshelf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_knexfile.development);
var knex = (0, _knex2.default)(_knexfile.development);
var bookshelf = (0, _bookshelf2.default)(knex);

bookshelf.plugin('bookshelf-manager');
exports.default = bookshelf;
//# sourceMappingURL=db.js.map
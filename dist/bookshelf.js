'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _bookshelf = require('bookshelf');

var _bookshelf2 = _interopRequireDefault(_bookshelf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bookshelf = (0, _bookshelf2.default)(_db2.default);

bookshelf.plugin('bookshelf-manager');

exports.default = bookshelf;
//# sourceMappingURL=bookshelf.js.map
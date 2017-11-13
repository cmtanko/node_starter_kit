"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookshelfJs = require("bookshelf");
var db_1 = require("./db");
var bookshelf = bookshelfJs(db_1.default);
bookshelf.plugin('bookshelf-manager');
exports.default = bookshelf;
//# sourceMappingURL=bookshelf.js.map
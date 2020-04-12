"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
var db = database_1.default.getInstance();
var bookshelf = db.getBookshelf();
class User extends bookshelf.Model {
    get tableName() { return 'user'; }
    get hasTimestamps() { return true; }
}
exports.default = User;
//# sourceMappingURL=user.model.js.map
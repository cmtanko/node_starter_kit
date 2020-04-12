"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
var db = database_1.default.getInstance();
var bookshelf = db.getBookshelf();
class Address extends bookshelf.Model {
    get tableName() { return 'address'; }
    get hasTimestamps() { return true; }
}
exports.default = Address;
//# sourceMappingURL=address.model.js.map
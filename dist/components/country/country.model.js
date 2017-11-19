"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
var db = database_1.default.getInstance();
var bookshelf = db.getBookshelf();
class Country extends bookshelf.Model {
    get tableName() { return 'country'; }
    get hasTimestamps() { return true; }
}
exports.default = Country;
//# sourceMappingURL=country.model.js.map
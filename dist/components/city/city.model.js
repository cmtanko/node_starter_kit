"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
var db = database_1.default.getInstance();
var bookshelf = db.getBookshelf();
class City extends bookshelf.Model {
    get tableName() { return 'city'; }
    get hasTimestamps() { return true; }
}
exports.default = City;
//# sourceMappingURL=city.model.js.map
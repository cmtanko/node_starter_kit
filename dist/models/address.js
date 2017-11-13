"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookshelf_1 = require("../bookshelf");
var city_1 = require("./city");
var tblName = 'address';
var Address = bookshelf_1.default.Model.extend({
    tableName: tblName,
    city: function () {
        return this.belongsTo(city_1.default);
    },
});
exports.default = Address;
//# sourceMappingURL=address.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookshelf_1 = require("../bookshelf");
var country_1 = require("./country");
var tblName = 'city';
var City = bookshelf_1.default.Model.extend({
    tableName: tblName,
    country: function () {
        return this.belongsTo(country_1.default);
    },
});
exports.default = City;
//# sourceMappingURL=city.js.map
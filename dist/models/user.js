"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookshelf_1 = require("../bookshelf");
var address_1 = require("./address");
var tblName = 'user';
var User = bookshelf_1.default.Model.extend({
    tableName: tblName,
    address: function () {
        return this.belongsTo(address_1.default);
    },
});
exports.default = User;
//# sourceMappingURL=user.js.map
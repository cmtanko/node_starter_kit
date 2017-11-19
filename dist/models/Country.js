"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../database");
var db = database_1.default.getInstance();
var bookshelf = db.getBookshelf();
var Country = /** @class */ (function (_super) {
    __extends(Country, _super);
    function Country() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Country.prototype, "tableName", {
        get: function () { return 'country'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "hasTimestamps", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    return Country;
}(bookshelf.Model));
exports.default = Country;
//# sourceMappingURL=Country.js.map
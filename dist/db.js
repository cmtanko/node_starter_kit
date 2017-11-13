"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knexJs = require("knex");
var cfg = require("./knexfile");
var db = knexJs(cfg.development);
exports.default = db;
//# sourceMappingURL=db.js.map
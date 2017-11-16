"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knexJs = require("knex");
var cfg = require("./knexfile");
var db = knexJs(cfg.production);
//   let db = null;
// if (process.env.NODE_ENV === 'production') {
// } else {
//   db = knexJs(cfg.development);
// }
exports.default = db;
//# sourceMappingURL=db.js.map
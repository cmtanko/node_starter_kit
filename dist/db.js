"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knexJs = require("knex");
const cfg = require("./knexfile");
let db;
if (process.env.NODE_ENV === 'production') {
    db = knexJs(cfg.production);
}
else {
    db = knexJs(cfg.development);
}
exports.default = db;
//# sourceMappingURL=db.js.map
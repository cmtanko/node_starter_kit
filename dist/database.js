"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Knex = require("knex");
const Bookshelf = require("bookshelf");
const cfg = require("./knexfile");
class Database {
    constructor() {
        this._knex = null;
        this._bookshelf = null;
        if (Database._instance) {
            throw new Error('Error: Instantiation failed: Use Database.getInstance() instead of new.');
        }
        this._knex = Knex(cfg.development);
        this._bookshelf = Bookshelf(this._knex);
        Database._instance = this;
    }
    static getInstance() {
        console.log('asdfasdf');
        return Database._instance;
    }
    getKnex() {
        console.log('asdfasdf');
        return this._knex;
    }
    getBookshelf() {
        return this._bookshelf;
    }
}
Database._instance = new Database();
exports.default = Database;
//# sourceMappingURL=database.js.map
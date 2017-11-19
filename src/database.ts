import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

import cfg = require('./knexfile');

export default class Database {
  private static _instance: Database = new Database();
  protected _knex: Knex;
  protected _bookshelf: Bookshelf;

  constructor() {
    if (Database._instance) {
      throw new Error(
        'Error: Instantiation failed: Use Database.getInstance() instead of new.'
      );
    }

    if (process.env.NODE_ENV === 'production') {
      this._knex = Knex(cfg.production);
    } else {
      this._knex = Knex(cfg.development);
    }

    this._bookshelf = Bookshelf(this._knex);
    Database._instance = this;
  }

  public static getInstance(): Database {
    return Database._instance;
  }

  public getKnex(): any {
    return this._knex;
  }

  public getBookshelf(): Bookshelf {
    return this._bookshelf;
  }
}

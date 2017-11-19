import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';
import cfg = require('./knexfile');

export default class Database {
  private static _instance: Database = new Database();

  protected _knex: any = null;

  protected _bookshelf: any = null;

  constructor() {
    if (Database._instance) {
      throw new Error(
        'Error: Instantiation failed: Use Database.getInstance() instead of new.'
      );
    }

    this._knex = Knex(cfg.development);

    this._bookshelf = Bookshelf(this._knex);

    Database._instance = this;
  }

  public static getInstance(): Database {
    console.log('asdfasdf');
    
    return Database._instance;
  }

  public getKnex(): any {
    console.log('asdfasdf');
    return this._knex;
  }

  public getBookshelf(): Bookshelf {
    return this._bookshelf;
  }
}

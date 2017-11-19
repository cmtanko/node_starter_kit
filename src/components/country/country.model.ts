import Database from '../../database';

var db = Database.getInstance();
var bookshelf = db.getBookshelf();

export default class Country extends bookshelf.Model<Country> {
    get tableName() { return 'country'; }
    get hasTimestamps() { return true; }
}
import Database from '../../database';

var db = Database.getInstance();
var bookshelf = db.getBookshelf();

export default class City extends bookshelf.Model<City> {
    
    get tableName() { return 'city'; }
    get hasTimestamps() { return true; }
}
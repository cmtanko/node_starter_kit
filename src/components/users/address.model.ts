import Database from '../../database';

var db = Database.getInstance();
var bookshelf = db.getBookshelf();

export default class Address extends bookshelf.Model<Address> {
    
    get tableName() { return 'address'; }
    get hasTimestamps() { return true; }
}

import bookshelf from '../bookshelf';
import City from './city';

const tblName = 'address';

let Address = bookshelf.Model.extend({
  tableName: tblName,
  city: function() {
    return this.belongsTo(City);
  },
});

export default Address;

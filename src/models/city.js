import bookshelf from '../bookshelf';
import Country from './country';
const tblName = 'city';

let City = bookshelf.Model.extend({
  tableName: tblName,
  country: function() {
    return this.belongsTo(Country);
  },
});

export default City;

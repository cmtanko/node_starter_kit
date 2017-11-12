import bookshelf from '../bookshelf';
import Address from './address';

const tblName = 'user';

let User = bookshelf.Model.extend({
  tableName: tblName,
  address: function() {
    return this.belongsTo(Address);
  },
});

export default User;

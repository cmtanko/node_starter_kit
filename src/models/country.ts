import bookshelf from '../bookshelf';

const tblName = 'country';

class Country extends bookshelf.Model {
  get tableName() {
    return tblName;
  }
}

export default Country;

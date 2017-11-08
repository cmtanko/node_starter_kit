import db from '../db';

class User {
  listUser() {
    return db('country')
      .select('country')
      .orderBy('country')
      .then();
  }
}
export default User;
// let User = function(args) {
//   this.isValid = function() {
//     if (args.firstname && args.lastname) {
//       return true;
//     }

//     return false;
//   };

//   this.userId = args.user_id || '';
//   this.firstName = args.first_name || '';
//   this.lastName = args.last_name || '';
//   this.email = args.email || '';
//   this.active = args.activebool || 0;
//   this.address = args.address_id || '';
// };

// module.exports = User;

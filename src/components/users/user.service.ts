import * as _ from 'lodash';
import * as Promise from 'bluebird';
import db from '../../db';
import Success from '../../domain/responses/Success';
import UserInformation from '../../domain/responses/UserInformation';

export function getUserList(id: number): Promise<Success<UserInformation>> {
  let where: string = '';
  if (id) {
    where = `u.id = ${id}`;
  }

  return db('user as u')
    .join('address as a', 'a.id', 'u.address_id')
    .join('city as c', 'a.city_id', 'c.id')
    .join('country as ry', 'ry.id', 'c.country_id')
    .whereRaw(where)
    .select(
      'u.first_name as firstname',
      'u.last_name as lastname',
      'u.email as email',
      'u.activebool as active',
      'a.address as address1',
      'a.address2 as address2',
      'a.district as district',
      'c.city as address:city',
      'ry.country as address:country',
      'a.phone as address:phone',
      'a.postal_code as address:postal_code'
    )
    .then();
}

export function deleteUser(id: number): Promise<object> {
  return db('user')
    .where('id', id)
    .del()
    .then();
}

export function addUser(user: UserInformation): Promise<object> {
  let userId: number = _.get(user, 'id');
  let address: object = user.address;
  delete user.address;
  return db.transaction(function(trx) {
    if (userId) {
      return trx
        .insert(address, 'id')
        .into('address')
        .then(function(ids) {
          user.address_id = ids[0];
          return trx
            .update(user, 'id')
            .where('id', userId)
            .into('user');
        });
    } else {
      return trx
        .insert(address, 'id')
        .into('address')
        .then(function(ids) {

          user.address_id = ids[0];

          return trx.insert(user, 'id').into('user');
        });
    }
  });
}

export default {
  getUserList,
  deleteUser,
  addUser,
};

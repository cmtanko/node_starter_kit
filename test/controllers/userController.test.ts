import {} from 'jest';
import * as supertest from 'supertest';

const env = process.env.NODE_ENV || 'development';

let url = 'http://localhost:3000';
if (env === 'production') {
  url = process.env.APP_HOST;
}
const request = supertest(url);

describe('user Controller Test', () => {
  describe('GET /api/users', () => {
    it('should return 200 OK', done => {
      request.get('/api/users').expect(200, done);
    });

    it.skip('should not create a new user if name is not provided', done => {
      let user = {};
      request
        .post('/api/users')
        .send(user)
        .expect(400, done);
    });

    it('should create a new user with valid data', done => {
      let user = {
        first_name: 'tstUser',
        last_name: 'tstUser',
        email: 'tstUser',
        activebool: true,
        address: {
          address: 'tstUser',
          address2: 'tstUser',
          district: 'tstUser',
          city_id: 2,
          phone: 'tstUser',
          postal_code: 'tstUser',
        },
      };
      request
        .post('/api/users')
        .send(user)
        .expect(201, done);
    });

    it('should not update user if id is not provided', done => {
      let user = {
        user: 'Afghanistan',
      };
      request
        .put('/api/users')
        .send(user)
        .expect(404, done);
    });
    it('should update user if id is provided', done => {
      let user = {
        first_name: 'newUser',
        last_name: 'tstUser',
        email: 'tstUser',
        activebool: true,
        address: {
          address: 'tstUser',
          address2: 'tstUser',
          district: 'tstUser',
          city_id: 2,
          phone: 'tstUser',
          postal_code: 'tstUser',
        },
      };
      request
        .put('/api/users/3')
        .send(user)
        .expect(200, done);
    });
    it('should get information of user', done => {
      request.get('/api/users/1').expect(200, done);
    });

    it('should not get information of random user id', done => {
      request.get('/api/users/11111').expect(404, done);
    });

    it.skip('should delete user with given id', done => {
      request.delete('/api/users/1').expect(404, done);
    });

    it('should not delete user with random id', done => {
      request.delete('/api/users/11111').expect(404, done);
    });
  });
});

import {} from 'jest';
import * as supertest from 'supertest';
const env = process.env.NODE_ENV || 'development';

let url = 'http://localhost:3000';
if (env === 'production') {
  url = process.env.APP_HOST;
}
const request = supertest(url);

describe('Country Controller Test', () => {
  describe('GET /api/countries', () => {
    it('should return 200 OK', done => {
      request.get('/api/countries').expect(200, done);
    });

    it('should not create a new country if name is not provided', done => {
      let country = {};
      request
        .post('/api/countries')
        .send(country)
        .expect(400, done);
    });

    it('should create a new country with valid data', done => {
      let country = { country: 'New Country' };
      request
        .post('/api/countries')
        .send(country)
        .expect(201, done);
    });

    it('should not update country if id is not provided', done => {
      let country = {
        country: 'Afghanistan',
      };
      request
        .put('/api/countries')
        .send(country)
        .expect(404, done);
    });
    it('should update country if id is provided', done => {
      let country = {
        country: 'new country',
      };
      request
        .put('/api/countries/55')
        .send(country)
        .expect(200, done);
    });
    it('should get information of country', done => {
      request.get('/api/countries/1').expect(200, done);
    });

    it('should not get information of random country id', done => {
      request.get('/api/countries/11111').expect(404, done);
    });

    it.skip('should delete country with given id', done => {
      request.delete('/api/countries/1').expect(404, done);
    });

    it('should not delete country with random id', done => {
      request.delete('/api/countries/11111').expect(404, done);
    });
  });
});

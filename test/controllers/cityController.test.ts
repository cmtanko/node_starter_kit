import {} from 'jest';
import * as supertest from 'supertest';
const env = process.env.NODE_ENV || 'development';

let url = 'http://localhost:3000';
if (env === 'production') {
  url = process.env.APP_HOST;
}
const request = supertest(url);

describe('City Controller Test', () => {
  describe('GET /api/cities', () => {
    it('should return 200 OK', done => {
      request.get('/api/cities').expect(200, done);
    });

    it('should not create a new city if name is not provided', done => {
      let city = {};
      request
        .post('/api/cities')
        .send(city)
        .expect(400, done);
    });

    it('should create a new city with valid data', done => {
      let city = { city: 'New city', country_id:1 };
      request
        .post('/api/cities')
        .send(city)
        .expect(201, done);
    });

    it('should not update city if id is not provided', done => {
      let city = {
        city: 'Afghanistan',
      };
      request
        .put('/api/cities')
        .send(city)
        .expect(404, done);
    });
    it('should update city if id is provided', done => {
      let city = {
        city: 'new city',
        country_id: 3
      };
      request
        .put('/api/cities/3')
        .send(city)
        .expect(200, done);
    });
    it('should get information of city', done => {
      request.get('/api/cities/1').expect(200, done);
    });

    it('should not get information of random city id', done => {
      request.get('/api/cities/11111').expect(404, done);
    });

    it.skip('should delete city with given id', done => {
      request.delete('/api/cities/1').expect(404, done);
    });

    it('should not delete city with random id', done => {
      request.delete('/api/cities/11111').expect(404, done);
    });
  });
});

import {} from 'jest';
import * as supertest from 'supertest';
const env = process.env.NODE_ENV || 'development';

let url = 'https://node-starter-kit.herokuapp.com';
if (env == 'test') {
  url = 'http://localhost:3000';
}
const request = supertest(url);

describe('API Test', () => {
  describe('GET /', () => {
    it('should return 200 OK', done => {
      request.get('/').expect(200, done);
    });

    it('should return 404 NF for random api hit', done => {
      request.get('/randomLinkUrl').expect(404, done);
    });
  });
});

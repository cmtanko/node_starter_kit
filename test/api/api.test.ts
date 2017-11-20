import {} from 'jest';
import * as supertest from 'supertest';
const env = process.env.NODE_ENV || 'development';

let url = 'http://localhost:3000';
if (env === 'production') {
  url = 'https://node-starter-kit.herokuapp.com';
}
const request = supertest('http://localhost:3000');

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
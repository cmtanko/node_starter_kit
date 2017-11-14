import 'mocha';
import { expect } from 'chai';
import app from '../../dist/api';
import request from 'supertest';

describe('API Test', () => {
  it('should return 200 for api request', done => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('should return 404 for random API request', done => {
    request(app)
      .get(`/abc`)
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        done();
      });
  });
});

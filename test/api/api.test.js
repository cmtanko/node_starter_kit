import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import HttpStatusCode from 'http-status-codes';

import app from '../../dist/api';

describe('API Test', () => {
  it('should return 200 for api request', done => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(HttpStatusCode.OK);
        done();
      });
  });
  it('should return 404 for random API request', done => {
    request(app)
      .get(`/abc`)
      .end((err, res) => {
        expect(res.status).to.be.equal(HttpStatusCode.NOT_FOUND);
        done();
      });
  });
});

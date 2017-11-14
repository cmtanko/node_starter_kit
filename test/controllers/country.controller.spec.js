import { expect } from 'chai';
import request from 'supertest';
import app from '../../dist/api';

describe('Users Controller Test', () => {
  it('should return list of countries', done => {
    request(app)
      .get('/api/countries')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });

  it('should not create a new country if name is not provided', done => {
    let country = {};

    request(app)
      .post('/api/countries')
      .send(country)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(400);
        done();
      });
  });

  it('should create a new country with valid data', done => {
    let country = {
      country: 'New COuntry',
    };

    request(app)
      .post('/api/countries')
      .send(country)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(201);
        done();
      });
  });

  it('should get information of country', done => {
    request(app)
      .get('/api/countries/1')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });

  it('should respond with not found error if random country id is provided', done => {
    request(app)
      .get('/api/countries/11111')
      .end((err, res) => {
        expect(res.body.length).to.be.equal(0);
        done();
      });
  });

  it('should update a country if name is provided', done => {
    let country = {
      id: 1,
      country: 'new Updated Country',
    };

    request(app)
      .put('/api/countries')
      .send(country)
      .end((err, res) => {
        expect(res.body.length).to.be.equal(1);
        done();
      });
  });

  it.skip('should not update a country if country is not provided', done => {
    let country = {};

    request(app)
      .put('/api/countries')
      .send(country)
      .end((err, res) => {
        expect(res.body.length).to.be.equal(0);
        done();
      });
  });

  it('should delete a country if valid id is provided', done => {
    request(app)
      .delete('/api/countries/1')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(204);

        done();
      });
  });

  it('should respond with not found error if random country id is provided for deletion', done => {
    request(app)
      .delete('/api/countries/9999')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(204);
        done();
      });
  });
});

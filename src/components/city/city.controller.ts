import * as _ from 'lodash';
import { Router, Request, Response } from 'express';
import * as HttpStatusCode from 'http-status-codes';

import City from './city.model';
import cityService from './city.service';

let validate = require('express-validation');
let validation = require('../../_validation');

const router = Router();

/**
 * @swagger
 * /cities:
 *   get:
 *     summary: List all cities
 *     tags:
 *       - Cities
 *     parameters:
 *       - name: country
 *         description: 'get by country'
 *         in: query
 *         type: string
 *         required: false
 */

router.get('/', (req, res) => {
  let country = _.get(req, 'query.country') || '';

  new City().query(qb => {
    qb.innerJoin('country', 'country.id', 'city.country_id');
    qb.select('city.id', 'country', 'city');
    qb.where('country', 'LIKE', '%' + country + '%').then(city => {
      res.status(HttpStatusCode.OK).send(city);
    });
  });
});

/**
 * 
 * @swagger
 * /cities/{city_id}:
 *   get:
 *     summary: Get city by city_id
 *     tags:
 *       - Cities
 *     parameters:
 *       - name: city_id
 *         description: 'get by city_id'
 *         in: path
 *         type: integer
 *         required: true
 */
router.get('/:id', (req, res) => {
  let cityId = req.params.id;

  new City().query(qb => {
    qb.innerJoin('country', 'country.id', 'city.country_id');
    qb.select('city.id', 'country', 'city');
    qb.where('city.id', '=', cityId).then(city => {
      if(city.length === 0)
      res.status(HttpStatusCode.NOT_FOUND).send('Not Found !');
      res.status(HttpStatusCode.OK).send(city[0]);
    });
  });
});

/**
 * 
 * @swagger
 * /cities/{city_id}:
 *   delete:
 *     summary: Delete city by id
 *     tags:
 *       - Cities
 *     parameters:
 *       - name: city_id
 *         description: 'city_id'
 *         in: path
 *         type: integer
 *         required: true
 */
router.delete('/:id', (req, res) => {
  let cityId = req.params.id;
  new City({ id: cityId }).destroy().then(city => {
    res.status(HttpStatusCode.NO_CONTENT).send(city);
  });
});

/**
 * 
 * @swagger
 * /cities:
 *   post:
 *     summary: Add city
 *     tags:
 *       - Cities
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in : body
 *         name: city
 *         description: 'Add city'
 *         required: true
 *         schema:
 *           $ref: '#/definitions/City'
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', validate(validation.city),(req, res) => {
  let city = req.body;
  if (!city.city) {
    res.status(HttpStatusCode.BAD_REQUEST).send('city is not defined');
    return;
  }
  new City(city).save().then(city => {
    res.status(HttpStatusCode.CREATED).send(city);
  });
});

/**
 * 
 * @swagger
 * /cities:
 *   put:
 *     summary: Update city
 *     tags:
 *       - Cities
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in : body
 *         name: city
 *         description: 'Update city'
 *         required: true
 *         schema:
 *           $ref: '#/definitions/CityPut'
 *     responses:
 *       201:
 *         description: Created
 */
router.put('/', validate(validation.city), (req, res) => {
  let city = req.body;
  if (!city.city) {
    res.status(HttpStatusCode.BAD_REQUEST).send('Country is not defined');
    return;
  }
  new City(city).save().then(city => {
    res.status(HttpStatusCode.OK).send(city);
  });
});

export default router;

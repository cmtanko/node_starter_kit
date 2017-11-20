import { Router } from 'express';
import * as HttpStatusCode from 'http-status-codes';
import Country from './country.model';
import countryService from './country.service';
let validate = require('express-validation');
let validation = require('../_validation');

const router = Router();
/**
 * @swagger
 * /countries:
 *   get:
 *     summary: List all countries
 *     tags:
 *       - Countries
 */
router.get('/', (req, res) => {
  Country.fetchAll().then(country => {
    res.status(HttpStatusCode.OK).send(country.toJSON());
  });
});

/**
 * 
 * @swagger
 * /countries/{country_id}:
 *   get:
 *     summary: Get country by country_id
 *     tags:
 *       - Countries
 *     parameters:
 *       - name: country_id
 *         description: 'get by country_id id'
 *         in: path
 *         type: integer
 *         required: true
 */

router.get('/:id', (req, res) => {
  let countryId = req.params.id;
  new Country()
    .where({ id: countryId })
    .fetch()
    .then(country => {
      if (!country)
        return res
          .status(HttpStatusCode.NOT_FOUND)
          .send('Cannot find country with the id ' + countryId);
      res.status(HttpStatusCode.OK).send(country.toJSON());
    });
});

/**
 * 
 * @swagger
 * /countries/{country_id}:
 *   delete:
 *     summary: Delete country by id
 *     tags:
 *       - Countries
 *     parameters:
 *       - name: country_id
 *         description: 'country_id'
 *         in: path
 *         type: integer
 *         required: true
 */
router.delete('/:id', (req, res) => {
  let countryId = req.params.id;
  new Country({ id: countryId }).destroy().then(country => {
    res.status(HttpStatusCode.CREATED).send(country);
  });
});

/**
 * 
 * @swagger
 * /countries:
 *   post:
 *     summary: Add country
 *     tags:
 *       - Countries
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in : body
 *         name: country
 *         description: 'Add country'
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Country'
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', validate(validation.country), (req, res) => {
  let country = req.body;
  new Country(country).save().then(country => {
    res.status(HttpStatusCode.CREATED).send(country);
  });
});

/**
 * 
 * @swagger
 * /countries:
 *   put:
 *     summary: Update country
 *     tags:
 *       - Countries
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in : body
 *         name: country
 *         description: 'Update country'
 *         required: true
 *         schema:
 *           $ref: '#/definitions/CountryPut'
 *     responses:
 *       201:
 *         description: Created
 */
router.put('/', validate(validation.country), (req, res) => {
  let country = req.body;
  new Country(country).save().then(country => {
    res.status(HttpStatusCode.OK).send(country);
  });
});

export default router;

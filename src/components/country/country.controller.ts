import { Router } from 'express';
import countryService from './country.service';
import * as Boom from 'boom';

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
  countryService
    .getCountryList(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(err.status || 500).json(err));
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
  countryService
    .getCountryList(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(err.status || 500).json(err));
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
  countryService
    .deleteCountry(req.params.id)
    .then(data => res.status(204).json(data))
    .catch(err => res.status(err.status).json(err));
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
router.post('/', (req, res) => {
  let country = req.body;
  if (!country.country) {
    res.status(400).send('Country is not defined');
    return;
  }
  countryService
    .addCountry(country)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(err.status || 500).json(err));
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
router.put('/', (req, res) => {
  let country = req.body;
  countryService
    .addCountry(country)
    .then(data => res.status(204).json(data))
    .catch(err => res.status(err.status || 500).json(err));
});

export default router;

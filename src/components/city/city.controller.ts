import * as _ from 'lodash';
import { Router } from 'express';
import cityService from './city.service';
import * as Boom from 'boom';

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
  let country = _.get(req, 'query.country') || undefined;
  cityService
    .getCityList(country)
    .then(data => res.json(data))
    .catch(err => res.json(err));
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
  cityService
    .getCity(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
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
  cityService
    .deleteCity(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
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
router.post('/', (req, res) => {
  let country = req.body;

  cityService
    .addCity(country)
    .then(data => res.json(data))
    .catch(err => res.json(err));
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
router.put('/', (req, res) => {
  let country = req.body;
  cityService
    .addCity(country)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});
export default router;
import countryService from './country.service';
import { Router } from 'express';

const router = Router();
/**
 * @swagger
 * /countries:
 *   get:
 *     summary: List all countries
 *     tags:
 *       - Countries
 *     responses:
 *       200:
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Country'
 */
router.get('/', (req, res) => {
  countryService
    .getCountryList()
    .then(data => res.json(data))
    .catch(err => res.json(err));
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
 *     responses:
 *       200:
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/Country'
 */

router.get('/:id', (req, res) => {
  countryService
    .getCountryList(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
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
 *     responses:
 *       200:
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/Country'
 */
router.delete('/:id', (req, res) => {
  countryService
    .deleteCountry(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
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
  countryService
    .addCountry(country)
    .then(data => res.json(data))
    .catch(err => res.json(err));
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
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

export default router;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _country = require('./country.service');

var _country2 = _interopRequireDefault(_country);

var _express = require('express');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
/**
 * @swagger
 * /countries:
 *   get:
 *     summary: List all countries
 *     tags:
 *       - Countries
 */
router.get('/', function (req, res) {
  _country2.default.getCountryList().then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
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

router.get('/:id', function (req, res) {
  _country2.default.getCountry(req.params.id).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
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
router.delete('/:id', function (req, res) {
  _country2.default.deleteCountry(req.params.id).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
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
router.post('/', function (req, res) {
  var country = req.body;
  _country2.default.addCountry(country).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
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
router.put('/', function (req, res) {
  var country = req.body;
  _country2.default.addCountry(country.country_id, country).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
  });
});

exports.default = router;
//# sourceMappingURL=country.controller.js.map
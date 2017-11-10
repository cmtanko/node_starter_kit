'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _city = require('./city.service');

var _city2 = _interopRequireDefault(_city);

var _express = require('express');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

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

router.get('/', function (req, res) {
  var country = _lodash2.default.get(req, 'query.country') || undefined;
  _city2.default.getCityList(country).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
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
router.get('/:id', function (req, res) {
  _city2.default.getCity(req.params.id).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
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
router.delete('/:id', function (req, res) {
  _city2.default.deleteCity(req.params.id).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
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
router.post('/', function (req, res) {
  var country = req.body;
  _city2.default.addCity(country).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
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
router.put('/', function (req, res) {
  var country = req.body;
  _city2.default.addCity(country).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
  });
});
exports.default = router;
//# sourceMappingURL=city.controller.js.map
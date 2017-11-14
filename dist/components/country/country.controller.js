"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var country_service_1 = require("./country.service");
var router = express_1.Router();
/**
 * @swagger
 * /countries:
 *   get:
 *     summary: List all countries
 *     tags:
 *       - Countries
 */
router.get('/', function (req, res) {
    country_service_1.default
        .getCountryList(req.params.id)
        .then(function (data) { return res.status(200).json(data); })
        .catch(function (err) { return res.status(err.status || 500).json(err); });
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
    country_service_1.default
        .getCountryList(req.params.id)
        .then(function (data) { return res.status(200).json(data); })
        .catch(function (err) { return res.status(err.status || 500).json(err); });
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
    country_service_1.default
        .deleteCountry(req.params.id)
        .then(function (data) { return res.status(204).json(data); })
        .catch(function (err) { return res.status(err.status).json(err); });
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
    if (!country.country) {
        res.status(400).send('Country is not defined');
        return;
    }
    country_service_1.default
        .addCountry(country)
        .then(function (data) { return res.status(201).json(data); })
        .catch(function (err) { return res.status(err.status || 500).json(err); });
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
    country_service_1.default
        .addCountry(country)
        .then(function (data) { return res.status(204).json(data); })
        .catch(function (err) { return res.status(err.status || 500).json(err); });
});
exports.default = router;
//# sourceMappingURL=country.controller.js.map
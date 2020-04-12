"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HttpStatusCode = require("http-status-codes");
const country_model_1 = require("./country.model");
let validate = require('express-validation');
let validation = require('../../_validation');
const router = express_1.Router();
/**
 * @swagger
 * /countries:
 *   get:
 *     summary: List all countries
 *     tags:
 *       - Countries
 */
router.get('/', (req, res) => {
    country_model_1.default.fetchAll().then(country => {
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
    new country_model_1.default()
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
    new country_model_1.default()
        .where('id', countryId)
        .fetch()
        .then(c => {
        c.destroy().then(country => {
            res.status(HttpStatusCode.CREATED).send(country);
        });
    })
        .catch(e => {
        res.status(HttpStatusCode.NOT_FOUND).send('Not Found!');
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
    new country_model_1.default(country).save().then(country => {
        res.status(HttpStatusCode.CREATED).send(country);
    });
});
/**
 *
 * @swagger
 * /countries/{country_id}:
 *   put:
 *     summary: Update country
 *     tags:
 *       - Countries
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: country_id
 *         description: 'get by country_id id'
 *         in: path
 *         type: integer
 *         required: true
 *       - in : body
 *         name: country
 *         description: 'Update country'
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Country'
 *     responses:
 *       201:
 *         description: Created
 */
router.put('/:id', validate(validation.country), (req, res) => {
    let countryId = req.params.id;
    let country = req.body;
    new country_model_1.default()
        .where('id', countryId)
        .fetch()
        .then(c => {
        c.save(country).then(newCountry => {
            res.status(HttpStatusCode.OK).send(newCountry);
        });
    })
        .catch(e => {
        res.status(HttpStatusCode.NOT_FOUND).send('Not Found!');
    });
});
exports.default = router;
//# sourceMappingURL=country.controller.js.map
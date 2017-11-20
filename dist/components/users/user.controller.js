"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HttpStatusCode = require("http-status-codes");
const user_model_1 = require("./user.model");
const address_model_1 = require("./address.model");
let validate = require('express-validation');
let validation = require('../../_validation');
const router = express_1.Router();
/**
 *
 * @swagger
 * /users:
 *   get:
 *     summary: Get user list
 *     tags:
 *       - Users
 */
router.get('/', (req, res) => {
    new user_model_1.default().query(qb => {
        qb.innerJoin('address', 'address.id', 'user.address_id');
        qb.innerJoin('city', 'city.id', 'address.city_id');
        qb.innerJoin('country', 'country.id', 'city.country_id');
        qb.select('user.first_name', 'user.last_name', 'user.email', 'user.activebool', 'address.address', 'address.address2', 'address.district', 'city.city', 'country.country');
        qb.then(user => {
            res.status(HttpStatusCode.OK).send(user);
        });
    });
});
/**
 *
 * @swagger
 * /users/{user_id}:
 *   get:
 *     summary: Get user by user_id
 *     tags:
 *       - Users
 *     parameters:
 *       - name: user_id
 *         description: 'get by user id'
 *         in: path
 *         type: integer
 *         required: true
 */
router.get('/:id', (req, res) => {
    let userId = req.params.id;
    new user_model_1.default().query(qb => {
        qb.where('user.id', '=', userId);
        qb.innerJoin('address', 'address.id', 'user.address_id');
        qb.innerJoin('city', 'city.id', 'address.city_id');
        qb.innerJoin('country', 'country.id', 'city.country_id');
        qb.select('user.first_name', 'user.last_name', 'user.email', 'user.activebool', 'address.address', 'address.address2', 'address.district', 'city.city', 'country.country');
        qb.then(user => {
            if (user.length === 0)
                res.status(HttpStatusCode.NOT_FOUND).send('Not Found !');
            res.status(HttpStatusCode.OK).send(user[0]);
        });
    });
});
/**
 *
 * @swagger
 * /users/{user_id}:
 *   delete:
 *     summary: Delete user by id
 *     tags:
 *       - Users
 *     parameters:
 *       - name: user_id
 *         description: 'user id'
 *         in: path
 *         type: integer
 *         required: true
 */
router.delete('/:id', (req, res) => {
    let userId = req.params.id;
    new user_model_1.default()
        .where('id', userId)
        .fetch()
        .then(c => {
        c.destroy().then(user => {
            res.status(HttpStatusCode.NO_CONTENT).send(user);
        });
    })
        .catch(e => {
        res.status(HttpStatusCode.NOT_FOUND).send('Not Found!');
    });
});
/**
 *
 * @swagger
 * /users:
 *   post:
 *     summary: Add user
 *     tags:
 *       - Users
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in : body
 *         name: user
 *         description: 'Add use'
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', validate(validation.user), (req, res) => {
    let user = req.body;
    let address = user.address;
    delete user.address;
    new address_model_1.default(address).save().then(resultAddress => {
        user.address_id = resultAddress.id;
        new user_model_1.default(user).save().then(user => {
            res.status(HttpStatusCode.CREATED).send(user);
        });
    });
});
/**
 *
 * @swagger
 * /users:
 *   put:
 *     summary: Update user
 *     tags:
 *       - Users
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in : body
 *         name: user
 *         description: 'Update use'
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: Created
 */
router.put('/:id', validate(validation.user), (req, res) => {
    let userId = req.params.id;
    let user = req.body;
    let address = user.address;
    delete user.address;
    new user_model_1.default()
        .where('id', userId)
        .fetch()
        .then(u => {
        u.save(user).then(newUser => {
            res.status(HttpStatusCode.OK).send(newUser);
        });
    })
        .catch(e => {
        res.status(HttpStatusCode.NOT_FOUND).send('Not Found!');
    });
});
exports.default = router;
//# sourceMappingURL=user.controller.js.map
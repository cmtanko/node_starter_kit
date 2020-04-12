"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const city_controller_1 = require("./components/city/city.controller");
const user_controller_1 = require("./components/users/user.controller");
const country_controller_1 = require("./components/country/country.controller");
const router = express_1.Router();
/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       first_name:
 *         type: string
 *       last_name:
 *         type: string
 *       email:
 *         type: string
 *       activebool:
 *         type: boolean
 *       address:
 *         $ref: '#/definitions/Address'
 *   City:
 *     properties:
 *       city:
 *         type: string
 *       country_id:
 *         type: integer
 *   Country:
 *     properties:
 *       country:
 *         type: string
 */
router.use('/users', user_controller_1.default);
router.use('/cities', city_controller_1.default);
router.use('/countries', country_controller_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map
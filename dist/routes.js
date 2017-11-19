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
  *   UserPut:
 *     properties:
 *       id:
 *         type: integer
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
 *   Address:
 *     type: object
 *     properties:
 *       address:
 *         type: string
 *       address2:
 *         type: string
 *       district:
 *         type: string
 *       city_id:
 *         type: integer
 *       phone:
 *         type: string
 *       postal_code:
 *         type: string
 *   City:
 *     properties:
 *       city:
 *         type: string
 *       country_id:
 *         type: integer
 *   CityPut:
 *     properties:
 *       id:
 *         type: integer
 *       city:
 *         type: string
 *       country_id:
 *         type: integer
 *   Country:
 *     properties:
 *       country:
 *         type: string
 *   CountryPut:
 *     properties:
 *       id:
 *         type: integer
 *       country:
 *         type: string
 */
router.use('/users', user_controller_1.default);
router.use('/cities', city_controller_1.default);
router.use('/countries', country_controller_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map
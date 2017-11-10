'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _user = require('./users/user.controller');

var _user2 = _interopRequireDefault(_user);

var _country = require('./country/country.controller');

var _country2 = _interopRequireDefault(_country);

var _city = require('./city/city.controller');

var _city2 = _interopRequireDefault(_city);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
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
 *       user_id:
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
 *       city_id:
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
 *       country_id:
 *         type: integer
 *       country:
 *         type: string
 */

router.use('/users', _user2.default);

router.use('/countries', _country2.default);

router.use('/cities', _city2.default);

exports.default = router;
//# sourceMappingURL=routes.js.map
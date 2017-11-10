import { Router } from 'express';
import userController from './users/user.controller';
import countryController from './country/country.controller';
import cityController from './city/city.controller';
const router = Router();
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

router.use('/users', userController);

router.use('/countries', countryController);

router.use('/cities', cityController);

export default router;

import { Router } from 'express';
import cityController from './components/city/city.controller';
import userController from './components/users/user.controller';
import countryController from './components/country/country.controller';

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

router.use('/users', userController);
router.use('/cities', cityController);
router.use('/countries', countryController);

export default router;

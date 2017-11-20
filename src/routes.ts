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

router.use('/users', userController);
router.use('/cities', cityController);
router.use('/countries', countryController);

export default router;

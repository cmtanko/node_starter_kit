import { Router } from 'express';
import userController from './users/user.controller';
import countryCountroller from './country/country.controller';

const router = Router();
/**
 * @swagger
 * definitions:
 *   Status:
 *     properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       age:
 *         type: string
 *       gender:
 *         type: string
 *       class:
 *         type: string
 *       hobbies:
 *         type: string
 */
/**
 * 
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get user list
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Status'
 */
router.use('/users', userController);
router.use('/countries', countryCountroller);

export default router;

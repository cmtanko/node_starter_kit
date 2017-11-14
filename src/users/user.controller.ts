import { Router, Request, Response } from 'express';
import userService from './user.service';

const router = Router();
/**
 * 
 * @swagger
 * /users:
 *   get:
 *     summary: Get user list
 *     tags:
 *       - Users
 */
router.get('/', (req: Request, res: Response) => {
  userService
    .getUserList(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
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
router.get('/:id', (req: Request, res: Response) => {
  userService
    .getUserList(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
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
  userService
    .deleteUser(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
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
router.post('/', (req, res) => {
  let user = req.body;
  userService
    .addUser(user)
    .then(data => res.json(data))
    .catch(err => res.json(err));
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
 *           $ref: '#/definitions/UserPut'
 *     responses:
 *       201:
 *         description: Created
 */
router.put('/', (req, res) => {
  let user = req.body;
  userService
    .addUser(user)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});
export default router;

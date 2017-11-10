import userService from './user.service';
import { Router } from 'express';

const router = Router();
/**
 * 
 * @swagger
 * /users:
 *   get:
 *     summary: Get user list
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/User'
 */
router.get('/', (req, res) => {
  userService
    .getUserList()
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
 *     responses:
 *       200:
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/User'
 */
router.get('/:id', (req, res) => {
  userService
    .getUserList(req.params.id)
    .then(data => res.json(data[0]))
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
 *     responses:
 *       200:
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/User'
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

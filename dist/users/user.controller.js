'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('./user.service');

var _user2 = _interopRequireDefault(_user);

var _express = require('express');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
/**
 * 
 * @swagger
 * /users:
 *   get:
 *     summary: Get user list
 *     tags:
 *       - Users
 */
router.get('/', function (req, res) {
  _user2.default.getUserList().then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
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
router.get('/:id', function (req, res) {
  _user2.default.getUserList(req.params.id).then(function (data) {
    return res.json(data[0]);
  }).catch(function (err) {
    return res.json(err);
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
router.delete('/:id', function (req, res) {
  _user2.default.deleteUser(req.params.id).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
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
router.post('/', function (req, res) {
  var user = req.body;
  _user2.default.addUser(user).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
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
 *           $ref: '#/definitions/UserPut'
 *     responses:
 *       201:
 *         description: Created
 */
router.put('/', function (req, res) {
  var user = req.body;
  _user2.default.addUser(user).then(function (data) {
    return res.json(data);
  }).catch(function (err) {
    return res.json(err);
  });
});
exports.default = router;
//# sourceMappingURL=user.controller.js.map
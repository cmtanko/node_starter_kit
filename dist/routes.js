'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _student = require('./students/student.controller');

var _student2 = _interopRequireDefault(_student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
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
 * /api/students:
 *   get:
 *     summary: Get student with id
 *     tags:
 *       - Students
 *     parameters:
 *       - name: q
 *         in: query
 *         type: string
 *         required: false
 *     responses:
 *       200:
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Status'
 */
router.get('/students', (0, _student2.default)().getAllStudents);

exports.default = router;
//# sourceMappingURL=routes.js.map
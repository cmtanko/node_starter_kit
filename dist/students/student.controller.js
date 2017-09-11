'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _student = require('./student.service');

var _student2 = _interopRequireDefault(_student);

var _student3 = require('../models/student');

var _student4 = _interopRequireDefault(_student3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var studentController = function studentController() {
  var getAllStudents = function getAllStudents(req, res) {
    var query = parseInt(req.query['q']) || undefined;
    try {
      if (query) {
        _student2.default.getStudent(query, function (err, data) {
          if (err) {
            res.send({
              success: false,
              results: 'Unable to get data' + err
            });

            return;
          }

          var student = new _student4.default(data);

          res.send({
            success: true,
            results: student
          });
        });
      } else {
        _student2.default.getStudentList(function (err, data) {
          if (err) {
            res.send({
              success: false,
              results: 'Unable to get data' + err
            });

            return;
          }

          var students = [];
          data.forEach(function (s) {
            var student = new _student4.default(s);
            students.push(student);
          }, undefined);

          res.send({
            success: true,
            results: students
          });
        });
      }
    } catch (error) {
      res.send({
        success: false,
        message: 'Unable to get data ' + error
      });
    }
  };

  return {
    getAllStudents: getAllStudents
  };
};

exports.default = studentController;
//# sourceMappingURL=student.controller.js.map
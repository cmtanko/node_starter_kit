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
    if (query) {
      getStudentById(query, res);
    } else {
      listStudents(res);
    }
  };

  return {
    getAllStudents: getAllStudents
  };
};

var handleError = function handleError(error, res) {
  return res.send({
    success: false,
    message: 'Unable to get data,Error:' + error
  });
};

var onSuccess = function onSuccess(result, res) {
  res.send({
    success: true,
    results: result
  });
};

var getStudentById = function getStudentById(query, res) {
  _student2.default.getStudent(query, function (err, data) {
    if (err) {
      handleError(err, res);
    }

    var student = new _student4.default(data);
    onSuccess(student, res);
  });
};

var listStudents = function listStudents(res) {
  _student2.default.getStudentList(function (err, data) {
    if (err) {
      handleError(err, res);
    }

    var students = [];
    data.forEach(function (s) {
      var student = new _student4.default(s);
      students.push(student);
    }, undefined);

    onSuccess(students, res);
  });
};

exports.default = studentController;
//# sourceMappingURL=student.controller.js.map
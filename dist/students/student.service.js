'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStudent = exports.getStudentList = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var students = [{
    'id': 1,
    'firstname': 'Student ',
    'lastname': '1',
    'age': '30',
    'hobbies': ['singing', 'dancing', 'painting', 'cycling', 'treking', 'football'],
    'class': 1,
    'gender': 'Male'
}, {
    'id': 2,
    'firstname': 'Student ',
    'lastname': '2',
    'age': '15',
    'hobbies': ['singing', 'treking', 'football'],
    'class': 5,
    'gender': 'Male'
}, {
    'id': 3,
    'firstname': 'Student ',
    'lastname': '3',
    'age': '25',
    'hobbies': ['football'],
    'class': 3,
    'gender': 'Male'
}, {
    'id': 4,
    'firstname': 'Student ',
    'lastname': '4',
    'age': '25',
    'hobbies': ['painting', 'cycling', 'treking', 'football'],
    'class': 5,
    'gender': 'Male'
}];

var getStudentList = exports.getStudentList = function getStudentList(cb) {
    cb(null, students);
};

var getStudent = exports.getStudent = function getStudent(id, cb) {
    var student = _lodash2.default.find(students, function (s) {
        return s.id === id;
    }) || undefined;
    if (student) {
        cb(null, student);
    } else {
        cb('Unable to get Student with id =' + id, null);
    }
};
exports.default = {
    getStudentList: getStudentList,
    getStudent: getStudent
};
//# sourceMappingURL=student.service.js.map
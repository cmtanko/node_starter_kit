'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import reportService from './report.service';

var studentsController = function studentsController() {
    var getAllStudents = function getAllStudents(req, res) {
        var students = [{
            'name': 'Student 1',
            'roll': '502',
            'address': 'Nepal'
        }, {
            'name': 'Student 2',
            'roll': '505',
            'address': 'China'
        }, {
            'name': 'Student 3',
            'roll': '503',
            'address': 'India'
        }, {
            'name': 'Student 4',
            'roll': '506',
            'address': 'UK'
        }];
        try {
            res.send({
                success: true,
                results: students
            });
        } catch (error) {
            res.send({
                success: false,
                message: "Unable to get data " + error
            });
        }
    };

    return {
        getAllStudents: getAllStudents
    };
};

exports.default = studentsController;
//# sourceMappingURL=students.controller.js.map
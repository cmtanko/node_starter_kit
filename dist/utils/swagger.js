'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

let _path = require('path');

let _path2 = _interopRequireDefault(_path);

let _swaggerJsdoc = require('swagger-jsdoc');

let _swaggerJsdoc2 = _interopRequireDefault(_swaggerJsdoc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// swagger definition
let swaggerDefinition = {
  info: {
    title: 'NODE STARTER KIT 123',
    version: '1.0.0',
    description: 'API with node, starter kit',
  },
  host: 'localhost:3000',
  basePath: '/api',
};

// options for the swagger docs
let options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: [
    _path2.default.join(__dirname, '../**/*.js'),
    _path2.default.join(__dirname, '../*.js'),
  ],
};

// initialize swagger-jsdoc
let swaggerSpec = (0, _swaggerJsdoc2.default)(options);

exports.default = swaggerSpec;
// # sourceMappingURL=swagger.js.map

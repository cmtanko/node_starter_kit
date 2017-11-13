'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
let path = require('path');
let swaggerJSDoc = require('swagger-jsdoc');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
let swaggerDefinition = {
  info: {
    title: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    description: process.env.APP_DESCRIPTION,
  },
  host: process.env.SWAGGER_HOST,
  basePath: process.env.BASE_PATH,
};
let options = {
  swaggerDefinition: swaggerDefinition,
  apis: [path.join(__dirname, '../**/*.js'), path.join(__dirname, '../*.js')],
};
let swaggerSpec = swaggerJSDoc(options);
exports.default = swaggerSpec;
// # sourceMappingURL=swagger.js.map


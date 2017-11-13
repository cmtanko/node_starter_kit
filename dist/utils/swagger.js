"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var swaggerJSDoc = require("swagger-jsdoc");
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}
// swagger definition
var swaggerDefinition = {
    info: {
        title: process.env.APP_NAME,
        version: process.env.APP_VERSION,
        description: process.env.APP_DESCRIPTION,
    },
    host: process.env.SWAGGER_HOST,
    basePath: process.env.BASE_PATH,
    test: __dirname
};
// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: [path.join(__dirname, '../**/*.*'), path.join(__dirname, '../*.*')],
};
// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);
exports.default = swaggerSpec;
//# sourceMappingURL=swagger.js.map
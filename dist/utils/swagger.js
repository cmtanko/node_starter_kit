"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}
// swagger definition
let swaggerDefinition = {
    info: {
        title: process.env.APP_NAME,
        version: process.env.APP_VERSION,
        description: process.env.APP_DESCRIPTION,
    },
    host: process.env.SWAGGER_HOST,
    basePath: "/api",
    test: __dirname
};
// options for the swagger docs
let options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: [path.join(__dirname, '../**/*.*'), path.join(__dirname, '../*.*')],
};
// initialize swagger-jsdoc
let swaggerSpec = swaggerJSDoc(options);
exports.default = swaggerSpec;
//# sourceMappingURL=swagger.js.map
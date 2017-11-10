import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
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
  host: process.env.APP_HOST,
  basePath: process.env.BASE_PATH,
};

// options for the swagger docs
let options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: [path.join(__dirname, '../**/*.js'), path.join(__dirname, '../*.js')],
};

// initialize swagger-jsdoc
let swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

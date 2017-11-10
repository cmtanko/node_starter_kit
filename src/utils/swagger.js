import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

// swagger definition
let swaggerDefinition = {
  info: {
    title: 'NODE STARTER KIT',
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
  apis: [path.join(__dirname, '../**/*.js'), path.join(__dirname, '../*.js')],
};

// initialize swagger-jsdoc
let swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

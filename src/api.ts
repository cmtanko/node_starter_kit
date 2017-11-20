/**
 * Module dependencies
 */
import 'babel-polyfill';

import * as cors from 'cors';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as express from 'express';
import * as Promise from 'bluebird';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as errorHandler from 'errorhandler';
import * as cookieParser from 'cookie-parser';
import expressValidator = require('express-validator');

/**
 * Local file imports
 */
import routes from './routes';
import logger from './utils/logger';
import swaggerSpec from './utils/swagger';

global.Promise = require('bluebird');
dotenv.config({ path: '.env' });

/**
 * Express configuration
 */
const env = process.env.NODE_ENV || 'development';
const app = express();
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.APP_HOST || 'localhost');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static(path.join(__dirname, '/../public')));
app.use(errorHandler());

/**
 * Primary app routes
 */
app.use('/api', routes);

/**
 * Swagger Route
 */
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

/**
 * Basic Homepage view
 */
app.get('/', (req, res) => {
  res.send(
    '<div style="margin:50px;" ><h1>Created with Node Starter kit(' +
      process.env.APP_VERSION +
      ' | ' +
      env +
      ')</h1><br>' +
      '<p>There are various other node starter kit out there yet,<br> Created this one with specific dependencies Features:<p>' +
      '<ul><li>EcmaScript 2015 /ES6</li><li>Typescript</li><li>Postgres</li><li>Knex with Bookshelf</li> <li>Unit Testing Setup with Mocha/Chai</li> <li>Commit checking with Husky and Linting with ESLint</li> <li>Logger</li> <li>Swagger</li> <li>Process Management with PM2</li></ul>' +
      '<br><a href="' +
      '/api-docs" target="_blank"> Documentation </a></div>'
  );
});

/**
 * Start Express Server
 */
app.listen(app.get('port'), () => {
  logger.log(
    'info',
    `Server started at ${app.get('host')}:${app.get('port')}(${app.get('env')})`
  );
});

export default app;

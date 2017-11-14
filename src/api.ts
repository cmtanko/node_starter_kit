import 'babel-polyfill';

import * as cors from 'cors';
import * as path from 'path';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import routes from './routes';
import logger from './utils/logger';
import swaggerSpec from './utils/swagger';
import * as Promise from 'bluebird';
global.Promise = require('bluebird');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
const app = express();
const APP_PORT = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const APP_HOST = process.env.APP_HOST || 'localhost';

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.use(cors());
app.use(helmet());
// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.use('/api', routes);

// serve swagger
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.get('/', (req, res) => {
  res.send(
    '<div style="margin:50px;" ><h1>Created with Node Starter kit(' +
      process.env.APP_VERSION +
      ' | ' +
      env +
      ')</h1><br>' +
      '<p>There are various other node starter kit out there yet,<br> Created this one with specific dependencies Features:<p>' +
      '<ul><li>EcmaScript 2015 /ES6</li> <li>Unit Testing Setup with Mocha/Chai</li> <li>Commit checking with Husky and Linting with ESLint</li> <li>Logger</li> <li>Swagger</li> <li>Process Management with PM2</li></ul>' +
      '<br><a href="' +
      '/api-docs" target="_blank"> Documentation </a></div>'
  );
});

app.listen(APP_PORT, () => {
  logger.log('info', `Server started at ${app.get('host')}:${app.get('port')}`);
});

export default app

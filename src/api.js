import 'babel-polyfill';

import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import express from 'express';
import logger from './utils/logger';
import bodyParser from 'body-parser';
import swaggerSpec from './utils/swagger';

const app = express();
const APP_PORT = process.env.PORT || 3000;
const APP_HOST = process.env.APP_HOST || 'localhost';

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
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
    '<div style="margin:50px;" ><h1>Created with Node Starter kit</h1><br>' +
      '<p>There are various other node starter kit out there yet,<br> Created this one with specific dependencies Features:<p>' +
      '<ul><li>EcmaScript 2015 /ES6</li> <li>Unit Testing Setup with Mocha/Chai</li> <li>Commit checking with Husky and Linting with ESLint</li> <li>Logger</li> <li>Swagger</li> <li>Process Management with PM2</li></ul>' +
      '<br><a href="http://localhost:3000/api-docs" target="_blank"> Documentation </a></div>'
  );
});

app.listen(APP_PORT, () => {
  logger.log('info', 'Server started at ' + APP_HOST + ':' + APP_PORT);
});

export default app;

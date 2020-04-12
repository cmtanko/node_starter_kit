"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies
 */
require("babel-polyfill");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const errorHandler = require("errorhandler");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
/**
 * Local file imports
 */
const routes_1 = require("./routes");
const swagger_1 = require("./utils/swagger");
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
app.use('/api', routes_1.default);
/**
 * Swagger Route
 */
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swagger_1.default);
});
/**
 * Basic Homepage view
 */
app.get('/', (req, res) => {
    res.send('<div style="margin:50px;" ><h1>Created with Node Starter kit(' +
        process.env.APP_VERSION +
        ' | ' +
        env +
        ')</h1><br>' +
        '<p>There are various other node starter kit out there yet,<br> Created this one with specific dependencies Features:<p>' +
        '<ul><li>EcmaScript 2015 /ES6</li><li>Typescript</li><li>Postgres</li><li>Knex with Bookshelf</li> <li>Unit Testing Setup with Mocha/Chai</li> <li>Commit checking with Husky and Linting with ESLint</li> <li>Logger</li> <li>Swagger</li> <li>Process Management with PM2</li></ul>' +
        '<br><a href="' +
        '/api-docs" target="_blank"> Documentation </a></div>');
});
exports.default = app;
//# sourceMappingURL=api.js.map
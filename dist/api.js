"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("babel-polyfill");
var cors = require("cors");
var path = require("path");
var helmet = require("helmet");
var morgan = require("morgan");
var express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./routes");
var logger_1 = require("./utils/logger");
var swagger_1 = require("./utils/swagger");
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}
var app = express();
var APP_PORT = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'development';
var APP_HOST = process.env.APP_HOST || 'localhost';
app.set('port', APP_PORT);
app.set('host', APP_HOST);
app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));
app.use('/api', routes_1.default);
// serve swagger
app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swagger_1.default);
});
app.get('/', function (req, res) {
    res.send('<div style="margin:50px;" ><h1>Created with Node Starter kit(' +
        process.env.APP_VERSION +
        ' | ' +
        env +
        ')</h1><br>' +
        '<p>There are various other node starter kit out there yet,<br> Created this one with specific dependencies Features:<p>' +
        '<ul><li>EcmaScript 2015 /ES6</li> <li>Unit Testing Setup with Mocha/Chai</li> <li>Commit checking with Husky and Linting with ESLint</li> <li>Logger</li> <li>Swagger</li> <li>Process Management with PM2</li></ul>' +
        '<br><a href="' +
        '/api-docs" target="_blank"> Documentation </a></div>');
});
app.listen(APP_PORT, function () {
    logger_1.default.log('info', "Server started at " + app.get('host') + ":" + app.get('port'));
});
exports.default = app;
//# sourceMappingURL=api.js.map
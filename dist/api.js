'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _logger = require('./utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _swagger = require('./utils/swagger');

var _swagger2 = _interopRequireDefault(_swagger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

var app = (0, _express2.default)();
var APP_PORT = process.env.PORT || 3000;
var APP_HOST = process.env.APP_HOST || 'localhost';

app.set('port', APP_PORT);
app.set('host', APP_HOST);
app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.use((0, _cors2.default)());
app.use((0, _helmet2.default)());
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_express2.default.static(_path2.default.join(__dirname, '/../public')));
app.use('/api', _routes2.default);

// serve swagger
app.get('/swagger.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(_swagger2.default);
});

app.get('/', function (req, res) {
  res.send('<div style="margin:50px;" ><h1>Created with Node Starter kit</h1><br>' + '<p>There are various other node starter kit out there yet,<br> Created this one with specific dependencies Features:<p>' + '<ul><li>EcmaScript 2015 /ES6</li> <li>Unit Testing Setup with Mocha/Chai</li> <li>Commit checking with Husky and Linting with ESLint</li> <li>Logger</li> <li>Swagger</li> <li>Process Management with PM2</li></ul>' + '<br><a href="http://' + app.get('host') + ':' + app.get('port') + '/api-docs" target="_blank"> Documentation </a></div>' + 'ENV : ' + process.env.NODE_ENV + JSON.stringify(process.env));
});

app.listen(APP_PORT, function () {
  _logger2.default.log('info', 'Server started at ' + app.get('host') + ':' + app.get('port'));
});

exports.default = app;
//# sourceMappingURL=api.js.map
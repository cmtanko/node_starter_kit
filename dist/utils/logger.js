"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var winston = require("winston");
require("winston-daily-rotate-file");
var tsFormat = function () { return new Date().toISOString(); };
var logDir = process.env.LOGGING_DIR || 'logs';
var logLevel = process.env.LOGGING_LEVEL || 'info';
// Create log directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
/**
 * Create new winston logger instance.
 */
var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            timestamp: tsFormat,
            colorize: true,
            level: logLevel,
        }),
        new winston.transports.DailyRotateFile({
            filename: logDir + "/-debug.log",
            timestamp: tsFormat,
            datePattern: 'yyyy-MM-dd',
            prepend: true,
            level: logLevel,
        }),
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map
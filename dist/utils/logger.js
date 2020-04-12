"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const winston = require("winston");
require("winston-daily-rotate-file");
const tsFormat = () => new Date().toISOString();
const logDir = process.env.LOGGING_DIR || 'logs';
const logLevel = process.env.LOGGING_LEVEL || 'info';
// Create log directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
/**
 * Create new winston logger instance.
 */
const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            timestamp: tsFormat,
            colorize: true,
            level: logLevel,
        }),
        new winston.transports.DailyRotateFile({
            filename: `${logDir}/-debug.log`,
            timestamp: tsFormat,
            datePattern: 'yyyy-MM-dd',
            prepend: true,
            level: logLevel,
        }),
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map
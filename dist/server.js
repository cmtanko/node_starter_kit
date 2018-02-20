"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const logger_1 = require("./utils/logger");
/**
 * Start Express Server
 */
let server = api_1.default.listen(api_1.default.get('port'));
/**
 * Event listener for HTTP server.
 */
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger_1.default.error(`Port ${api_1.default.get('port')} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger_1.default.error(`Port ${api_1.default.get('port')} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});
server.on('listening', () => {
    logger_1.default.log('info', `Server started at ${api_1.default.get('host')}:${api_1.default.get('port')}(${api_1.default.get('env')})`);
});
//# sourceMappingURL=server.js.map
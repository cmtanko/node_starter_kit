import app from './api';
import logger from './utils/logger';

/**
 * Start Express Server
 */
let server = app.listen(app.get('port'));

/**
 * Event listener for HTTP server.
 */
server.on('error', (error: any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`Port ${app.get('port')} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`Port ${app.get('port')} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on('listening', () => {
  logger.log(
    'info',
    `Server started at ${app.get('host')}:${app.get('port')}(${app.get('env')})`
  );
});

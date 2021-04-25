import app from './app';
// const config = require('./config/config');
// const logger = require('./config/logger');

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Application for ray_hay service is running on port - ${PORT}`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      //   logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: any) => {
  //   logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  // logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});

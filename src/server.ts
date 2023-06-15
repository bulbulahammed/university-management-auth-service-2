import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { errorLogger, logger } from './shared/logger';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function DBconnection() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('🛢 Database connected successfully ✔');
    server = app.listen(config.port, () => {
      logger.info(`University server listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('Failed to connect to database 🐞❌', error);
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

// Call the Database Connection.
DBconnection();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});

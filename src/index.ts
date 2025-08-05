import 'reflect-metadata'
import '@src/shared/container'
import logger from 'jet-logger';
import DatabaseConnection from './database/mongo.db';

import ENV from '@src/common/constants/ENV';
import server from './server';


/******************************************************************************
                                Constants
******************************************************************************/

const SERVER_START_MSG = (
  'Express server started on port: ' + ENV.Port.toString()
);

DatabaseConnection()


/******************************************************************************
                                  Run
******************************************************************************/

// Start the server
server.listen(ENV.Port, err => {
  if (!!err) {
    logger.err(err.message);
  } else {
    logger.info(SERVER_START_MSG);
  }
});

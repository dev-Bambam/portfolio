import "reflect-metadata";
import "@src/shared/container";
import DatabaseConnection from "./database/mongo.db";
import ENV from "@src/common/constants/ENV";
import server from "./server";


/******************************************************************************
                                Constants
******************************************************************************/

const SERVER_START_MSG = "Express server started on port: " + ENV.Port.toString();

DatabaseConnection();

/******************************************************************************
                                  Run
******************************************************************************/
// Configure logger

// Start the server
server.listen(ENV.Port, (err) => {
   if (!!err) {
      console.error(err.message);
   } else {
      console.log(SERVER_START_MSG);
   }
});

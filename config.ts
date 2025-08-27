/* eslint-disable n/no-process-env */
import path from "path";
import dotenv from "dotenv";
import moduleAlias from "module-alias";

// Check the env
const NODE_ENV = process.env.NODE_ENV ?? "development";

/** 
 * Configure "dotenv for local development only, 
 * environmetal var config is not needed in prod, and in containerization
 *  as the .env is handle by docker compose and hosting platform
 * */  
let configResult;
console.log(`env: ${NODE_ENV}`)
if (NODE_ENV === "development") {
   configResult = dotenv.config({
      path: path.join(__dirname, `./config/.env.${NODE_ENV}`),
   });
} 

if (configResult?.error) {
   throw configResult.error;
}

// Configure moduleAlias
if (__filename.endsWith("js")) {
   moduleAlias.addAlias("@src", path.join(__dirname, "./src"));
}

import "reflect-metadata";
import "@src/shared/container";
import morgan from "morgan";
import helmet from "helmet";
import express, { Application } from "express";
import indexRouter from "./routes/index.route";
import cors from "cors";
import globalErrorHandler from "./middleware/errorHandler";
import { configureCloudinary } from "./shared/cloudinary";
import ENV from "@src/common/constants/ENV";
import { NodeEnvs } from "@src/common/constants";

const app: Application = express();

// CORS configuration
const corsOption = {
   origin: function (origin: any, callback: any) {
      if (!origin) return callback(null, true);
      return callback(null, true);
   },
   methods: ["GET", "POST", "PUT", "DELETE", "OPTION", "PATCH"],
   allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "Origin",
      "X-Requested-With",
      "Access-Control-Request-Method",
      "Access-Control-Request-Headers",
   ],
   credentials: false,
   optionsSuccessState: 200,
   preflightContinue: false,
};

app.use(cors(corsOption));
// **** Middleware **** //

configureCloudinary();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development
if (ENV.NodeEnv === NodeEnvs.Dev) {
   // app.use(morgan("dev"));
}

// Security
if (ENV.NodeEnv === NodeEnvs.Production) {
   // eslint-disable-next-line n/no-process-env
   if (!process.env.DISABLE_HELMET) {
      app.use(helmet());
   }
}

// Add APIs, must be after middleware
app.use(indexRouter);

// Add error handler
app.use(globalErrorHandler);

export default app;

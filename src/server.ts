import morgan from 'morgan';
import helmet from 'helmet';
import express, {Application} from 'express';
import indexRouter from './routes/index.route'
import cors from 'cors'
import globalErrorHandler from './middleware/errorHandler';

import ENV from '@src/common/constants/ENV';
import { NodeEnvs } from '@src/common/constants';



const app:Application = express();


// **** Middleware **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Show routes called in console during development
if (ENV.NodeEnv === NodeEnvs.Dev) {
  app.use(morgan('dev'));
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

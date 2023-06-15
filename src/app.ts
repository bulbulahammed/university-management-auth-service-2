import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('University Auth Server running Successfully.');
});

// Global error handler
app.use(globalErrorHandler);

//Handle  Route Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found!',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;

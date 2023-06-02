import express, { NextFunction, Request, Response } from 'express';
import router from './router';
import cors from 'cors';

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const handleError = (
  err: TypeError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};

app.disable('etag');
app.use(express.json());
app.use(handleError);
app.use(cors(options));
app.use(router);

export default app;

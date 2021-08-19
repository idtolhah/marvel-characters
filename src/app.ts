import express from 'express';
import 'express-async-errors';
import compression from 'compression';
import { json } from 'body-parser';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './errors/error-handler';
import characterRoutes from './routes/character-routes';

const app = express();
app.use(compression());
app.set('trust proxy', true);
app.use(json());

app.use(characterRoutes);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };

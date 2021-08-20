import express from 'express';
import 'express-async-errors';
import compression from 'compression';
import { json } from 'body-parser';
import swaggerOptions from './utils/swagger-options';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './errors/error-handler';
import characterRoutes from './routes/character-routes';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(compression());

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(characterRoutes);
app.all('*', async (req, res) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };

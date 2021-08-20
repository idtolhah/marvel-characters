import express from 'express';
import 'express-async-errors';
import compression from 'compression';
import { json } from 'body-parser';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './errors/error-handler';
import characterRoutes from './routes/character-routes';

const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(compression());
app.set('trust proxy', true);
app.use(json());

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Marvel Characters API",
      description: "This is the documentation for Marvel Characters API. Every response of the API has been simplified based on the requirements.",
      contact: {
        name: "Tolhah"
      },
      servers: ["http://localhost:8080"]
    }
  },
  // ['.routes/*.js']
  // apis: ["src/app.ts"]
  apis: ["src/routes/*.ts"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(characterRoutes);
app.all('*', async (req, res) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };

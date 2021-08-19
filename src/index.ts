import { app } from './app';
const swaggerAutogen = require('swagger-autogen')();

const start = async () => {
  app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });
};

start();

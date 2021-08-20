import { app } from './app';
import dotenv from 'dotenv';

const start = async () => {
  
  dotenv.config({path: './src/.env'});

  const PORT = process.env.PORT || 8080

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
  });
};

start();

require('dotenv').config({path: './src/.env'});

export const PUBLIC_KEY = process.env.PUBLIC_KEY || '';
export const PRIVATE_KEY =  process.env.PRIVATE_KEY || '';
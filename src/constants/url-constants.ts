require('dotenv').config({path: './src/.env'});

export const BASE_URL = process.env.BASE_URL || '';
export const CHARACTERS_URI = process.env.CHARACTERS_URI || '';
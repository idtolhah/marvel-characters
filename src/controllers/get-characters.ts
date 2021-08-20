import axios from 'axios';
import { Request, Response } from 'express';
import NodeCache from 'node-cache';
import asyncHandler from 'express-async-handler';
import { NotFoundError } from '../errors/not-found-error';
import { PUBLIC_KEY } from '../constants/key-constants';
import { BASE_URL, CHARACTERS_URI } from '../constants/url-constants';
import { ts, hash } from '../utils/hash';

const cache = new NodeCache({ stdTTL: 86400});

// @desc    Get list of characters ID
// @route   GET /characters
// @access  Public
const getCharacters = asyncHandler(async (_req: Request, res: Response) => {

  const limit = 100;

  try {
    let characters: number[] = [];
    if(!cache.has('characters')) {
      const url = `${BASE_URL}${CHARACTERS_URI}?limit=${limit}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash()}`;
      const { data } = await axios.get(url);
      cache.set("characters", data);
    }

    const cachedData: any = cache.get("characters");
    cachedData.data.results.forEach((el: any) => {
        characters.push(el.id);
    });
      
    if (characters) {
      res.status(200).json(characters);
    } 
  } catch (error) {
    throw new NotFoundError();
  }
});

export { getCharacters }
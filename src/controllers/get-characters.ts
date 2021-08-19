import axios from 'axios';
import { Request, Response } from 'express';
import NodeCache from 'node-cache';
import asyncHandler from 'express-async-handler';
import * as crypto from 'crypto';
import { NotFoundError } from '../errors/not-found-error';
import { PRIVATE_KEY, PUBLIC_KEY } from '../constants/key-constants';
import { BASE_URL, CHARACTERS_URI } from '../constants/url-constants';

const cache = new NodeCache({ stdTTL: 3000, checkperiod: 3000});

// @desc    Get list of characters ID
// @route   GET /characters
// @access  Public
const getCharacters = asyncHandler(async (req: Request, res: Response) => {
  console.log(PRIVATE_KEY);
  const ts = +new Date;
  const limit = 100;
  const md5_hash = () => crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest("hex");

  try {
    let characters: number[] = [];
    if(!cache.has('characters')) {
      const url = `${BASE_URL}${CHARACTERS_URI}?limit=${limit}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5_hash()}`;
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
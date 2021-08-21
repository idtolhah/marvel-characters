import axios from 'axios';
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { NotFoundError } from '../errors/not-found-error';
import { PUBLIC_KEY } from '../constants/key-constants';
import { BASE_URL, CHARACTERS_URI } from '../constants/url-constants';
import { ts, hash } from '../utils/hash';
import NodeCache from 'node-cache';
import flatCache from 'flat-cache';

// const cache1 = new NodeCache({ stdTTL: 86400}); // in-memory caching
const cache2 = flatCache.load('characters', require('path').resolve('./.cache')); // flat file for caching

// @desc    Get list of characters ID
// @route   GET /characters
// @access  Public
const getCharacters = asyncHandler(async (_req: Request, res: Response) => {

  const limit = 100;

  try {
    let characters: number[] = [];
    // if(!cache1.has('c1')) {
    if(!cache2.getKey("c2")) {
      const url = `${BASE_URL}${CHARACTERS_URI}?limit=${limit}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash()}`;
      const { data } = await axios.get(url);
      // cache1.set("c1", data);
      cache2.setKey('c2', data);
      cache2.save(true);
    }

    // const cachedData: any = cache1.get("c1");
    const cachedData: any = cache2.getKey("c2");

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
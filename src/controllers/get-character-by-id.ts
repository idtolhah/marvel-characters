import axios from 'axios';
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import * as crypto from 'crypto';
import { PRIVATE_KEY, PUBLIC_KEY } from '../constants/key-constants';
import { BASE_URL, CHARACTERS_URI } from '../constants/url-constants';
import { NotFoundError } from '../errors/not-found-error';

// @desc    Get character by ID
// @route   GET /characters/:id
// @access  Public
const getCharacterById = asyncHandler(async (req: Request, res: Response) => {
  
  const ts = +new Date;
  const md5_hash = () => crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest("hex"); 

  try {
    const url = `${BASE_URL}${CHARACTERS_URI}/${req.params.id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5_hash()}`; 
    const { data } = await axios.get(url);
    
    const character = {
      id: data.data.results[0].id,
      name: data.data.results[0].name,
      description: data.data.results[0].description
    }
      
    if (character) {
      res.status(200).json(character);
    }
  } catch (error) {
    throw new NotFoundError();
  }
});

export { getCharacterById }
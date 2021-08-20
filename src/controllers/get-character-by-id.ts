import axios from 'axios';
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { NotFoundError } from '../errors/not-found-error';
import { PUBLIC_KEY } from '../constants/key-constants';
import { BASE_URL, CHARACTERS_URI } from '../constants/url-constants'
import { ts, hash } from '../utils/hash';

// @desc    Get character by ID
// @route   GET /characters/:id
// @access  Public
const getCharacterById = asyncHandler(async (req: Request, res: Response) => {

  try {
    const url = `${BASE_URL}${CHARACTERS_URI}/${req.params.id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash()}`; 
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
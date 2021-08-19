import express from 'express';
import { getCharacters } from '../controllers/get-characters';
import { getCharacterById } from '../controllers/get-character-by-id';

const router = express.Router();
router.route('/characters').get(getCharacters);
router.route('/characters/:id').get(getCharacterById);

export default router;

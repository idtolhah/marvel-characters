import express from 'express';
import { getCharacters } from '../controllers/get-characters';
import { getCharacterById } from '../controllers/get-character-by-id';

const router = express.Router();

// Routes
/**
 * @swagger
 * /characters:
 *  get:
 *    summary: Use to fetch all characters id limited by 100
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.route('/characters').get(getCharacters);

// Routes
/**
 * @swagger
 * /characters/{characterId}:
 *  get:
 *    summary: Use to fetch a single character by id
 *    parameters:
 *      - name: characterId
 *        in: path
 *        description: id of the character
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Character not found
 */
router.route('/characters/:id').get(getCharacterById);

export default router;

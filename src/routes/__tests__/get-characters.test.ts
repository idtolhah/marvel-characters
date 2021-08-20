import request from 'supertest';
import { app } from '../../app';

it('returns the characters and the number of character is less than and equal to 100', async () => {

  const response = await request(app).get(`/characters`).send().expect(200);

  expect(response.text.split(',').length).toBeLessThanOrEqual(100);
});
import request from 'supertest';
import { app } from '../../app';

test('returns the character if the character is found', async () => {
  const id = 1011127;

  const response = await request(app).get(`/characters/${id}`).send().expect(200);

  expect(response.body.id).toEqual(id);
});

test('returns a 404 if the character is not found', async () => {
  const id = 1238109238012;

  await request(app).get(`/characters/${id}`).send().expect(404);
});

import request from 'supertest';
import { app } from '../../app';

it('returns the character if the character is found', async () => {
  const id = 1011127;

  const response = await request(app).get(`/characters/${id}`).send().expect(200);

  expect(response.body.id).toEqual(id);
});

it('returns a 404 if the character is not found', async () => {
  const id = 1238109238012;

  await request(app).get(`/characters/${id}`).send().expect(404);
});

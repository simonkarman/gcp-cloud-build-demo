import request from 'supertest';
import { app } from '../src/server';

describe('Server', () => {
  it('should respond with a message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toStrictEqual('Server running NodeJS for the demo of Google Cloud Build');
  });
});

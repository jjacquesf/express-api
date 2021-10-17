const request = require('supertest');
require('jest');
const app = require('../app');

describe('GET /users', () => {
    test('should respond with 200 status code', async () =>  {
        const response = await request(app).get('/users').send();
        expect(response.statusCode).toBe(200);
    })
})

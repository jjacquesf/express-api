const request = require('supertest');
require('jest');
const app = require('../app');
const common = require('./common');

describe('GET /users', () => {
    test('should respond with array of users', async () =>  {
        await request(app).get('/users')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(common.isArray)
            .then((res) => {
                for (let model of res.body) {
                    expect(model).toHaveProperty('name');
                    expect(model).toHaveProperty('username');
                    expect(model).toHaveProperty('email');
                    expect(model).toHaveProperty('phone');
                }
            });
    })
})



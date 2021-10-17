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
                    isUserModel(model);
                }
            });
    })
})

describe('POST /users', () => {
    test('should create user and response with the new user model', async () =>  {
        await request(app).post('/users')
            .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFhZmFlZTI0NmY3NjJlMzc1OGRkZjIiLCJzdGF0dXMiOiJFTkFCTEVEIiwiam9iUG9zaXRpb24iOiJTRUxMRVIiLCJkaWNlIjp7Il9pZCI6IjYwMWFlZDgxMjQ2Zjc2MmUzNzU4ZGRlYSIsIm5hbWUiOiJaQVBPVExBTkVKTyIsImNpdHlJZCI6IjYwMWFlYTJjMjQ2Zjc2MmUzNzU4ZGRlOCIsInN0YXRlSWQiOiI2MDFhZTllZDI0NmY3NjJlMzc1OGRkZTciLCJjcmVhdGVkQXQiOiIyMDIxLTAyLTAzVDA2OjAwOjAwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTAyLTAzVDA2OjAwOjAwLjAwMFoiLCJjaXR5RGlzdHJpY3QiOiI2MDFhZWFiZDI0NmY3NjJlMzc1OGRkZTkifSwidXNlcm5hbWUiOiJqamFjcXVlc2YiLCJwYXNzd29yZCI6IiQyYSQxMCR4clcvMDd3Q04zUkI0akFlaGpITFhPU1lxM0ViMENNa1MwbVJtaGIvMEFYbm95alZ0dWxQQyIsImZpcnN0TmFtZSI6IkpPUkdFIEFMQkVSVE8iLCJtaWRkbGVOYW1lIjoiSkFDUVVFUyIsImxhc3ROYW1lIjoiRkFKQVJETyIsInBob25lTnVtYmVyIjoiMzMyMDc4OTMxOCIsInZlaGljbGUiOiI2MDFhZjliYjI0NmY3NjJlMzc1OGRkZjEiLCJjcmVhdGVkQXQiOiIyMDIxLTAyLTAzVDA2OjAwOjAwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTAyLTA0VDA0OjI5OjIzLjIyOVoiLCJpYXQiOjE2MTI1Mzg4Mjh9.Jm0upc3lkd3Qv9ObHrKzdtLrt3YUP6eAepa4ft9OS60')
            .send({
                name: 'New user',
                email: 'newuser@mail.com'
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .then((res) => {
                isUserModel(res.body);
            });
    })
})

describe('PUT /users/1', () => {
    test('should update user and response with the new user model', async () =>  {
        await request(app).put('/users/1')
            .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFhZmFlZTI0NmY3NjJlMzc1OGRkZjIiLCJzdGF0dXMiOiJFTkFCTEVEIiwiam9iUG9zaXRpb24iOiJTRUxMRVIiLCJkaWNlIjp7Il9pZCI6IjYwMWFlZDgxMjQ2Zjc2MmUzNzU4ZGRlYSIsIm5hbWUiOiJaQVBPVExBTkVKTyIsImNpdHlJZCI6IjYwMWFlYTJjMjQ2Zjc2MmUzNzU4ZGRlOCIsInN0YXRlSWQiOiI2MDFhZTllZDI0NmY3NjJlMzc1OGRkZTciLCJjcmVhdGVkQXQiOiIyMDIxLTAyLTAzVDA2OjAwOjAwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTAyLTAzVDA2OjAwOjAwLjAwMFoiLCJjaXR5RGlzdHJpY3QiOiI2MDFhZWFiZDI0NmY3NjJlMzc1OGRkZTkifSwidXNlcm5hbWUiOiJqamFjcXVlc2YiLCJwYXNzd29yZCI6IiQyYSQxMCR4clcvMDd3Q04zUkI0akFlaGpITFhPU1lxM0ViMENNa1MwbVJtaGIvMEFYbm95alZ0dWxQQyIsImZpcnN0TmFtZSI6IkpPUkdFIEFMQkVSVE8iLCJtaWRkbGVOYW1lIjoiSkFDUVVFUyIsImxhc3ROYW1lIjoiRkFKQVJETyIsInBob25lTnVtYmVyIjoiMzMyMDc4OTMxOCIsInZlaGljbGUiOiI2MDFhZjliYjI0NmY3NjJlMzc1OGRkZjEiLCJjcmVhdGVkQXQiOiIyMDIxLTAyLTAzVDA2OjAwOjAwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTAyLTA0VDA0OjI5OjIzLjIyOVoiLCJpYXQiOjE2MTI1Mzg4Mjh9.Jm0upc3lkd3Qv9ObHrKzdtLrt3YUP6eAepa4ft9OS60')
            .send({
                name: 'New user',
                email: 'newuser@mail.com'
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(common.isGenericResponseObject)
            .then((res) => {});
    })
})


describe('DELETE /users/1', () => {
    test('should delete user and response with generic response object', async () =>  {
        await request(app).delete('/users/1')
            .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFhZmFlZTI0NmY3NjJlMzc1OGRkZjIiLCJzdGF0dXMiOiJFTkFCTEVEIiwiam9iUG9zaXRpb24iOiJTRUxMRVIiLCJkaWNlIjp7Il9pZCI6IjYwMWFlZDgxMjQ2Zjc2MmUzNzU4ZGRlYSIsIm5hbWUiOiJaQVBPVExBTkVKTyIsImNpdHlJZCI6IjYwMWFlYTJjMjQ2Zjc2MmUzNzU4ZGRlOCIsInN0YXRlSWQiOiI2MDFhZTllZDI0NmY3NjJlMzc1OGRkZTciLCJjcmVhdGVkQXQiOiIyMDIxLTAyLTAzVDA2OjAwOjAwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTAyLTAzVDA2OjAwOjAwLjAwMFoiLCJjaXR5RGlzdHJpY3QiOiI2MDFhZWFiZDI0NmY3NjJlMzc1OGRkZTkifSwidXNlcm5hbWUiOiJqamFjcXVlc2YiLCJwYXNzd29yZCI6IiQyYSQxMCR4clcvMDd3Q04zUkI0akFlaGpITFhPU1lxM0ViMENNa1MwbVJtaGIvMEFYbm95alZ0dWxQQyIsImZpcnN0TmFtZSI6IkpPUkdFIEFMQkVSVE8iLCJtaWRkbGVOYW1lIjoiSkFDUVVFUyIsImxhc3ROYW1lIjoiRkFKQVJETyIsInBob25lTnVtYmVyIjoiMzMyMDc4OTMxOCIsInZlaGljbGUiOiI2MDFhZjliYjI0NmY3NjJlMzc1OGRkZjEiLCJjcmVhdGVkQXQiOiIyMDIxLTAyLTAzVDA2OjAwOjAwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTAyLTA0VDA0OjI5OjIzLjIyOVoiLCJpYXQiOjE2MTI1Mzg4Mjh9.Jm0upc3lkd3Qv9ObHrKzdtLrt3YUP6eAepa4ft9OS60')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(common.isGenericResponseObject)
            .then((res) => {});
    })
})



function isUserModel(model) {
    expect(model).toHaveProperty('name');
    expect(model).toHaveProperty('username');
    expect(model).toHaveProperty('email');
    expect(model).toHaveProperty('phone');
}
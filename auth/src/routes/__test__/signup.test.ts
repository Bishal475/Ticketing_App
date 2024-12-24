import request from 'supertest';
import {app} from '../../app';

it('retrurns a 201 on successful signup', async()=>{
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: "Password"
        })
        .expect(201);
})

it('retrurns a 400 an invalid email', async()=>{
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'testtest.com',
            password: "Password"
        })
        .expect(400);
})

it('retrurns a 400 an invalid password', async()=>{
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: "P"
        })
        .expect(400);
})

it('retrurns a 400 with missing email and password', async()=>{
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com'
        })
        .expect(400);
    await request(app)
        .post('/api/users/signup')
        .send({
            password: "Password"
        })
        .expect(400);
})
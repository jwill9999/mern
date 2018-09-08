var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var app = require('../server');


describe('API routes', function () {
    it('should get all users', function (done) {
    request(app)
      .get('/api/v1')
      .expect(200)
      .expect('content-type', 'application/json; charset=utf-8', done)

  });


  it('should create a new user ', (done) => {

    request(app)
      .post('/api/v1')
      .send('name=james')
      .expect(201)
      .expect("content-type", "application/json; charset=utf-8", done)
  });

  it('should throw an error if name = empty string ', (done) => {


    request(app)
      .post('/api/v1')
      .send('name=')
      .expect(400)
      .expect("content-type", "application/json; charset=utf-8")
      .expect({
        error: 'You must provide a name'
      }, done)
  });

});

describe('Non api route', () => {
  it('should return html document ', (done) => {

    request(app)
      .get('/')
      .expect(200)
      .expect("content-type", "text/html; charset=UTF-8", done)

  });

  it('should return an html document for unknown routes', (done) => {

    request(app)
      .get('/noroutefound')
      .expect(200)
      .expect("content-type", "text/html; charset=UTF-8", done)

  });
})
const request = require('supertest');
const app = require("./app");


describe("test /api/item", () => {
    it('return code 200', (done) => {
        request(app)
            .post('/api/item')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
});

describe("test /api/register", () => {
    it('return code 200', (done) => {
        request(app)
            .post('/api/register')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
});

describe("test /api/list", () => {
    it('return code 200', (done) => {
        request(app)
            .post('/api/list')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
});
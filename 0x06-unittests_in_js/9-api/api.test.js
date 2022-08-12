const request = require('request');
const { expect } = require('chai');
const { response } = require('express');

describe('Intergration Testing', () => {
    describe('GET /', () => {
        it('Returns StatusCode: 200 | Body: Welcome to the payment system', (done) => {
            const options = {
                url: 'http://localhost:7865',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Welcome to the payment system');
                done();
            });
        });
    });

    describe('GET /cart/10', () => {
        it('Respond with statusCode: 200 and id 10', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/10',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 10');
                done();
            });
        });
    });

    describe('GET /cart/1', () => {
        it('Respond with statusCode: 200 and id 1', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/1',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 1');
                done();
            });
        });
    });

    describe('GET /cart/a1', () => {
        it('Respond with 404', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/a1',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });

    describe('GET /cart/hello', () => {
        it('Respond with 404', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/hello',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });

    describe('GET /cart/', () => {
        it('Respond with 404', (done) => {
            const options = {
                url: 'http://localhost:7865/cart/',
                method: 'GET',
            };

            request(options, function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });
});
